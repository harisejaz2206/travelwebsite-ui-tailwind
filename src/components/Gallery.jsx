import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className=' text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1676140619787-3ec59eaebbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1675670743878-a30bd5ea03e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery