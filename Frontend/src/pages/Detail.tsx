import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
      style={{ zIndex: 1 }}
    >
      <FaArrowRight />
    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-200 shadow-lg"
      style={{ zIndex: 1 }}
    >
      <FaArrowLeft />
    </button>
  );
};

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    ["fetchHotelById", hotelId],
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  // Slider settings with custom arrows
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="space-y-12 p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar
              key={index}
              className="fill-yellow-400 text-xl transition transform hover:scale-125"
            />
          ))}
          <span className="text-gray-500 text-sm">{hotel.type}</span>
        </div>
        <h1 className="text-4xl font-bold text-blue-800 animate-fadeIn">
          {hotel.name}
        </h1>
      </div>

      {/* Image Slider */}
      <div className="relative lg:w-2/3 mx-auto shadow-xl rounded-lg overflow-hidden">
        <Slider {...sliderSettings}>
          {hotel.imageUrls.map((image, index) => (
            <div key={index} className="h-[400px]">
              <img
                src={image}
                alt={hotel.name}
                className="rounded-md w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Facilities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotel.facilities.map((facility, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded-md p-3 text-center bg-white shadow-md hover:bg-blue-50 transition duration-200 transform hover:scale-105"
          >
            {facility}
          </div>
        ))}
      </div>

      {/* Description and Guest Info Form */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
        <div className="whitespace-pre-line text-gray-700 leading-relaxed animate-fadeIn">
          {hotel.description}
        </div>
        <div className="p-6 border border-slate-200 rounded-md shadow-lg bg-white transform hover:shadow-xl transition-shadow duration-200">
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
