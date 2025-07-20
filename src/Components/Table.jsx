import React, { useEffect, useState } from "react";
import Seat from "./Seat";

function Table({ tableName = "Table 1", employee, highlightName }) {
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    if (employee) {
      setOriginalData(employee);
    }
  }, [employee]);

  if (!originalData || originalData.length === 0) return null;

  const filteredData = originalData.filter(
    (empl) => empl.department === tableName
  );

  const authorizedSeats = [...filteredData];
  while (authorizedSeats.length < 4) {
    authorizedSeats.push(null); 
  }
const isHighlighted = (emp) => {
  if (!highlightName || !emp || !emp.name) return false;
  return emp.name.toLowerCase().includes(highlightName.toLowerCase());
};


  return (
    <div className="w-full md:w-1/2 md:h-[200px] lg:h-[450px] p-2 sm:p-4 cursor-pointer">
      <div className="flex gap-5 justify-around md:justify-center lg:justify-around">
        <Seat
          employee={authorizedSeats[0]}
          highlight={isHighlighted(authorizedSeats[0])}
        />
        <Seat
          employee={authorizedSeats[1]}
          highlight={isHighlighted(authorizedSeats[1])}
        />
      </div>

      <div className="w-full md:w-full h-[150px] md:h-[80%] lg:h-[70%] bg-Table rounded-lg shadow-md flex justify-center items-center">
        <span className="text-xl md:text-2xl lg:text-3xl font-Inter font-medium text-Chair">
          {tableName}
        </span>
      </div>

      <div className="flex gap-5 justify-around md:justify-center lg:justify-around">
        <Seat
          rotate="transform scale-y-[-1]"
          employee={authorizedSeats[2]}
          highlight={isHighlighted(authorizedSeats[2])}
        />
        <Seat
          rotate="transform scale-y-[-1]"
          employee={authorizedSeats[3]}
          highlight={isHighlighted(authorizedSeats[3])}
        />
      </div>
    </div>
  );
}

export default Table;
