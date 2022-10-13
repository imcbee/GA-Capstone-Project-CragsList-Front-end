import "./Hero.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Hero = ({ homeData }) => {
  return (
    <>
      <Header />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {homeData
            ? homeData.map((data, idx) => {
                return (
                  <Link to={`/journal/${data._id}`} key={data._id}>
                    <div className="carousel-item active">
                      <img
                        src={data.picture}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
