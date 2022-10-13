import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useState, useContext } from "react";

const UserLogin = () => {
  //!  ---------------------------useContext-------------------------------
  const { loginUser } = useContext(Context);

  //!  ---------------------------useNavigate-------------------------------
  const navigate = useNavigate();

  //!  ---------------------------useState----------------------------------
  const [loggingUser, setLoggingUser] = useState({
    username: "",
    password: "",
  });
  //!  ---------------------------handleChange-------------------------------
  const handleChange = (e) => {
    setLoggingUser({ ...loggingUser, [e.target.name]: e.target.value });
  };
  //!  ---------------------------handleSubmit-------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };
  //todo  ---------------------------UserLogin-------------------------------
  return (
    <>
      <h1>UserLogin</h1>
    </>
  );
};

export default UserLogin;
