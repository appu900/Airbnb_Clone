import React from 'react'
import MainNav from './MainNav'
import IconSlider from './IconSlider'

const Navbar = () => {
  return (
    <div className='sticky w-full top-0 z-10 h-auto bg-white '>
       <MainNav/>
       <div className="px-20 h-auto mt-9  ">
        <IconSlider/>
       </div>
    </div>
  )
}

export default Navbar