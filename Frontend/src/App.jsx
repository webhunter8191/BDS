import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Card from './components/roomsCards/Card'
import Roominfo from './components/roomInfo/Roominfo'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from './components/rooms/Rooms'


function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rooms />}>

            {/* <Route path="/roominfo" element={<Roominfo />} /> */}

          </Route>
        </Routes>
      </BrowserRouter >

      {/* <Navbar />
      <Hero />
      <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div> */}
      {/* <Navbar />
      <Roominfo /> */}

    </>
  )
}

export default App
