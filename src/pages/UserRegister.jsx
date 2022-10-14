import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { FloatingLabel } from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const UserRegister = () => {
  //!  ---------------------------useContext-------------------------------
  const { registerUser } = useContext(Context);

  //!  ---------------------------useNavigate-------------------------------
  const navigate = useNavigate();

  //!  ---------------------------useState---------------------------------
  const initialState = {
    username: "",
    email: "",
    password: "",
    avatar: "",
  };
  const [newUser, setNewUser] = useState(initialState);

  //!  ---------------------------handleSubmit-------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(newUser);
      console.log(response);

      if (response) {
        navigate("/journal");
      } else {
        navigate("/");
      }

      setNewUser(initialState);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      navigate("/user/login", { replace: true });
    }
  };

  //!  ---------------------------handleChange-------------------------------
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };

  //todo  ---------------------------UserRegister-------------------------------
  return (
    <div className="register-page">
      <Navbar />
      <div className="register-form">
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username: </span>
            <input
              type="text"
              required
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              value={newUser.username}
            />
          </label>
          <label>
            <span>Email: </span>
            <input
              type="text"
              required
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={newUser.email}
            />
          </label>
          <label>
            <span>Password: </span>
            <input
              type="text"
              required
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={newUser.password}
            />
          </label>
          <label>
            <span>Avatar: </span>
            <input
              type="text"
              required
              name="avatar"
              placeholder="Enter your avatar"
              onChange={handleChange}
              value={newUser.avatar}
            />
          </label>
          <input type="submit" value="Register" class="button is-primary" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserRegister;
