let urlNotes

if (import.meta.env.MODE === 'development') {
urlNotes = import.meta.env.VITE_BACKEND_NOTES
} else {
urlNotes = import.meta.env.VITE_BACKEND_CLOUD
}

const createNote = async (noteData, setNotes) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteData)
    }

    const res = await fetch(urlNotes, options)

    if (!res.ok) {
      throw new Error('Error al crear la nota')
    }

    const response = await res.json()

    setNotes(prev =>
      Array.isArray(prev)
        ? [...prev, response.data]
        : [response.data]
    )

    return response.data

  } catch (error) {
    console.error(error)
    throw error
  }
}

export default createNote
