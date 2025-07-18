import React, { useEffect, useState } from "react";
function StatusCard({ workStatus, className, stats, updateTotal }) {
  const statusData = [
    { id: 1, workStatus: "Available", className: "bg-green-500", stats: 12 },
    { id: 2, workStatus: "", className: "bg-yellow-500", stats: 5 },
    { id: 3, workStatus: "On Break", className: "bg-red-500", stats: 3 },
    {
      id: 4,
      workStatus: "Working ",
      className: "bg-blue-500",
      stats: 8,
    },
  ];

  const totalEmployeeCount = statusData.reduce(
    (sum, item) => (sum += item.stats),
    0
  );
  useEffect(() => {
    if(updateTotal){
        updateTotal(totalEmployeeCount)
    }
  }, [updateTotal]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 justify-items-center gap-y-5">
      {statusData.map((card) => (
        <div id="statusCard" className="text-center" key={card.id}>
          <div className="flex items-center gap-3">
            <div
              className={`h-[15px] w-[15px] rounded-full ${card.className}`}
            ></div>
            <div className="text-3xl font-bold">{card.stats}</div>
          </div>
          <div className="font-Inter text-gray-500 text-md">
            {card.workStatus}
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default StatusCard;
