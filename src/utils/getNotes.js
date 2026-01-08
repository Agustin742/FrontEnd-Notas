let urlNotes

if (import.meta.env.MODE === 'development') {
urlNotes = import.meta.env.VITE_BACKEND
} else {
urlNotes = import.meta.env.VITE_BACKEND_CLOUD
}

const getNotes = async (setNotes) => {

try {

    const res = await fetch(urlNotes)

    if (!res.ok) {
    throw new Error('No se pudo obtener los productos')
    }
    
    const prods = await res.json()
    setNotes(prods.data) 

} catch (error) {
    console.error(error)
}
}

export default getNotes