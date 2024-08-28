import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../../assets/pic1.jpg"

const images = [
    { url: img1 },
    { url: img1 },
    { url: img1 },
    { url: img1 },
    { url: img1 },
    { url: img1 },
    { url: img1 },
];
const Imgslider = () => {
    return (
        <>
            <div>
                <SimpleImageSlider
                    width={"100%"}
                    height={"75vh"}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
        </>
    )
}

export default Imgslider
