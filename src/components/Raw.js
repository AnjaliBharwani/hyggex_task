import React from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import image from "./asset/Frame.png"


function Raw() {
  return (
    <>
    {/* first section */}
    <div className='pt-10 pl-20 pr-20 flex items-center caret-gray-900 text-3xl'>
        <img src={image} alt='Frame' className='mr-2' />
        <p className='text-xl'>
          <span className='semi-bold text-gray-500'> > Flashcard > Mathematics > </span>
          <span className='font-bold text-blue-900'>Relation and Function</span>
        </p>
      </div>

{/* second section */}
    <div className='pt-10 pl-20 pr-20' >
        <p className='text-4xl font-bold text-blue-800 '>Relation and Function ( Mathematics ) </p>
    </div>
    </>
  )
}

export default Raw
