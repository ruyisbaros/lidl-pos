import React from "react";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/navbar/Menu";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer w-[250px] py-[5px] px-[20px]">
          <Menu />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
