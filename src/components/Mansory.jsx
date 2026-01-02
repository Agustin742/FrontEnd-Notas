import { useState } from "react"
import findTagById from "../utils/findTagById"
import EditModal from "./EditModal"
import DeleteModal from "./DeleteModal"

const Mansory = ({ items }) => {
  const [editId, setEditId] = useState(null)
  const [deleteId, setDeleteId] = useState(null)

  const onEdit = (id) => {
    setEditId(id)
  }

  const onDelete = (id) => {
    setDeleteId(id)
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {items.map((i) => {
          if (i.archived) return null

          const bgColor = findTagById(i.tags?.[0])
          const hasTag = bgColor !== "#444"

          return (
            <div
              key={i.id}
              className={`group relative mb-4 break-inside-avoid p-3 rounded-lg border-4 bg-black/30 hover:scale-102 duration-300 hover:shadow-md hover:shadow-white/10 ${
                hasTag ? "text-white" : "text-[#dfece6]"
              }`}
              style={{ borderColor: bgColor }}
            >
              <h2 className="font-semibold">{i.title}</h2>
              <p>{i.content}</p>

              <div className="absolute top-2 right-2 flex gap-2 md:opacity-0 group-hover:opacity-100  transition-opacity">
                <button
                  className="bg-black/80 hover:bg-white/30 text-white text-xs px-2 py-1 rounded hover:scale-105 duration-300"
                  onClick={() => onEdit(i.title)}
                >
                  Editar
                </button>

                <button
                  className="bg-red-600/70 hover:bg-red-500 text-white text-xs px-2 py-1 rounded hover:scale-105 duration-300"
                  onClick={() => onDelete(i.id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <EditModal
        isOpen={editId !== null}
        noteId={editId}
        onClose={() => setEditId(null)}
      />

      <DeleteModal
        isOpen={deleteId !== null}
        noteId={deleteId}
        onClose={() => setDeleteId(null)}
      />
    </>
  )
}

export default Mansory
