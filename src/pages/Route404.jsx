import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Route404 = () => {
  return (
    <>
      <Navbar />
      <div className="box">
        <h1>Not all of those wander are lost....</h1>
        <img
          src="https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2019/03/Climbing-Puns-3.jpg?fit=crop&w=658&h=391"
          alt="404"
        />
        <h1>
          But you are very lost. Return home or journal pages for more routes!
        </h1>
        <div className="button-routes">
          <Link to={"/"}>
            <button class="button is-info">Home</button>
          </Link>
          <Link to={"/journal"}>
            <button class="button is-success">Journals</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Route404;
