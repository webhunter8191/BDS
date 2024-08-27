
import React, { useState } from "react";
const cardClasses = 'max-w-md mx-auto bg-card p-10 rounded-lg shadow-2xl'
const primaryHeaderClasses = 'bg-pink-500 text-white p-3 rounded-t-lg text-center'
const accentTextClasses = 'text-accent underline'
const mutedTextClasses = 'text-muted'
const flexClasses = 'flex justify-between'
const textSmClasses = 'text-sm'

const RoomPayCard = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    const handleCheckInDateChange = (e) => setCheckInDate(e.target.value);
    const handleCheckOutDateChange = (e) => setCheckOutDate(e.target.value);

    return (
        <div className={cardClasses}>
            {/* <div className={primaryHeaderClasses}>
                LOGIN NOW TO GET UPTO 15% LOWER PRICES
                <a href="#" className={accentTextClasses}>
                    LOGIN
                </a>
            </div> */}
            <div className="text-2xl font-bold mt-4">
                ₹1116 <span className={`${mutedTextClasses} line-through text-slate-300 text-xs`}>₹4701</span> <span className="text-accent text-xs text-red-300">76% off</span>
            </div>
            <div className={`${mutedTextClasses} mt-2`}>+ convenience fees: ₹50</div>
            <div className="mt-4">
                <div className="flex justify-between">
                    {/* <span>Mon, 26 Aug – Tue, 27 Aug</span>
                    <span>1 Room, 1 Guest</span> */}
                    <div className="w-full flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700">Check In</label>
                            <input
                                type="date"
                                value={checkInDate}
                                onChange={handleCheckInDateChange}
                                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700">Check Out</label>
                            <input
                                type="date"
                                value={checkOutDate}
                                onChange={handleCheckOutDateChange}
                                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-1">Selected Category - Classic</div>
            </div>

            {/* <div className="flex items-center mt-4">
                <span className="text-accent">WELCOME80 coupon applied</span>
                <span className="text-green-500 ml-2">-₹1975</span>
            </div>
            <a href="#" className={accentTextClasses + ' mt-1'}>
                More Offers
            </a> */}

            <div className="border-t border-border my-4"></div>

            {/* <div className={flexClasses}>
                <span>Your savings</span>
                <span>₹1975</span>
            </div> */}
            <div className={flexClasses + ' mt-1 font-bold'}>
                <span>Total price</span>
                <span>₹1316</span>
            </div>
            <div className={`${mutedTextClasses} ${textSmClasses} mt-1 `}>Including taxes & fees</div>

            <button className="bg-pink-500 text-white hover:bg-secondary/80 w-full p-3 rounded-lg mt-4">Continue to Book</button>

            {/* <div className={`${textSmClasses} ${mutedTextClasses} mt-4`}>⚡ 9 people booked this hotel in last 6 hours</div> */}
            <div className="text-red-500 text-sm mt-2">Cancellation Policy</div>
            <div className={`${mutedTextClasses} ${textSmClasses}`}>Follow safety measures advised at the hotel</div>
            <div className={`${mutedTextClasses} ${textSmClasses} mt-2`}>
                By proceeding, you agree to our{' '}
                <a href="#" className={accentTextClasses}>
                    Guest Policies
                </a>
                .
            </div>
        </div>
    )
}

export default RoomPayCard