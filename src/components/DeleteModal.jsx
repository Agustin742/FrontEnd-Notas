import BaseModal from "./BaseModal"

const DeleteModal = ({ isOpen, onClose, noteId }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-3">
        ¿Borrar nota #{noteId}?
      </h2>

      <p className="text-sm text-gray-300 mb-4">
        Esta acción no se puede deshacer.
      </p>

      <div className="flex justify-end gap-2">
        <button onClick={onClose}>Cancelar</button>
        <button className="bg-red-600 px-3 py-1 rounded">
          Borrar
        </button>
      </div>
    </BaseModal>
  )
}

export default DeleteModal
