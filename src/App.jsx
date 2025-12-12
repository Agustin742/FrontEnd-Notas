import React from 'react'
import Mansory from './components/Mansory'

const App = () => {

  

  return (
    <div>
      <div className='w-full h-20 border-2 border-black/70 flex items-center justify-center'>
        <div className='h-15 w-15 text-center pt-4 border-2 border-black/70 rounded-full bg-blue-300 '>Logo</div>
        <div className='w-1/3 h-10 border-2 border-black/70 bg-gray-100 rounded-md p-2 ml-4'>Buscador</div>
        <button className='px-2 py-2 h-10 border-2 border-black/70 bg-gray-100 ml-4'>Boton</button>
      </div>
      

    </div>
  )
}

export default App