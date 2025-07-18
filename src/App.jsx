import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/header";
import WorkingStatus from "./Components/WorkingStatus";
import OfficeFloor from "./Components/OfficeFloor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
