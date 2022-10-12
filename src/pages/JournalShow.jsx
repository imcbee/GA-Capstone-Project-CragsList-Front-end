import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../context/Context";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ShowCard from "../components/JournalShow/ShowCard";

const JournalShow = () => {
  //!  ------------------------useContext------------------------
  const { DB_URL } = useContext(Context);

  //!  ------------------------useState-------------------------
  const [showData, setShowData] = useState(null);

  const getShowData = async () => {
    const response = await fetch(`${DB_URL}/journal/${id}`);
    const data = await response.json();
    setShowData(data);
  };

  //!  ------------------------useParams------------------------
  const { id } = useParams();
  console.log(id)

 //!  ------------------------useEffect-------------------------
  useEffect(() => {
    getShowData();
  }, []);

  return (
    <div className="show-page">
      <Navbar />
      <ShowCard showData={showData} />
      <Footer />
    </div>
  );
};

export default JournalShow;
