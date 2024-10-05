

const RatingandReview = () => {
    return (
        <>
            <div className="p-4 bg-card text-card-foreground rounded-lg ">
                <h2 className="text-xl font-semibold mb-2">Ratings and reviews</h2>
                <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-primary">4.2</span>
                    <span className="text-muted-foreground ml-2">★ VERY GOOD</span>
                    <span className="text-muted-foreground ml-2">(1052 ratings)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div className="bg-primary h-2 rounded-full" ></div>
                </div>
                <div className="flex justify-between text-muted-foreground mb-2">
                    <span>5 ★</span>
                    <span>52%</span>
                </div>
                <div className="flex justify-between text-muted-foreground mb-2">
                    <span>4 ★</span>
                    <span>6%</span>
                </div>
                <div className="flex justify-between text-muted-foreground mb-2">
                    <span>3 ★</span>
                    <span>6%</span>
                </div>
                <div className="flex justify-between text-muted-foreground mb-2">
                    <span>2 ★</span>
                    <span>4%</span>
                </div>
                <div className="flex justify-between text-muted-foreground mb-2">
                    <span>1 ★</span>
                    <span>29%</span>
                </div>
                <div className="border-t border-muted my-4"></div>
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" className="w-6 h-6 mr-2" />
                        <span className="font-semibold">ARSHAD SHEIKH</span>
                        <span className="text-muted-foreground ml-2">16 May 2024</span>
                    </div>
                    <p>
                        I am highly glad to share my incredible experience at this hotel. The staff was exceptional, providing top-notch service with a warm smile. The hotel's location was perfect, offering convenience
                        and proximity to key attractions. The check-in process was swift and hassle-free. Overall, a five-star stay indeed!
                    </p>
                </div>
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" className="w-6 h-6 mr-2" />
                        <span className="font-semibold">Sunny Upadhyay</span>
                        <span className="text-muted-foreground ml-2">30 Apr 2024</span>
                    </div>
                    <p>
                        The check-in experience was subpar, but the hotel staff made up for it with their friendly and helpful nature. The food served at the hotel was delicious and had a variety of options to choose
                        from. Overall, a pleasant stay with room for improvement in certain areas.
                    </p>
                </div>
                <a href="#" className="text-primary hover:underline">
                    See all reviews
                </a>
            </div >
        </>

    )
}

export default RatingandReview
