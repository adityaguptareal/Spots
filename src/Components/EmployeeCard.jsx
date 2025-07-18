import React from "react";

const statusColor = {
  "Available": "bg-green-500",
  "Meeting": "bg-yellow-400",
  "In Meeting": "bg-yellow-400",
  "On Break": "bg-red-400",
  "Working Remotely": "bg-blue-400",
};

const EmployeeCard = ({ employee }) => {
  return (
    <div className="absolute -top-40 left-2 group cursor-pointer">
      <div className="absolute z-10 top-12 left-1/2 -translate-x-1/2 w-64 bg-white text-gray-800 rounded-xl shadow-xl p-4 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="flex items-center gap-2 mb-2">
          <span role="img" aria-label="emoji">
            <img
              src={employee.profilePic}
              className="rounded-full w-15 h-15"
              alt=""
            />
          </span>
          <div>
            <h3 className="font-bold text-lg">{employee.name}</h3>
            <p className="text-sm text-gray-500">{employee.designation}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-orange-400"></span>
          <span>{employee.department}</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span
            className={`w-3 h-3 rounded-full  ${
              statusColor[employee.status] || "bg-gray-400"
            }`}
          ></span>
          <span>{employee.status}</span>
        </div>

        <hr className="my-2" />

        <div>
          <p className="text-sm text-gray-400">Current Project:</p>
          <p className="font-semibold text-gray-800">{employee.project}</p>
        </div>

        <p className="text-sm text-gray-500 mt-2">{employee.email}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
