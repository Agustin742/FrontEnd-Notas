import { useEffect, useState } from 'react'
import Mansory from './Mansory'
import getNotes from '../utils/getNotes.js'

const NoteSection = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
      getNotes(setNotes)
  }, [])

  console.log(notes);

  return (
    <div className='w-full bg-[#2d2d29] text-[#dfece6]'>
      <div className='w-3/4 mx-auto my-5 '>
          <Mansory items={notes}/>
      </div>
    </div>
  )
}

export default NoteSection