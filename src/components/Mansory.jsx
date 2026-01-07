import { useState } from "react"
import findTagById from "../utils/findTagById"
import OpenModal from "./openModal"

const Mansory = ({ items }) => {
  const [isOpen, setIsOpen] = useState(null)

  const onOpen = (id) => {
    setIsOpen(id)
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
              onClick={() => onOpen(i)}
            >
              <h2 className="font-semibold">{i.title}</h2>
              <p>{i.content}</p>

              </div>
          )
        })}
      </div>



      <OpenModal 
      isOpen={isOpen !== null}
      note={isOpen}
      onClose={() => setIsOpen(null)}
      />
    </>
  )
}

export default Mansory
