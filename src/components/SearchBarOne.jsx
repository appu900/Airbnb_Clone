import React from 'react'

const SearchBarOne = () => {
  return (
    <div className='w-[360px] h-[50px] xl:ml-40 gap-2  border border-gray-300 flex justify-evenly items-center font-nunito rounded-full text-gray-800 text-[14px] font-semibold shadow-lg cursor-pointer '>
      <p className='ml-2'>Anywhere</p>
      <div className='w-[1px] h-5 bg-gray-300'></div>
      <p>Any Week</p>
      <div className='w-[1px] h-5 bg-gray-300'></div>
      <p className='text-gray-500 font-normal'>Add guest</p>
      <div className='w-8  h-8 border flex justify-center items-center rounded-full bg-[#FF385C] text-white cursor-pointer'>
        <span className='mt-1 font-bold text-[12px]'><ion-icon name="search-outline"></ion-icon></span>
      </div>

    </div>
  )
}

export default SearchBarOne