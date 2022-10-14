import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useState, useContext } from "react";

const UserLogin = () => {
  //!  ---------------------------useContext-------------------------------
  const { loginUser, currentUser } = useContext(Context);

  //!  ---------------------------useNavigate-------------------------------
  const navigate = useNavigate();

  //!  ---------------------------useState----------------------------------
  const initialState = {
    username: "",
    password: "",
  };
  const [loggingUser, setLoggingUser] = useState(initialState);

  //!  ---------------------------handleChange-------------------------------
  const handleChange = (e) => {
    setLoggingUser({ ...loggingUser, [e.target.name]: e.target.value });
  };
  //!  ---------------------------handleSubmit-------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(loggingUser);
      //   const data = response.json();
      //   setLoggingUser(data);
      navigate("/journal");
    } catch (error) {
      console.log(error);
    }
  };

  //todo  ---------------------------UserLogin-------------------------------
  return (
    <>
      <Navbar />
      <h1>UserLogin</h1>
      <div className="login-form">
        <h1>User Registration</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <span>Username: </span>
            <input
              type="text"
              required
              name="username"
              placeholder="Enter your username"
              onChange={(e) => handleChange(e)}
              value={loggingUser.username}
            />
          </label>
          <label>
            <span>Password: </span>
            <input
              type="text"
              required
              name="password"
              placeholder="Enter your password"
              onChange={(e) => handleChange(e)}
              value={loggingUser.password}
            />
          </label>
          <input type="submit" value="Login" className="button is-primary" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;
