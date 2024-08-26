

const cardClasses = 'max-w-md mx-auto bg-card p-6 rounded-lg shadow-lg'
const primaryHeaderClasses = 'bg-red-700 text-white p-3 rounded-t-lg text-center'
const accentTextClasses = 'text-accent underline'
const mutedTextClasses = 'text-muted'
const flexClasses = 'flex justify-between'
const textSmClasses = 'text-sm'

const RoomPayCard = () => {
    return (
        <div className={cardClasses}>
            <div className={primaryHeaderClasses}>
                LOGIN NOW TO GET UPTO 15% LOWER PRICES
                <a href="#" className={accentTextClasses}>
                    LOGIN
                </a>
            </div>
            <div className="text-2xl font-bold mt-4">
                ₹1116 <span className={`${mutedTextClasses} line-through`}>₹4701</span> <span className="text-accent">76% off</span>
            </div>
            <div className={`${mutedTextClasses} mt-2`}>+ taxes & fees: ₹200</div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <span>Mon, 26 Aug – Tue, 27 Aug</span>
                    <span>1 Room, 1 Guest</span>
                </div>
                <div className="mt-1">Classic</div>
            </div>

            <div className="flex items-center mt-4">
                <span className="text-accent">WELCOME80 coupon applied</span>
                <span className="text-green-500 ml-2">-₹1975</span>
            </div>
            <a href="#" className={accentTextClasses + ' mt-1'}>
                More Offers
            </a>

            <div className="border-t border-border my-4"></div>

            <div className={flexClasses}>
                <span>Your savings</span>
                <span>₹1975</span>
            </div>
            <div className={flexClasses + ' mt-1'}>
                <span>Total price</span>
                <span>₹1316</span>
            </div>
            <div className={`${mutedTextClasses} ${textSmClasses} mt-1`}>Including taxes & fees</div>

            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full p-3 rounded-lg mt-4">Continue to Book</button>

            <div className={`${textSmClasses} ${mutedTextClasses} mt-4`}>⚡ 9 people booked this hotel in last 6 hours</div>
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