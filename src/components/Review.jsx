import React from 'react'

const Review = () => {
  return (
    <div className='w-full flex gap-20'>
        {/* left side */}
        <div className='flex flex-col gap-3  w-[50%] font-semibold'>
        <div className='flex  justify-between'>
            <p>Cleanliness</p>
            <div className='flex items-center gap-3'>
                <div className='w-[100px] h-[5px] rounded-lg bg-gray-800'></div>
                <p>5.0</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <p>Communication</p>
            <div className='flex items-center gap-3'>
                <div className='w-[100px] h-[5px] rounded-lg bg-gray-800'></div>
                <p>5.0</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <p>Checkin</p>
            <div className='flex items-center gap-3'>
                <div className='w-[100px] h-[5px] rounded-lg bg-gray-800'></div>
                <p>5.0</p>
            </div>
        </div>
       
        </div>
       {/* right side */}
        <div className='flex flex-col gap-3  w-[50%] font-semibold'>
        <div className='flex justify-between'>
            <p>Accuracy</p>
            <div className='flex items-center gap-3'>
                <div className='w-[100px] h-[5px] rounded-lg bg-gray-800'></div>
                <p>5.0</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <p>Location</p>
            <div className='flex items-center gap-3'>
                <div className='w-[100px] h-[5px] rounded-lg bg-gray-800'></div>
                <p>5.0</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <p>Value</p>
            <div className='flex items-center gap-3'>
                <div className='w-[100px] h-[5px] rounded-lg bg-gray-800'></div>
                <p>5.0</p>
            </div>
        </div>
       
        </div>
    </div>
  )
}

export default Review