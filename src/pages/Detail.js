import styled from "styled-components";
import { All } from "../components/All";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
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

const Detail = () => {
  const { name } = useParams();
  console.log(name);

  const bakery = All.find((b) => b.name === name);

  return (
    <>
      {bakery ? (
        <>
          <Wrap>
            <Logo />
            <Con>
              <Ban>
                <div className="ban" bg={bakery.url}></div>
                <div className="title">
                  <h3>{bakery.name}</h3>
                  <h5>{bakery.ban}</h5>
                </div>
              </Ban>
              <Break></Break>

              <Info>
                <h4>{bakery.add}</h4>
                <h4>{bakery.time}</h4>
                <h4> {bakery.break} </h4>
                <h4> {bakery.rec}</h4>
              </Info>

              <Break></Break>
            </Con>
            <Comment></Comment>
          </Wrap>
        </>
      ) : (
        <div>찾으시는 정보가 없습니다</div>
      )}
    </>
  );
};

export default Detail;
