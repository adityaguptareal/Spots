import * as React from "react";
import EmployeeCard from "./EmployeeCard";

const Seat = ({
  fill = "#8E4E04",
  employee = "",
  className = "",
  rotate = "",
  highlight = false,
}) => {
  const [showinfo, setShowInfo] = React.useState(false);
  const isOccupied = employee !== null;
  let fillColor = highlight ? "#60A5FA" : employee ? "#8E4E04"  : "#D3D3D3";;
  return (
    <div
      className={`relative ${className}  rounded-full"`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {showinfo && isOccupied && <EmployeeCard employee={employee} />}
      <svg
        fill={fillColor}
        viewBox="0 0 28 10"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-16 h-16 xs:w-25 xs:h-25 lg:w-30 lg:h-30  ${rotate}`}
      >
        <path d="M 11 4 L 11 16.4375 C 10.8984 16.4648 10.7773 16.5039 10.6875 16.5313 C 10.2031 16.6797 9.8672 16.8359 9.625 17 C 9.5039 17.082 9.3906 17.168 9.3125 17.25 C 9.2344 17.332 9.125 17.5 9.125 17.5 L 9 17.7188 L 9 20 L 10 20 L 10 20 L 12 20 L 12 20 L 20 20 L 20 20 L 22 20 L 22 20 L 23 20 L 23 17.7188 L 22.875 17.5 C 22.875 17.5 22.7656 17.332 22.6875 17.25 C 22.6094 17.168 22.4961 17.082 22.375 17 C 22.1328 16.8359 21.7969 16.6797 21.3125 16.5313 C 21.2227 16.5039 21.1016 16.4648 21 16.4375 L 21 4 L 19 4 L 19 5 L 13 5 L 13 4 Z M 13 7 L 15 7 L 15 16.0313 C 14.2422 16.0508 13.5625 16.0703 13 16.125 Z M 17 7 L 19 7 L 19 16.125 C 18.4375 16.0703 17.7578 16.0508 17 16.0313 Z" />
      </svg>
    </div>
  );
};

export default Seat;
