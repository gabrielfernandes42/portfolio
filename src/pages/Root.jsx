import { useState } from "react";
import About from "../components/About/About";
import EmailIcon from "../components/EmailIcon/EmailIcon";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import { Route, Routes } from "react-router-dom";
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

  const closeButon = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar handleToggle={handleToggle} />} />
      </Routes>

      <Sidebar
        isOpen={isOpen}
        handleToggle={handleToggle}
        closeButon={closeButon}
      />

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
