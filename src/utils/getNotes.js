let urlProductos

if (import.meta.env.MODE === 'development') {
urlProductos = import.meta.env.VITE_BACKEND
} else {
urlProductos = import.meta.env.VITE_BACKEND_CLOUD
}

const getNotes = async (setProductos) => {

try {

    const res = await fetch(urlProductos)

    if (!res.ok) {
    throw new Error('No se pudo obtener los productos')
    }
    
    const prods = await res.json()
    setProductos(prods.data) 

} catch (error) {
    console.error(error)
}
}

export default getNotes