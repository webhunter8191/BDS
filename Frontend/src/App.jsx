import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Card from './components/roomsCards/Card'
import Roominfo from './components/roomInfo/Roominfo'

function App() {


  return (
    <>
      <Navbar />
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

      </div>
      {/* <Roominfo /> */}

    </>
  )
}

export default App
