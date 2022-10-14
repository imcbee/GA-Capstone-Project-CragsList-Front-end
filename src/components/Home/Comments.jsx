import "./Comments.css";
import { Context } from "../../context/Context";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Comments = ({ showData, getShowData }) => {
  console.log(showData);
  //! ------------------------useContext-------------------------------
  const { DB_URL } = useContext(Context);

  //! --------------------------useState----------------------------
  const [commentData, setCommentData] = useState(null);

  //! -----------------------------getHomeData-----------------------------
  const getCommentData = async () => {
    const response = await fetch(`${DB_URL}/comments/`); //! need to figure out to get specific comment
    const data = await response.json();
    // console.log(data);
    setCommentData(data);
  };

  //! -----------------------------useEffect-----------------------------
  useEffect(() => {
    getCommentData();
  }, []);

  //? -----------------------------useState-----------------------------
  const [newComment, setNewComment] = useState({
    comments: "",
    journal: showData._id,
  });

  //? -----------------------------CreateComment(handleSubmit)--------------
  const CreateComment = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      };

      const response = await fetch(`${DB_URL}/comments/new`, options);
      const data = response.json();

      setNewComment(data);
      await getShowData();
    } catch (error) {
      console.log(error);
    }
  };

  //? -----------------------------handleChange-----------------------------
  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
    // console.log(newComment);
  };

  //todo -----------------------------Comments-----------------------------
  return (
    <>
      <div className="comment-form">
        <form onSubmit={CreateComment}>
          {/* comment */}
          <label htmlFor="">Comment:</label>
          <input
            type="text"
            name="comments"
            value={newComment?.comments}
            onChange={handleChange}
          />
          <input type="submit" value="Create Comment" />
        </form>
      </div>

      {showData
        ? showData.comments.map((data, idx) => {
            return (
              <div className="container-fluid">
                <Link to="#">
                  <div className="card">
                    <div className="card-content">
                      <div className="content" id="comment">
                        <strong className="strong">
                          Comments: {data.comments}
                        </strong>
                      </div>
                      <div className="content" id="likes">
                        <p className="card-color">
                          <strong className="strong">{data.likes}</strong>
                        </p>
                        <p>Date: {data.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Comments;
