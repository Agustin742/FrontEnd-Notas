import BaseModal from "./BaseModal"

const NoteModal = ({ isOpen, onClose, note, onSave }) => {
  const isEdit = Boolean(note)

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Editar nota" : "Crear nota"}
      </h2>

      <input
        className="w-full mb-3 p-2 rounded bg-black/40"
        defaultValue={note?.title || ""}
        placeholder="Título"
      />

      <textarea
        className="w-full mb-4 p-2 rounded bg-black/40"
        defaultValue={note?.content || ""}
        placeholder="Contenido"
      />

      <div className="flex justify-end gap-2">
        <button onClick={onClose}>Cancelar</button>
        <button
          className="bg-green-600 px-3 py-1 rounded"
          onClick={onSave}
        >
          {isEdit ? "Guardar cambios" : "Crear"}
        </button>
      </div>
    </BaseModal>
  )
}

export default NoteModal
