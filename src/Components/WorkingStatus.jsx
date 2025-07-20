import { BriefcaseBusiness, Users } from "lucide-react";
import React, { useState } from "react";
import StatusCard from "./StatusCard";
import EmployeeCard from "./EmployeeCard";

function WorkingStatus() {


  const [totalEmployeeCount, settotalEmployeeCount] = useState(0);
  return (
    <section className="w-10/12 md:w-3/4 mx-auto my-10 p-10 bg-white h-fit rounded-lg shadow-md ">
      <div className="font-Inter font-medium md:text-xl text-[18px]">
        {" "}
        🏢 Office Status
      </div>
      <div className="py-10 text-center w-full border-b-2 border-gray-300 ">
        <StatusCard updateTotal={settotalEmployeeCount} />
      </div>
      <div className="font-Inter flex justify-center gap-2 items-center text-center pt-5 text-gray-400">
        Total Employee is : <Users size={18} /> {totalEmployeeCount}
      </div>
    </section>
  );
}

export default WorkingStatus;
