const BaseModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* contenido */}
      <div className="relative z-10 bg-[#2d2d29] text-[#dfece6] p-6 rounded-lg w-full max-w-md">
        {children}
      </div>
    </div>
  )
}

export default BaseModal
