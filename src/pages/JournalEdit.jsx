import "./styles/JournalEdit.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../context/Context";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JournalEdit = () => {
  //!  ------------------------useContext------------------------
  const { DB_URL } = useContext(Context);
  //!  ------------------------useParams---------------------------
  const { id } = useParams();

  //!  ------------------------useState---------------------------
  const [showData, setShowData] = useState(null);

  const getShowData = async () => {
    try {
      const response = await fetch(`${DB_URL}/journal${id}`);
      const data = response.json();
      setShowData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //!  ------------------------useEffect---------------------------
  useEffect(() => {
    getShowData();
    //eslint - disable - next - line;
  }, []);

  //!  ------------------------handleChange---------------------------
  const handleChange = async (e) => {
    setShowData({ ...showData, [e.target.name]: e.target.value });
    console.log(showData);
  };

  //!  ------------------------handleSubmit------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(showData),
      };

      await fetch(`${DB_URL}/journal/${showData._id}/edit`, options);
    } catch (error) {
      console.log(error);
    }
  };

  //!  ------------------------Edit Form------------------------
  const edit = () => {
    return (
      <div className="edit-form">
        <h1>Edit Journal</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            value={showData.name}
            onChange={handleChange}
          />
          {/* Difficulty */}
          <label for="difficulty">Difficulty:</label>
          <input
            type="text"
            name="difficulty"
            value={showData.difficulty}
            onChange={handleChange}
          />
          {/* Location */}
          <label for="location">Location:</label>
          <input
            type="text"
            name="location"
            value={showData.location}
            onChange={handleChange}
          />
          {/* Description */}
          <label for="description">Description:</label>
          <input
            type="text"
            name="description"
            value={showData.description}
            onChange={handleChange}
          />
          {/* Tips */}
          <label for="tips">Tips:</label>
          <input
            type="text"
            name="tips"
            value={showData.tips}
            onChange={handleChange}
          />
          {/* Picture */}
          <label for="picture">Picture:</label>
          <input
            type="text"
            name="picture"
            value={showData.picture}
            onChange={handleChange}
          />
          {/* Edit Button */}
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  };
  //todo  ------------------------Edit Page------------------------
  return (
    <>
      <Navbar />
      {showData ? edit() : <h1>loading....</h1>}
      <Footer />
    </>
  );
};

export default JournalEdit;
