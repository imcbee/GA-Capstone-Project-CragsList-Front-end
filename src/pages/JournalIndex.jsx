import "./styles/JournalIndex.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/JournalIndex/Card";
import { Context } from "../context/Context";
import { useContext, useState, useEffect } from "react";

const JournalIndex = () => {
  //!  ------------------------useContext------------------------
  const { DB_URL } = useContext(Context);

  //!  ------------------------useState------------------------
  const [indexData, setIndexData] = useState(null);

  const getIndexData = async () => {
    const response = await fetch(`${DB_URL}/journal`);
    const data = await response.json();
    setIndexData(data);
  };

  //!  ------------------------useEffect------------------------
  useEffect(() => {
    getIndexData();
  }, []);
  //todo ------------------------JournalIndex-------------------------
  return (
    <div className="index-page">
      <Navbar />
      <Card indexData={indexData} />
      <Footer />
    </div>
  );
};

export default JournalIndex;
