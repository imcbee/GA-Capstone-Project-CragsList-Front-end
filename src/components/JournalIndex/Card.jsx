import "./Card.css";
import { Link } from "react-router-dom";

//todo -----------------------------IndexCard-----------------------------
const Card = ({ indexData }) => {
  return (
    <div className="window">
      {indexData
        ? indexData.map((data, idx) => {
            return (
              <div className="card">
                <img src={data.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="index-title">
                    <h5 className="card-title">{data.name}</h5>
                    <h5>
                      <strong className="strong">Likes:</strong> {data.likes}
                    </h5>
                  </div>
                  <p className="card-text">
                    <strong className="strong">Location:</strong>{" "}
                    {data.location}
                  </p>
                  <p className="card-text">
                    <strong className="strong">Difficulty:</strong>{" "}
                    {data.difficulty}
                  </p>
                  <p className="card-text">
                    <strong className="strong">Description:</strong>{" "}
                    {data.description}
                  </p>
                  <p className="card-text">
                    <strong className="strong">Tips:</strong> {data.tips}
                  </p>
                  <Link
                    to={`/journal/${data._id}`}
                    key={data._id}
                    className="btn btn-primary"
                  >
                    See page
                  </Link>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Card;
