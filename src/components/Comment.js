import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SComment = styled.div`
  padding: 30px;
  margin-top: 30px;
  width: 90%;
  background-color: white;
  position: absolute;
  top: 475px;
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  h4 {
    margin-bottom: 10px;
    font-weight: 600;
  }

  form {
    position: relative;
  }
  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    background-color: #f7f7f7;
    border-radius: 40px;
    margin-bottom: 30px;
    padding: 10px;
    font-size: 14px;
  }

  button {
    all: unset;
    position: absolute;
    right: 10px;
    top: 5px;
  }
`;
const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  opacity: 0.3;
  margin-bottom: 20px;
`;
const View = styled.div`
  h4 {
    font-weight: 700;
    font-size: 14px;
    opacity: 0.7;
  }

  li {
    font-size: 14px;
    font-weight: 300;
  }
`;

const Comment = () => {
  const { name } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(name));
    if (storedComments) {
      setComments(storedComments);
    }
  }, [name]);

  console.log(name);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      const newComment = {
        text: comment,
      };
      const newComments = [...comments, newComment];
      setComments(newComments);
      localStorage.setItem(name, JSON.stringify(newComments));
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
      <h4>리뷰작성</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </form>

      <Break />
      <View>
        <h4>작성된 리뷰</h4>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c.text}</li>
          ))}
        </ul>
      </View>
    </SComment>
  );
};

export default Comment;
