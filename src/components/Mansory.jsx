
const Mansory = ({ items }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {items.map((src, i) => (
        <div key={i} className="mb-4 break-inside-avoid">
          <img
            src={src}
            alt={`img-${i}`}
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default Mansory