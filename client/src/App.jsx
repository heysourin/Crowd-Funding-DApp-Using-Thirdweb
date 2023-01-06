import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] flex flex-row ">

      <div className="sm:flex hidden mr-10 relative font-bold">Sidebar</div>

      <div className="flex-1 max-sm:w-full max-w-[1280-px] mx-auto sm:pr-5 ">
        Navbar
        <p className='font-xl font-bold'>Text</p>
      </div>
    </div>
  )
}

export default App
