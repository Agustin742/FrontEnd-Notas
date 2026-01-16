let urlNotes

if (import.meta.env.MODE === 'development') {
urlNotes = import.meta.env.VITE_BACKEND_TAGS
} else {
urlNotes = import.meta.env.VITE_BACKEND_CLOUD
}

const getTags = async (setTags) => {

try {

    const res = await fetch(urlNotes)

    if (!res.ok) {
    throw new Error('No se pudo obtener los tags')
    }
    
    const prods = await res.json()
    setTags(prods.data) 

} catch (error) {
    console.error(error)
}
}

export default getTags