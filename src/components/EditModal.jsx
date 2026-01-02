import BaseModal from "./BaseModal"

const EditModal = ({ isOpen, onClose, noteId }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">
        Editar: {noteId}
      </h2>

      <input
        className="w-full mb-3 p-2 rounded bg-black/40"
        placeholder="Título"
      />

      <textarea
        className="w-full p-2 rounded bg-black/40"
        placeholder="Contenido"
      />

      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose}
        className="hover:scale-102 hover:duration-300"
        >Cancelar</button>

        <button className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 hover:scale-102 duration-300">
          Guardar
        </button>
      </div>
    </BaseModal>
  )
}

export default EditModal
