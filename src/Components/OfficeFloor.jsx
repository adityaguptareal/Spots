import React, { useState } from "react";
import Table from "./Table";
import { useEffect } from "react";
import EmployeeList from "../data/Employee.json";

function OfficeFloor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedName, setHighlightedName] = useState(null);
  const [EmployeeData, setEmployeeData] = useState();
  useEffect(() => {
    setEmployeeData(EmployeeList);
  }, []);
  return (
    <div>
      <section className="w-3/4 mx-auto my-10 px-10 py-20 h-fit bg-white  rounded-lg shadow-md ">
        <div className="w-full flex flex-col lg:flex-row gap-1 lg:gap-3 justify-start items-center">
          <h1 className="font-Inter border-b-gray-300 py-2 text-[18px] md:text-2xl font-medium">
            🪑 Employee Seating Plan
          </h1>

          <span className=" text-sm md:text-md  text-gray-500 hover:text-gray-600 transition-colors duration-100 cursor-pointer">
            (Hover over chairs to see employee details)
          </span>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by employee name..."
            className="border px-4 outline-none shadow-md w-1/3 rounded-full "
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setHighlightedName(e.target.value.toLowerCase());
            }}
          ></input>
          <button
            onClick={() => setHighlightedName(searchTerm.trim().toLowerCase())}
            className="bg-orange-500 hover:bg-orange-300 cursor-pointer text-white px-5 py-2 rounded-full"
          >
            Search
          </button>
        </div>
        <div className="w-full h-full flex flex-wrap gap-y-20">
          <Table
            tableName="Engineering"
            employee={EmployeeData}
            highlightName={highlightedName}
          />
          <Table
            tableName="Design"
            employee={EmployeeData}
            highlightName={highlightedName}
          />
          <Table
            tableName="QA"
            employee={EmployeeData}
            highlightName={highlightedName}
          />
          <Table
            tableName="Product Team"
            employee={EmployeeData}
            highlightName={highlightedName}
          />
        </div>
      </section>
    </div>
  );
}

export default OfficeFloor;
