const Hero = () => {
  return (
    <div className="bg-white pb-16 animate__animated animate__fadeIn flex justify-between ">
      <div className="container mx-auto flex flex-col gap-2">
        <h1 className="text-5xl text-black font-bold tracking-wide animate__animated animate__fadeInDown">
          Find your next stay
        </h1>
        <p className="text-2xl text-black animate__animated animate__fadeInUp">
          Search low prices on hotels for your dream vacation...
        </p>
      </div>
      <div className="p-10 mr-10 w-9/12">
        <img src="..\..\src\assets\heroImg.png" alt=""/>
      </div>
      
    </div>
  );
};

export default Hero;
