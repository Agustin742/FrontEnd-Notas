import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import TagSection from './components/TagSection'
import NoteSection from './components/NoteSection'
import getNotes from './utils/getNotes'
import getTags from './utils/getTags'

const App = () => {

  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
      getNotes(setNotes)
      getTags(setTags)
  }, [])


  return (
    <div className='bg-[#2d2d29] h-screen'>

      {/* NAV BAR */}
      <NavBar setNotes={setNotes} setTags={setTags}/>

      {/* TAG SECTION */}
      <TagSection tags={tags}/>

      {/* NOTAS SECTION  */}
      <NoteSection notes={notes} />
    </div>
  )
}

export default App