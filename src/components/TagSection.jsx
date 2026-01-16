// import tags from '../data/tag.mockup'

const TagSection = ( {tags} ) => {
  return (
    <div className='w-full bg-[#2d2d29] py-3'>
        <div className='mx-auto max-w-7xl px-4 flex'>
            { tags && tags.map(tag => (
                <div 
                key={tag._id} 
                className={`text-gray-700 text-sm font-medium px-3 py-1 mx-2 border-none rounded hover:scale-105 transition duration-300   cursor-pointer ${tag.color}`}>
                    {tag.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default TagSection