let urlNotes

if (import.meta.env.MODE === 'development') {
urlNotes = import.meta.env.VITE_BACKEND_TAGS
} else {
urlNotes = import.meta.env.VITE_BACKEND_CLOUD
}

const createTag = async (newTags) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTags)
    }

    const res = await fetch(urlNotes, options)

    if (!res.ok) {
      throw new Error('Error al crear tags')
    }

    const response = await res.json()

    // response.data es un array de tags con _id
    return response.data

  } catch (error) {
    console.error(error)
    throw error
  }
}

export default createTag
