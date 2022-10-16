import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JournalCreate from "./pages/JournalCreate";
import JournalEdit from "./pages/JournalEdit";
import JournalIndex from "./pages/JournalIndex";
import JournalShow from "./pages/JournalShow";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import Route404 from "./pages/Route404";
import CommentCreate from "./pages/CommentCreate";
import CommentEditandDelete from "./pages/CommentEditandDelete";
import { Context } from "./context/Context";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { getUserToken, clearUserToken, setUserToken } from "./utils/authToken";

//! ------------------------Backend FETCH URL------------------------
const DB_URL = "https://ga-capstone-cragslist.herokuapp.com";

function App() {
  //! ----------------------useState for Auth------------------------
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenicated] = useState(false);

  //! ------------------------registerUser------------------------
  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newUser = await fetch(`${DB_URL}/user/register`, configs);
      const parsedUser = await newUser.json();
      console.log(parsedUser);

      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.currentUser);
      setIsAuthenicated(parsedUser.loggedIn);

      return parsedUser;
    } catch (error) {
      console.log(error);
      clearUserToken();
      setIsAuthenicated(false);
    }
  };

  //! ---------------------------loginUser--------------------------
  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(`${DB_URL}/user/login`, configs);
      const user = await response.json();

      setUserToken(user.token);
      setCurrentUser(user.user);
      setIsAuthenicated(user.isLoggedIn);

      return user;
    } catch (error) {
      console.log(error);
      clearUserToken();
      setIsAuthenicated(false);
    }
  };

  //! ---------------------------loginOut--------------------------
  const handleLogout = () => {
    clearUserToken();
    setCurrentUser(null);
    setIsAuthenicated(false);
  };

  //todo ---------------------------App--------------------------
  return (
    <div className="App">
      <Context.Provider
        value={{
          DB_URL,
          currentUser,
          isAuthenticated,
          registerUser,
          loginUser,
          getUserToken,
          clearUserToken,
          setUserToken,
          handleLogout,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/journal/new" element={<JournalCreate />}></Route>
          <Route path="/journal" element={<JournalIndex />}></Route>
          <Route path="/journal/:id" element={<JournalShow />}></Route>
          <Route path="/journal/:id/edit" element={<JournalEdit />}></Route>
          <Route
            path="/comments/:id/"
            element={<CommentEditandDelete />}
          ></Route>
          {/* <Route path="/comments/:id/" element={}></Route> */}
          <Route path="/user/login" element={<UserLogin />}></Route>
          <Route path="/user/register" element={<UserRegister />}></Route>
          {/* <Route path="/user/index" element={}></Route> */}
          <Route path="/*" element={<Route404 />}></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
