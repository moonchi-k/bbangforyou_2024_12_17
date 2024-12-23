import styled from "styled-components";
import { All } from "../components/All";
import Comment from "../components/Comment";
import { Link, useParams } from "react-router-dom";
import { IoHome, IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaRegCalendarTimes } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { GiPositionMarker } from "react-icons/gi";
const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  background-color: #f7f0f2;
  overflow: scroll;
  /* padding: 0 20px; */
  position: relative;
`;

const Con = styled.div``;
const Ban = styled.div`
  .box {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.4;
  }
`;

const Img = styled.div`
  background: url(${(props) => props.seletedimg}) no-repeat center / cover;
  width: 100%;
  height: 300px;
`;

const Home = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 40px;
  height: 40px;
  background-color: rgba(247, 240, 242, 0.9);

  text-align: center;
  padding-top: 7px;
  border-radius: 30px;
`;
const Info = styled.div`
  width: 95%;
  border-radius: 15px;
  background-color: white;
  padding-left: 20px;
  position: absolute;
  z-index: 200;
  top: 215px;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  .title {
    h3 {
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 15px;
    }

    h4 {
      opacity: 0.7;
      margin-bottom: 20px;
    }
  }

  .desc {
    margin-top: 20px;
    opacity: 0.8;

    h4 {
      margin-bottom: 15px;
    }

    h4:nth-child(4) {
      margin-bottom: 0;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  h4 {
    transform: translate(10px, 10px);
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
            <Con>
              <Ban>
                <Img seletedimg={bakery.url}>
                  <div className="box"></div>
                  <Link to="/">
                    <Home>
                      <IoHome
                        style={{
                          width: "25px",
                          height: "25px",
                          color: "#7C4614",
                        }}
                      />
                    </Home>
                  </Link>
                </Img>
              </Ban>

              <Info>
                <div className="title">
                  <h3>{bakery.name}</h3>
                  <h4>{bakery.ban}</h4>
                </div>
                <Break></Break>

                <div className="desc">
                  <Icon>
                    <IoLocationOutline
                      style={{ width: "20px", height: "20px" }}
                    />
                    <h4>{bakery.add}</h4>
                  </Icon>
                  <Icon>
                    <IoTimeOutline style={{ width: "20px", height: "20px" }} />
                    <h4>{bakery.time}</h4>
                  </Icon>
                  <Icon>
                    <FaRegCalendarTimes
                      style={{ width: "20px", height: "20px", opacity: "0.9" }}
                    />

                    <h4>{bakery.break}</h4>
                  </Icon>
                  <Icon>
                    <LuHeart style={{ width: "20px", height: "20px" }} />
                    <h4>{bakery.rec}</h4>
                  </Icon>
                </div>
              </Info>
            </Con>
            <Comment pageName={All.name} />
          </Wrap>
        </>
      ) : (
        <div>찾으시는 정보가 없습니다</div>
      )}
    </>
  );
};

export default Detail;
