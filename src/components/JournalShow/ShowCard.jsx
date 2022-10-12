import "./ShowCard.css";
import { Context } from "../../context/Context";
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ShowCard = ({ showData }) => {
  //!  ------------------------useContext------------------------
  const { DB_URL } = useContext(Context);

  //!  ------------------------useNavigate------------------------
  const navigate = useNavigate();

  //!  ------------------------Delete Journal------------------------
  const handleDelete = async (e) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `${DB_URL}/journal/${showData._id}`,
        options
      );
      const deleteJournal = await response.json();
      navigate("/journal");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showData ? (
        <div className="card">
          <img src={showData.picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="showcard-title">
              <h5 className="card-title">
                <strong className="strong">Route Name: </strong> {showData.name}
              </h5>
              <h5>
                <strong className="strong">Likes: </strong> {showData.likes}
              </h5>
            </div>
            <p className="card-text">
              <strong className="strong">Difficulty: </strong>
              {showData.difficulty}
            </p>
            <p className="card-text">
              <strong className="strong">Location: </strong>
              {showData.location}
            </p>
            <p className="card-text">
              <strong className="strong">Description: </strong>
              {showData.description}
            </p>
            <p className="card-text">
              <strong className="strong">Tips: </strong>
              {showData.tips}
            </p>
            <p className="card-text">
              <strong className="strong">Date: </strong>
              {showData.date}
            </p>
            <div className="buttons">
              <Link
                key={showData._id}
                to={`/journal/${showData._id}/edit`}
                className="btn btn-primary"
              >
                Edit
              </Link>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ShowCard;
