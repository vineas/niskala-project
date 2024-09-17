import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Portofolio from "@/components/Portofolio";
import React from "react";

const PortofolioPage = () => {
  return (
    <>
      <div className="mb-20">
        <NavBar />
      </div>
      <Portofolio />
      <Footer />
    </>
  );
};

export default PortofolioPage;
