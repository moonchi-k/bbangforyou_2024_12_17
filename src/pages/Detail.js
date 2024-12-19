import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { All } from "../components/All";
import { useState } from "react";
const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 50px;
  background-color: white;
`;
const Logo = styled.div`
  width: 95px;
  height: 31px;

  background-image: url(${process.env.PUBLIC_URL}/img/logo.png);
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const Con = styled.div``;
const Ban = styled.div`
  .ban {
    background: url(${(props) => props.bg}) no-repeat center / cover;
    width: 100%;
    height: 300px;
  }
  .title {
    padding-left: 30px;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 22px;
    margin-top: 25px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  h5 {
    opacity: 0.8;
  }
`;
const Info = styled.div`
  padding-left: 30px;
  margin-top: 30px;

  h4 {
    opacity: 0.8;
    margin-bottom: 10px;
  }

  h4:nth-child(4) {
    margin-bottom: 30px;
  }
`;
const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  opacity: 0.3;
`;
const Comment = styled.div`
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

const Detail = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };
  return (
    <Wrap>
      <Logo />
      <Con>
        <Ban>
          <div className="ban" bg={All.url}></div>
          <div className="title">
            <h3>앙시앙</h3>
            <h5>페스츄리 크레페가 맛있는 곳</h5>
          </div>
        </Ban>
        <Break></Break>

        <Info>
          <h4>부산 수영구 광남로 77 1층</h4>
          <h4>11:30 ~ 20:00</h4>
          <h4> 화요일 정기휴무 </h4>
          <h4> 피스타치오 페스츄리 크레페, 굴뚝빵</h4>
        </Info>

        <Break></Break>
      </Con>
      <Comment>
        <h4>댓글남기기 (질문, 후기 등 자유롭게 남겨주세요!)</h4>
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
              <li key={index}>{c}</li>
            ))}
          </ul>
        </View>
      </Comment>
    </Wrap>
  );
};

export default Detail;
