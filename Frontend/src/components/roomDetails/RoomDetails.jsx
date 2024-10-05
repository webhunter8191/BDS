import React from 'react'
import Imgslider from './Imgslider/Imgslider'
import RatingandReview from './rating&reviews/RatingandReview'

const RoomDetails = () => {
    return (
        <>


            <div className="max-w-2xl p-4 rounded-lg   ">
                <h1 className="text-3xl font-bold mb-4">BDS Sri Harshitha Grand Near Zudio - Star Bazaar, Kundalhalli Gate</h1>
                <p className="text-sm text-muted-foreground">Gulmohar Enclave Road, Silver spring layout, Beside Zudio star bazaar, Opp Sankara Eye Hospital, Kundalahalli gate, Bangalore</p>
            </div >


            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <ul className="grid grid-cols-3 gap-4">
                    <li className="flex items-center">
                        <img undefinedhidden="true" alt="AC icon" src="https://openui.fly.dev/openui/24x24.svg?text=❄️" className="mr-2" />
                        AC
                    </li>
                    <li className="flex items-center">
                        <img undefinedhidden="true" alt="Free Wifi icon" src="https://openui.fly.dev/openui/24x24.svg?text=📶" className="mr-2" />
                        Free Wifi
                    </li>
                    <li className="flex items-center">
                        <img undefinedhidden="true" alt="Geyser icon" src="https://openui.fly.dev/openui/24x24.svg?text=🚿" className="mr-2" />
                        Geyser
                    </li>
                    <li className="flex items-center">
                        <img undefinedhidden="true" alt="Power backup icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔋" className="mr-2" />
                        Power backup
                    </li>
                    <li className="flex items-center">
                        <img undefinedhidden="true" alt="TV icon" src="https://openui.fly.dev/openui/24x24.svg?text=📺" className="mr-2" />
                        TV
                    </li>
                    <li className="flex items-center">
                        <img undefinedhidden="true" alt="Elevator icon" src="https://openui.fly.dev/openui/24x24.svg?text=🛗" className="mr-2" />
                        Elevator
                    </li>
                </ul>
            </div>


            <RatingandReview />
        </>
    )
}

export default RoomDetails
