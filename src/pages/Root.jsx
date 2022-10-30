// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Root() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/#" element={<Sidebar/>}/>
        <Route path="/" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
