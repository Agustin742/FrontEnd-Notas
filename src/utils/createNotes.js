let urlNotes

if (import.meta.env.MODE === 'development') {
urlNotes = import.meta.env.VITE_BACKEND_NOTES
} else {
urlNotes = import.meta.env.VITE_BACKEND_CLOUD
}

const createNote = async (title, content, setNotes) => {

const newNote = {title, content}


try {

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(newNote)
    }

    const res = await fetch(urlNotes , options)

    if (!res.ok) {
    throw new Error('No se pudo obtener los productos')
    }
    
    const prods = await res.json()
    setNotes(prev => Array.isArray(prev)
    ? [...prev, prods.data]
    : [prods.data]
)


} catch (error) {
    console.error(error)
}
}

export default createNote