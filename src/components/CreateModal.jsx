import BaseModal from "./BaseModal"

const CreateModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-3">
        Crear Nota
      </h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Título:</label>
        <input
          type="text"
          className="w-full mb-3 p-2 rounded bg-black/40"
        />

        <label>Texto:</label>
        <textarea
          className="w-full p-2 rounded bg-black/40"
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
