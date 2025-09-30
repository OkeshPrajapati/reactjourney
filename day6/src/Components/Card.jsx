
import React from "react";
import { Thermometer } from "lucide-react";

const Card = ({ title, value, icon: Icon }) => {
  return (
    <div className="h-16 w-45 flex px-3 items-center gap-4 rounded-full bg-zinc-300">
      <div>
        <Icon size={30} />
      </div>
      <div>
        <p className="text-sm">{title}</p>
        <p className="text-md">{value}</p>
      </div>
    </div>
  );
};

export default Card;
