import React, { useState } from 'react'
import CreateModal from './CreateModal'

const NavBar = ( {setNotes, setTags} ) => {
  const [createTitle, setCreateTitle] = useState(null)

  const createNote = (id) => {
    setCreateTitle(id)
  }

  return (
      <nav className="sticky top-0 z-50 w-full bg-[#2d2d29]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-24 items-center justify-between">

          {/* IZQUIERDA: Logo + buscador */}
          <div className="flex flex-1 items-center gap-6">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="../../public/imgs/logo.png"
                alt="Logo"
                className="h-12 w-12 object-contain "
              />
            </div>

            {/* Buscador */}
            <div className="flex flex-1 gap-4 max-w-2xl">
              <input
                type="text"
                placeholder="Buscar Nota..."
                className="w-full rounded-lg border px-4 py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#92c7a3] bg-[#dfece6]"
              />

              {/* Boton: Buscar */}
              <button className="whitespace-nowrap rounded-lg bg-[#3ca2a2] px-6 py-3 text-md font-medium text-black hover:bg-[#a4deb6] transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-[#215a6d]">
                Buscar
              </button>
            </div>
          </div>

          {/* DERECHA: Crear nota */}
          <div className="flex items-center">
            <button 
            onClick={() => createNote(true)}
            className="whitespace-nowrap rounded-lg bg-[#92c7a3] px-6 py-3 text-md font-medium text-black hover:bg-[#dfece6] transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-[#215a6d]">
              Nueva Nota
            </button>
          </div>

          <CreateModal 
          isOpen={createTitle ==! false }
          onClose={() => setCreateTitle(null)}
          setNotes={setNotes}
          setTags={setTags}
          />

        </div>
      </div>
    </nav>
  )
}

export default NavBar