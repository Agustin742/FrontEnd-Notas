import tags from "../data/tag.mockup.js"

const findTagById = (id) => {
  const tag = tags.find(t => t.id === id)
  return tag ? tag.color : "#444"
}

export default findTagById
