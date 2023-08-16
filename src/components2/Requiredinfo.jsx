import React from 'react'

const Requiredinfo = () => {
  return (
    <div className='flex flex-col gap-8 text-gray-700'>
        <div className='flex justify-between'>
             <div className='text-left'>
                <p className='font-semibold text-[17px]'>Message the host</p>
                <p className='text-sm'>Let the host know why you're travelling and when you'll check in.</p>
             </div>
             <div className='border rounded-md px-3 py-2 bg-black text-white cursor-pointer border-black'>
                <p>add</p>
             </div>
        </div>

        <div className='flex justify-between'>
             <div className='text-left'>
                <p className='font-semibold text-[17px]'>Profile photo</p>
                <p className='text-sm'>Hosts want to know who’s staying at their place.</p>
             </div>
             <div className='border rounded-md px-3 py-2 bg-black text-white cursor-pointer border-black'>
                <p>add</p>
             </div>
        </div>

        <div className='flex justify-between'>
             <div className='text-left'>
                <p className='font-semibold text-[17px]'>Permanent Account Number (PAN)</p>
                <p className='text-sm'>A valid PAN is required per Reserve Bank of India (RBI) regulations.</p>
             </div>
             <div className='border rounded-md px-3 py-2 bg-black text-white cursor-pointer border-black'>
                <p>add</p>
             </div>
        </div>

        <div className='flex justify-between'>
             <div className='text-left'>
                <p className='font-semibold text-[17px]'>Phone number</p>
                <p className='text-sm'>Let the host know why you're travelling and when you'll check in.</p>
             </div>
             <div className='border rounded-md px-3 py-2 bg-black text-white cursor-pointer border-black'>
                <p>add</p>
             </div>
        </div>
    </div>
  )
}

export default Requiredinfo