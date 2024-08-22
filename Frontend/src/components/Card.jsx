import React from "react";

function Card({ title, description }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
