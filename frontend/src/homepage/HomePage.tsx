import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>

      <div className="flex justify-around">
        <Link className='text-blue-600 bg-[#f4f4f5] text-xl' to={"/newdashboard"}>newdashboard</Link>
        <Link className='text-blue-600 text-xl' to={"/login"}>login</Link>
        <Link className='text-blue-600 text-xl' to={"/block"}>block</Link>
    

      </div>
    </>
  )
}

export default HomePage
