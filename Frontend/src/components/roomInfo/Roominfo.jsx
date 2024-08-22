import React from 'react'
import './roomInfo.css'
import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdDryCleaning } from "react-icons/md";

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';

import Imgslider from './ImageSlider/Imgslider';
import Paymentcard from './PaymentCard/Paymentcard';
const Roominfo = () => {
    return (
        <>
            <Imgslider />
            <div className="detailsandpaycard">
                <div className="roomDetails">
                    <div className="detailscomp">
                        <h2>BDS Deluxe Room</h2>
                        <p>Near Prem Mandir</p>
                        <h3>Amenities</h3>
                        <div className='amenties'>
                            <div >
                                <span><FaWifi />Free wifi</span>
                                <span><TbAirConditioning />AC</span>
                            </div>

                            <div>
                                <span><PiTelevisionSimpleBold />TV</span>
                                <span><MdDryCleaning />
                                    Regular Housekeeping</span>
                            </div>

                        </div>
                        <div className="description" style={{ marginTop: "50px" }}>
                            <h3>About this room</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,adipisicing elit. Cumque ipsa </p>
                            reprehenderit facere
                        </div>
                    </div>
                </div>
                <Paymentcard />

            </div>
        </>
    )
}

export default Roominfo
