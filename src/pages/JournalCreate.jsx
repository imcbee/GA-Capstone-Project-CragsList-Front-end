import "./styles/JournalCreate.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../context/Context";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const JournalCreate = () => {
  //!  ------------------------useContext------------------------
  const { DB_URL } = useContext(Context);

  //!  ------------------------useNavigate------------------------
  const navigate = useNavigate();

  //!  ------------------------useState------------------------
  const initialState = {
    name: "",
    location: "",
    difficulty: "",
    tips: "",
    description: "",
    picture: "",
    likes: "",
    date: "",
    user: "default test",
  };

  const [newJournal, setNewJournal] = useState(initialState);

  //!  ------------------------createJournal------------------------
  const createJournal = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJournal),
      };

      const response = await fetch(`${DB_URL}/journal/new`, options);
      const data = await response.json();
      console.log(data);

      setNewJournal(initialState);
      navigate("/journal");
    } catch (error) {
      console.log(error);
    }
  };

  //!  ------------------------handleChange------------------------
  const handleChange = (e) => {
    setNewJournal({ ...newJournal, [e.target.name]: e.target.value });
    console.log(newJournal);
  };

  //todo  ------------------------JournalCreate------------------------
  return (
    <>
      <Navbar />
      <div className="create-form">
        <form onSubmit={createJournal}>
          {/* name */}
          <input
            type="text"
            value={newJournal.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          {/* location */}
          <input
            type="text"
            value={newJournal.location}
            name="location"
            placeholder="location"
            onChange={handleChange}
          />
          {/* difficulty */}
          <input
            type="text"
            value={newJournal.difficulty}
            name="difficulty"
            placeholder="difficulty"
            onChange={handleChange}
          />
          {/* tips */}
          <input
            type="text"
            value={newJournal.tips}
            name="tips"
            placeholder="tips"
            onChange={handleChange}
          />
          {/* description */}
          <input
            type="text"
            value={newJournal.description}
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
          {/* picture */}
          <input
            type="text"
            value={newJournal.picture}
            name="picture"
            placeholder="picture"
            onChange={handleChange}
          />
          <input type="submit" value="Create Journal" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JournalCreate;
