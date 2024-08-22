import CardImg from "../../../assets/video.png"
import CardImg1 from "../../../assets/rooms.jpeg"
import '../../roomInfo/roomInfo.css'
import { useEffect } from "react"
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: CardImg1 },
    { url: CardImg1 },
    { url: CardImg1 },
    { url: CardImg1 },
    { url: CardImg1 },
    { url: CardImg1 },

];

const Imgslider = () => {


    return (

        <div className="slider">
            <SimpleImageSlider
                width={"95%"}
                height={"70vh"}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>

    )
}

export default Imgslider
