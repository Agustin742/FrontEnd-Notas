let urlNotes

if (import.meta.env.MODE === 'development') {
urlNotes = import.meta.env.VITE_BACKEND_TAGS
} else {
urlNotes = import.meta.env.VITE_BACKEND_CLOUD
}

const createTag = async (newTags, setTags) => {

    try {

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(newTags)
        }

        const res = await fetch(urlNotes , options)

        if (!res.ok) {
        throw new Error('No se pudo obtener los productos')
        }
        
        const prods = await res.json()
        setTags(prev => Array.isArray(prev)
        ? [...prev, prods.data]
        : [prods.data]
    )


    } catch (error) {
        console.error(error)
    }
}

export default createTag