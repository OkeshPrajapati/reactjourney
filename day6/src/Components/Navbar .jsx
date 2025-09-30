import React from "react";

const Navbar = ({ setSearch }) => {
  return (
    <div className="h-15 w-full bg-zinc-600  flex justify-between items-center px-10 text-white">
      <h1 className="text-2xl font-bold">Mousam</h1>
      <div>
        <input
          className="px-4 py-2 border rounded-md"
          type="text"
          placeholder="Enter city..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <p>Logos for dark and light theme</p>
      </div>
    </div>
  );
};

export default Navbar;