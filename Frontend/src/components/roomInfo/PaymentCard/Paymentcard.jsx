import React from 'react'
import './paymentcard.css'
import { DateRangePicker } from 'rsuite';
import Button from 'react-bootstrap/Button';
const Paymentcard = () => {
    return (
        <>
            <div className='payCard' style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}>
                <p style={{ fontSize: "22px", padding: "10px" }}>Rs.1200</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                    <DateRangePicker style={{ width: "80%" }} />

                    <DateRangePicker style={{ width: "80%" }} />
                    <div style={{ backgroundColor: "white", height: "40px", width: "80%", borderRadius: "5px", display: "flex", padding: "10px ", justifyContent: "space-around" }}>
                        <span>Royal</span>
                        <span>Selected</span>
                    </div>
                    <Button variant="primary">Book Now</Button>
                    <p>*Cancellation and Guest Policies </p>
                </div>
            </div >
        </>
    )
}

export default Paymentcard
