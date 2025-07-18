import React from "react";
import Header from "../Components/header";
import WorkingStatus from "../Components/WorkingStatus";
import OfficeFloor from "../Components/OfficeFloor";
function Dashboard() {
  return (
    <div>
      <Header />
      <WorkingStatus />
      <OfficeFloor />
    </div>
  );
}

export default Dashboard;
