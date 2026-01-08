import Mansory from './Mansory'

const NoteSection = ( {notes} ) => {

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