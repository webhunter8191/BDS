import React from "react";
import roomsData from "../roomsData.json"; 

const Rooms = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Explore Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white p-1 rounded-full shadow-md">
                  <img
                    src={room.hostImage}
                    alt="Host"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-md">
                  {room.rating} ★
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{room.location}</h2>
                <p className="text-gray-600">{room.title}</p>
                <p className="text-gray-500">{room.dates}</p>
                <div className="text-lg font-semibold mt-2">{room.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
