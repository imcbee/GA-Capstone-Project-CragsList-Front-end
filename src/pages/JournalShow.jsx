import "./styles/JournalShow.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comments from "../components/Home/Comments";
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
    console.log(data);
    setShowData(data);
  };

  //!  ------------------------useParams------------------------
  const { id } = useParams();
  console.log(id);

  //!  ------------------------useEffect-------------------------
  useEffect(() => {
    getShowData();
  }, []);

  //todo ------------------------JournalShow-------------------------
  return (
    <div className="show-page">
      <Navbar />
      {showData ? (
        <>
          <ShowCard showData={showData} />
          <Comments showData={showData} getShowData={getShowData} />
        </>
      ) : (
        <h1>loading...</h1>
      )}
      <Footer />
    </div>
  );
};

export default JournalShow;
