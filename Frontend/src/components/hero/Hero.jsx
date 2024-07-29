import React from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import './hero.css'

const Hero = () => {
    return (
        <>
            <div className='heroSection'>
                <div className='heroPara'>
                    <p>Rooms and Suites</p>
                    <p>The elegant luxury bedrooms in this gallery showcase custom interior
                        designs & decorating ideas. View pictures and find your
                        perfect luxury bedroom design.</p>
                    <FaRegArrowAltCircleDown id='arricon' />
                </div>



            </div>
        </>
    )
}

export default Hero
