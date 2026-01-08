import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import TagSection from './components/TagSection'
import NoteSection from './components/NoteSection'
import getNotes from './utils/getNotes'

const App = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
      getNotes(setNotes)
  }, [])

  return (
    <div className='bg-[#2d2d29] h-screen'>

      {/* NAV BAR */}
      <NavBar setNotes={setNotes}/>

      {/* TAG SECTION */}
      <TagSection />

      {/* NOTAS SECTION  */}
      <NoteSection notes={notes} />
    </div>
  )
}

export default App