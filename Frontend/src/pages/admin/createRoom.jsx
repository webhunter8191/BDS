import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const CreateHotel = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleRoomsChange = (e) => setRooms(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handleParkingChange = (e) => setParking(e.target.value);

  const handleCreateHotel = () => {
    console.log({
      location,
      rooms,
      type,
      parking,
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <IoArrowBack
        className="absolute top-4 left-4 text-3xl cursor-pointer z-30"
        onClick={() => navigate("/")}
      />

      <div className="flex flex-1 flex-col md:flex-row items-center justify-center w-full relative z-10 overflow-hidden">
        <div className="w-full md:w-1/2 bg-white p-8 md:p-10 shadow-lg rounded-lg flex flex-col items-center absolute top-1/2 transform -translate-y-1/2 z-20">
          <h1 className="text-3xl font-bold mb-2 text-center">Create Hotel</h1>
          <p className="text-gray-500 mb-6 text-center">
            Add a new hotel to the Brij Divine Stay.
          </p>

          <div className="w-full flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Location</label>
              <select
                value={location}
                onChange={handleLocationChange}
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              >
                <option value="">Select Location</option>
                <option value="Vrindavan">Vrindavan</option>
                <option value="Mathura">Mathura</option>
                <option value="Gokul">Gokul</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Rooms Available</label>
              <input
                type="number"
                value={rooms}
                onChange={handleRoomsChange}
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                placeholder="Enter rooms"
              />
            </div>
          </div>

          <div className="w-full flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Type</label>
              <select
                value={type}
                onChange={handleTypeChange}
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              >
                <option value="">Select Type</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Parking</label>
              <select
                value={parking}
                onChange={handleParkingChange}
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              >
                <option value="">Select Parking</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCreateHotel}
            className="w-full bg-pink-500 text-white font-semibold rounded-lg p-3 mt-4"
          >
            Create Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;
