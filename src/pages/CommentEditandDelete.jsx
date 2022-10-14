import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useState, useEffect, useContext } from "react";

const CommentEditandDelete = () => {
  //! -----------------------------useContext-----------------------------
  const { DB_URL } = useContext(Context);

  //! -----------------------------useNavigate-----------------------------
  const navigate = useNavigate();

  //! -----------------------------useParams-----------------------------
  const { id } = useParams();

  //! -----------------------------handleDelete-----------------------------
  const handleDelete = async (e) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`${DB_URL}/comments/${id}`, options);
      console.log(response);
      const deleteComment = await response.json();
      navigate("/journal");
    } catch (error) {
      console.log(error);
    }
  };

  //? -----------------------------useState-----------------------------
  const [updateComment, setUpdateComment] = useState();

  const getComment = async () => {
    try {
      const response = await fetch(`${DB_URL}/comments/${id}`);
      const data = await response.json();
      console.log(data);
      setUpdateComment(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? -----------------------------useEffect-----------------------------
  useEffect(() => {
    getComment();
  }, []);

  //?  ------------------------handleChange---------------------------
  const handleChange = async (e) => {
    setUpdateComment({ ...updateComment, [e.target.name]: e.target.value });
    console.log(updateComment);
  };

  //?  ------------------------handleSubmit------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateComment),
      };

      const response = await fetch(`${DB_URL}/comments/${id}`, options);
      const data = await response.json();

      setUpdateComment(data);
      console.log(navigate);
      navigate(`/journal`);
    } catch (error) {
      console.log(error);
    }
  };

  //todo -----------------------------CommentEditandDelete-----------------------------
  return (
    <div className="edit-delete">
      <Navbar />
      <div className="edit-form">
        {/* Edit */}
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Comment */}
          <label htmlFor="">Comment</label>
          <input
            type="text"
            name="comments"
            value={updateComment?.comments}
            onChange={(e) => handleChange(e)}
          />
          {/* Submit */}
          <input type="Submit" value="Update Comment" />
        </form>
      </div>
      <div className="delete-button">
        <button onClick={(e) => handleDelete(e)} className="btn btn-danger">
          Delete
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CommentEditandDelete;
