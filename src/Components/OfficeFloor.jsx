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
      <section className="w-10/12 md:w-3/4 mx-auto my-10 px-5 md:px-10 py-20 md:py-40 lg:py-20 h-fit bg-white  rounded-lg shadow-md ">
        <div className="w-full flex flex-col md:items-start lg:flex-row gap-1 lg:gap-3 justify-start lg:items-center">
          <h1 className="font-Inter border-b-gray-300 py-2 text-[18px] md:text-2xl font-medium">
            🪑 Employee Seating Plan
          </h1>

          <span className=" text-sm md:text-md  text-gray-500 hover:text-gray-600 transition-colors duration-100 cursor-pointer">
            (Hover over chairs to see employee details)
          </span>
        </div>
        <div className="flex gap-3 mt-5">
          <input
            type="text"
            placeholder="Search by employee name..."
            className="border px-4 py-2 outline-none shadow-md w-full md:w-1/2 lg:w-1/3 rounded-full "
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setHighlightedName(e.target.value.toLowerCase());
            }}
          ></input>

      
        </div>

        <div className="w-full h-full flex flex-wrap gap-y-5 md:gap-y-20">
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
