import React from "react";

const CardInput = ({ elem }) => {
  return (
    <div className="bg-gray-600 shadow-md rounded-xl p-5 border border-gray-200">
      <div className="flex flex-col items-center">
        <img
          src={elem.url}
          alt="profile"
          className="w-20 h-20 object-cover rounded-full mb-4 shadow"
        />
        <h2 className="text-lg font-semibold text-white">{elem.name}</h2>
        <p className="text-sm text-white">{elem.email}</p>
        <p className="text-sm text-white">{elem.number}</p>
      </div>
    </div>
  );
};

export default CardInput;
