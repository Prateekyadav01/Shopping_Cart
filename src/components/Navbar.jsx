import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import Home from '../pages/Home';

function Navbar() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-around w-full bg-blue-500 h-44 items-center'>
        <img src="" alt="No immage" />
        <div className='flex justify-center items-center gap-2 hover:bg-yellow-400 cursor-pointer'>
          <Link to={"/"}>
              Home
          </Link>
          <FaCartArrowDown />
        </div>
      </div>
 
    </div>
  )
}

export default Navbar 
