import React from 'react'
import CardImg from "../../assets/video.png"
import './card.css'
import { IoIosWifi } from "react-icons/io";
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { PiShowerBold } from "react-icons/pi";
import Button from 'react-bootstrap/Button';


const Card = () => {
    return (
        <>

            <div className='card'>
                <img src={CardImg} alt="" />
                <div className='cardtext'>
                    <p>The Royal Room</p>
                    <p>Rs. 1000</p>
                </div>
                <div style={{ height: "1px", border: "0.5px solid gray " }}> </div>
                <div className='iconandbtn'>
                    <div className="icons">
                        <IoIosWifi size="20" />
                        <PiTelevisionSimpleThin size="20" />
                        <PiShowerBold size="20" />
                    </div>
                    <div>
                        <Button className="bookbtn" variant="primary">Book Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
