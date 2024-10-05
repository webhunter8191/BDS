

const Hero = () => {
  return (
    // <div className="bg-white pb-16 animate__animated animate__fadeIn flex justify-between relative">
    //   <div className="container mx-auto flex flex-col gap-2">
    //     <h1 className="text-5xl text-black font-bold tracking-wide animate__animated animate__fadeInDown">
    //       Find your next stay
    //     </h1>
    //     <p className="text-2xl text-black animate__animated animate__fadeInUp">
    //       Search low prices on hotels for your dream vacation...
    //     </p>
    //   </div>
    //   <div className="p-10 mr-10 w-9/12 ">
    //     <img src="..\..\src\assets\heroImg.png" alt=""/>
    
    //   </div>
    // </div>

    <div className="bg-white flex flex-col items-center  py-10">
    {/* Hero Section */}
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly space-y-6 lg:space-y-0 lg:space-x-8 mb-10">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold text-black leading-tight">
          Hotel for every moment rich in emotion
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Every moment feels like the first time in paradise view
        </p>
        <div className="mt-8 flex justify-center lg:justify-start space-x-4">
          <button className="bg-[#6A5631] text-white px-6 py-3 rounded-md text-lg hover:bg-opacity-90">
            Book Now
          </button>
          <button className="px-6 py-3 text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100 transition">
            Take a Tour
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="..\..\src\assets\heroImg.png"
          alt="Paradise View Resort"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
    
  </div>
  );
};

export default Hero;
