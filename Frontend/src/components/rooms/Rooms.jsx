import React from 'react'
import "./rooms.css"
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Card from '../roomsCards/Card'


const Rooms = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='cards'>
                <Card />
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}

            </div></>
    )
}

export default Rooms
