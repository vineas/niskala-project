import About from "@/components/About";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="mb-20">
        <NavBar />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
