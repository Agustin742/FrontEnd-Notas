import { useState } from "react"
import BaseModal from "./BaseModal"
import createNote from "../utils/createNotes"

const CreateModal = ({ isOpen, onClose, setNotes }) => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleCreate = async () => {
  await createNote(title, content, setNotes)
  onClose()
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
        htmlFor="lbl-content
        ">Texto:</label>
        <textarea
          name="content"
          id="lbl-content"
          className="w-full p-2 rounded bg-black/40"
          value={content}
          onChange={(e) => {setContent(e.target.value)}}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={onClose}
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
