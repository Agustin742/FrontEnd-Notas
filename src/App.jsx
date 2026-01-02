import React from 'react'
import NavBar from './components/NavBar'
import TagSection from './components/TagSection'
import NoteSection from './components/NoteSection'

const App = () => {


  return (
    <div className='bg-[#2d2d29] h-screen'>

      {/* NAV BAR */}
      <NavBar />

      {/* TAG SECTION */}
      <TagSection />

      {/* NOTAS SECTION  */}
      <NoteSection />
    </div>
  )
}

export default App