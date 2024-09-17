import About from "@/components/About";
import Footer from "@/components/Footer";
import MainPage from "@/components/HomePage/BackgroundImage";
import Portofolio from "@/components/Portofolio";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <>
      <MainPage/>
      <About/>
      <Services/>
      <Portofolio/>
      <Footer/>
    </>
  )
}

export default HomePage