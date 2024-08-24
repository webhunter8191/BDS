import React, { useState } from "react";

const Home = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleCheckInDateChange = (e) => setCheckInDate(e.target.value);
  const handleCheckOutDateChange = (e) => setCheckOutDate(e.target.value);
  const handleAdultsChange = (e) => setAdults(e.target.value);
  const handleChildrenChange = (e) => setChildren(e.target.value);

  const handleSearch = () => {
    console.log({
      location,
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <header className="w-full p-4 flex justify-between items-center bg-white shadow-md z-10 h-[90px]">
        <div className="text-2xl font-bold text-pink-600">Brij Divine Stay ❤️</div>
        <div>
          <a href="#" className="text-gray-700 mr-4">
            Sign up.
          </a>
          <a href="#" className="text-gray-700">
            Log in
          </a>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center w-full relative z-10 overflow-hidden">
        {/* Form Container */}
        <div className="w-full md:w-1/3 bg-white p-8 md:p-10 shadow-lg rounded-lg flex flex-col items-center absolute top-1/2 transform -translate-y-1/2 -translate-x-1/4 z-20">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Find hotels and homes in India
          </h1>
          <p className="text-gray-500 mb-6 text-center">
            From hotels to entire homes to individual rooms – your next getaway
            is on Airbnb.
          </p>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Location</label>
            <select
              value={location}
              onChange={handleLocationChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-2"
            >
              <option value="">Anywhere</option>
              <option value="Vrindavan">Vrindavan</option>
              <option value="Mathura">Mathura</option>
              <option value="Gokul">Gokul</option>
            </select>
          </div>

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

          <div className="w-full flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Adults</label>
              <input
                type="number"
                value={adults}
                onChange={handleAdultsChange}
                min="1"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Children</label>
              <input
                type="number"
                value={children}
                onChange={handleChildrenChange}
                min="0"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-pink-500 text-white font-semibold rounded-lg p-3 mt-4"
          >
            Search
          </button>
        </div>

        {/* Right-side Background Image */}
        <div
          className="hidden md:block bg-cover bg-center relative z-0 rounded-md"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            width: "800px",
            height: "600px",
            right: "0",
            bottom: "0",
            transform: "translate(50%, 0%)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
