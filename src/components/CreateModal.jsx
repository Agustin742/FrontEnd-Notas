import { useState } from "react"
import BaseModal from "./BaseModal"
import createNote from "../utils/createNotes"

const CreateModal = ({ isOpen, onClose, setNotes }) => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])
  const [nameTag, setNameTag] = useState("")
  const [color, setColor] = useState(null)

  const handleCreate = async () => {
  await createNote(title, content, setNotes)
  resetForm()
  onClose()
  }

  const handleAddTag = () => {
  if (!nameTag || !color) return

  setTags(prev => [
    ...prev,
    { name: nameTag, color }
  ])

  setNameTag("")
  setColor(null)
  }

  const resetForm = () => {
  setTitle("")
  setContent("")
  setNameTag("")
  setColor(null)
  setTags([])
  }

  const colors = {
  Azul: "bg-blue-500",
  Verde: "bg-emerald-500",
  Oscuro: "bg-neutral-900",
}
  


  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-3">
        Crear Nota
      </h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label
        htmlFor="lbl-title"
        >Título:</label>
        <input
          type="text"
          name="title"
          id="lbl-title"
          className="w-full mb-3 p-2 rounded bg-black/40"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />

        <label
        htmlFor="lbl-content"
        >Texto:</label>
        <textarea
          name="content"
          id="lbl-content"
          className="w-full p-2 rounded bg-black/40"
          value={content}
          onChange={(e) => {setContent(e.target.value)}}
        />
        
        <h2 className="text-lg font-semibold mb-3">
        Tags:
        </h2>

        <label htmlFor="lbl-color"
        className="block"
        >Nombre:</label>
        <input
          type="text"
          name="name"
          id="lbl-name"
          className="w-full mb-3 p-2 rounded bg-black/40"
          value={nameTag}
          onChange={(e) => {setNameTag(e.target.value)}}
        />

        <label htmlFor="lbl-color"
        className="block"
        >Color:</label>
          <select
          onChange={(e) => setColor(colors[e.target.value])}
          className={`border p-2 rounded ${color}`}
        >
          {Object.keys(colors).map(c => (
            <option key={c}
            className={`bg-white text-black`}
            >{c}</option>
          ))}
        </select>

        <button
        type="button"
        onClick={handleAddTag}
        className="m-2 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500"
        >
          Agregar tag
        </button>
        

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-1 rounded text-sm text-white ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>


        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={() => {
              resetForm()
              onClose()
            }}
          >
            Cancelar
          </button>

          <button
            type="submit"
            onClick={() => handleCreate()}
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-500"
          >
            Crear
          </button>
        </div>
      </form>
    </BaseModal>  
  )
}

export default CreateModal
