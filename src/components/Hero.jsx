import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2696&q=80' alt='/' className='w-full h-full object-cover'></img>
        <div className=' max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Escape to paradise this holiday season and indulge in breathtaking beaches, azure waters, and endless sunshine. Whether you're seeking a romantic getaway, a family adventure, or a solo retreat, our handpicked destinations offer something for everyone. Discover your perfect vacation and create memories that will last a lifetime.</p>
            </div>
        </div>
    </div>
    
  )
}

export default Hero