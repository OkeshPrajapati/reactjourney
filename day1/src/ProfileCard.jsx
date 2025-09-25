import React from "react";

function ProfileCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-60 text-center hover:scale-105 transform transition duration-200">
      <img
        src={image}
        alt={name}
        className="rounded-full w-24 h-24 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}

export default ProfileCard;
