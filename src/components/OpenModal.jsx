import React, { useState } from 'react'
import BaseModal from './BaseModal'
import DeleteModal from './DeleteModal'

const OpenModal = ({ isOpen, onClose, note }) => {

    const [deleteId, setDeleteId] = useState(null)

    const onDelete = (id) => {
    setDeleteId(id)
  }


  return (
    note && (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
            Título:
        </label>
        <input
          type="text"
          className="w-full mb-3 p-2 rounded bg-black/40"
          placeholder={note.title}
        />

        <label>Texto:</label>
        <textarea
          className="w-full p-2 rounded bg-black/40 h-40"
          placeholder={note.content}
        />

        <div className="flex justify-between ">
          <div
          className='flex justify-end gap-2 mt-4'
          >
            <button
            className='bg-blue-700 px-3 py-1 rounded hover:bg-blue-600 hover:scale-102 duration-300'
            >
                archivar
            </button>
            <button
            className='bg-red-700 px-3 py-1 rounded hover:bg-red-600 hover:scale-102 duration-300'
            onClick={() => onDelete(note.id)}
            >
                Borrar
            </button>
          </div>
          <div
          className='flex justify-end gap-2 mt-4'
          >
            <button
                className='hover:scale-102 hover:duration-300'
                type="button"
                onClick={onClose}
            >
                Cancelar
            </button>

            <button
                type="submit"
                className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 hover:scale-102 duration-300"
            >
                Editar
            </button>
          </div>
        </div>
      </form>

        <DeleteModal
        isOpen={deleteId !== null}
        noteId={deleteId}
        onClose={() => setDeleteId(null)}
      />
    </BaseModal>
  ))

}

export default OpenModal