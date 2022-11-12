// import "./App.css";
import { useState } from "react";
import About from "../components/About/About";
import EmailIcon from "../components/EmailIcon/EmailIcon";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectsSection/ProjectSection";
import Sidebar from "../components/Sidebar";
import SocialMedia from "../components/SocialMedia/SocialMedia";

function Root() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Navbar handleToggle={handleToggle} />
      <HeroSection />
      <About />
      <ProjectSection />
      <Footer />
      <SocialMedia />
      <EmailIcon />
    </>
  );
}

export default Root;
