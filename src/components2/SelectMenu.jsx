import React from 'react'

const SelectMenu = ({title}) => {
  return (
    <div className=' w-full px-4 py-4 gap-3 flex justify-between rounded-lg items-center border border-gray-600'>
        <label htmlFor="bank" className='text-semibold  text-gray-500'>{title}</label>
        <select name="" id="bank" value="Enter payment Method" className='w-[400px] '>
            <option value=""></option>
            <option value="">upi</option>
            <option value="">upi</option>
            <option value="">upi</option>
            <option value="">upi</option>
            <option value="">upi</option>

        </select>
    </div>
  )
}

export default SelectMenu