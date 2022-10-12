import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import "./styles/Home.css";
import { useState, useEffect } from "react";
import { Context } from "../context/Context";
import { useContext } from "react";

const Home = () => {
  // useEffect: only 2 uses; run it when component initializes or use to run whatever functions in the use effect any tme when state changes
  //!  ------------------------useContext------------------------
  const { DB_URL } = useContext(Context);

  //!  ------------------------useState for carosuel data------------------------
  const [homeData, setHomeData] = useState(null);

  const options = {
    method: "",
    headers: {},
  };

  //todo ------------------------getHomeData Function------------------------
  const getHomeData = async () => {
    const response = await fetch(`${DB_URL}`);
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  //   console.log(homeData[0].picture);
  return (
    <div className="home-page">
      <Navbar />
      <Hero homeData={homeData} />
      <Footer />
    </div>
  );
};

export default Home;
