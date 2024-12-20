import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SComment = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;
  h4 {
    margin-bottom: 10px;
  }
  input {
    all: unset;
    width: 100%;
    height: 30px;
    background-color: #f7f7f7;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  button {
    all: unset;
  }
`;
const View = styled.div`
  h4 {
    font-weight: 700;
    font-size: 14px;
    opacity: 0.7;
  }
`;

const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      const newComment = {
        text: comment,
      };
      const newComments = [...comments, newComment];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setComment("");
    }
  };

  const deleteHandler = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
  };

  return (
    <SComment>
      <h4>리뷰</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </form>
      <button type="submit">입력</button>
      <View>
        <h4>댓글</h4>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>
              {c.text}
              <button
                onClick={() => deleteHandler(index)}
                style={{
                  marginLeft: "10px",
                  color: "#d9d9d9",
                }}
              >
                <FaRegTrashCan />
              </button>
            </li>
          ))}
        </ul>
      </View>
    </SComment>
  );
};

export default Comment;
