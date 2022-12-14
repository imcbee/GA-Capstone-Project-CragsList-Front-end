import "./Navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useState, useEffect, useContext } from "react";

const Navbar = () => {
  //!  ---------------------------useContext-------------------------------
  const { DB_URL, getUserToken, handleLogout, currentUser } =
    useContext(Context);

  //!  ---------------------------useState-------------------------------
  const [logOutUser, setLogOutUser] = useState();

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CragsList
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Links
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {currentUser ? (
                <div className="login-status">
                  <p>
                    Hello!{" "}
                    <span className="tag is-primary is-large">
                      {currentUser?.username}
                    </span>
                  </p>
                  <img
                    className="image is-48x48"
                    src={currentUser?.avatar}
                    alt=""
                  />
                </div>
              ) : (
                <></>
              )}
              {currentUser ? null : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/journal">
                  Journals
                </Link>
              </li>
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/journal/new">
                      Create Journal
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/login">
                      <button
                        onClick={handleLogout}
                        className="button is-danger"
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li>Please login for more!</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
