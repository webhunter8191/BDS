import { useState } from 'react'

import './App.css'
import RoomPayCard from './components/roomDetails/roomPayCard/RoomPayCard';
import RoomDetails from './components/roomDetails/RoomDetails';
import Imgslider from './components/roomDetails/Imgslider/Imgslider';

function App() {


  return (
    <>
      <header className="w-full p-4 flex justify-between items-center bg-white shadow-md z-10 h-[90px]">
        <div className="text-2xl font-bold text-pink-600">
          Brij Divine Stay ❤️
        </div>
        <div>
          <button className="text-gray-700 mr-4" onClick={() => navigate("/signup")}>
            Sign up
          </button>
          <button href="#" className="text-gray-700 mr-4" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </header>
      <div></div>
      <div className="mb-10">
        <Imgslider />
      </div>
      <div style={{ display: "flex", gap: "2px" }}>
        <div className='mx-auto ' >

          <RoomDetails />

        </div>
        <div className='h-full'>
          <RoomPayCard />
        </div>
      </div >
    </>
  )
}

export default App
