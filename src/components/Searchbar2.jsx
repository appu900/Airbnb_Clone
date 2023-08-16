import React from 'react'

const Searchbar2 = () => {
  return (
    <div className='w-[310px] h-[50px] xl:ml-40 gap-2  border border-gray-300 flex justify-between px-4 items-center font-nunito rounded-full text-gray-800 text-[14px] font-semibold shadow-lg cursor-pointer '>
    <p className='ml-2'>Start your search</p>
    
    <div className='w-8  h-8 border flex justify-center items-center rounded-full bg-[#FF385C] text-white cursor-pointer'>
      <span className='mt-1 font-bold text-[12px]'><ion-icon name="search-outline"></ion-icon></span>
    </div>

  </div>
  )
}

export default Searchbar2