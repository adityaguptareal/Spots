import { BotMessageSquare, MapPin } from "lucide-react";
import React from "react";
import Bullets from "./Bullets";

function header() {
  return (
    <header className="flex justify-center items-center flex-col bg-gray-900 text-white gap-4 py-5 ">
      <div className="flex justify-center gap-3 items-center">
      <BotMessageSquare size={40} /> <span className="text-4xl font-Inter font-medium">Spot</span> 
      <Bullets>Tripo Saints</Bullets>
      </div>
      <div className="flex gap-2 items-center font-Inter text-sm"><MapPin size={22} /> Knowledge Park III, Greater Noida</div>
    </header>
  );
}

export default header;
