import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import "./styles/Home.css";
import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

const Home = () => {
  //! ------------------------useContext-------------------------------
  const { DB_URL } = useContext(Context);

  //! --------------------------useState----------------------------
  const [homeData, setHomeData] = useState(null);

  //! -----------------------------getHomeData-----------------------------
  const getHomeData = async () => {
    const response = await fetch(`${DB_URL}`);
    const data = await response.json();
    setHomeData(data);
  };

  //! -----------------------------useEffect-----------------------------
  useEffect(() => {
    getHomeData();
  }, []);

  //todo -----------------------------Home------------------------------
  return (
    <div className="home-page">
      <Navbar />
      <Hero homeData={homeData} />
      <Footer />
    </div>
  );
};

export default Home;
