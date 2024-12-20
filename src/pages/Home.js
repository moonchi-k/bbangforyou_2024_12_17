import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { All } from "../components/All";
import { New } from "../components/New";
import { Rec } from "../components/Rec";
import { Link } from "react-router-dom";
import Bookmark from "./Bookmark";
import { BookMark } from "../components/BookMark";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 0px 0px 30px;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const Logo = styled.div`
  width: 95px;
  height: 31px;

  background-image: url(${process.env.PUBLIC_URL}/img/logo.png);
  background-repeat: no-repeat;
  margin: 0 auto;
  transform: translateX(-15px);
`;
const TopCon = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  /* background-color: #7c4614; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  h4 {
    font-family: "RiaSans-ExtraBold";
    color: #7c4614;
    font-size: 24px;
    margin-bottom: 5px;
  }

  h5 {
    font-family: "RiaSans-ExtraBold";
    color: #8a8989;
    font-size: 24px;
  }
`;
const Title = styled.div``;

const Form = styled.form`
  all: unset;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  display: block;

  input {
    all: unset;
    width: 380px;
    box-sizing: border-box;
    padding: 15px 0 10px 15px;
    background-color: #f7f0f2;
    border-radius: 20px;
    /* margin-top: 25px; */
    /* margin-bottom: 25px; */
  }

  ::placeholder {
    opacity: 0.5;
  }
`;
const SecCon = styled.div`
  width: 100%;
`;
const Btn = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  margin-top: 30px;
`;

const Res = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 70px;
  margin-top: 30px;
`;

const ResCon = styled.div`
  margin-right: 30px;
`;
const Img = styled.div`
  background: url(${(props) => props.bg}) no-repeat center / cover;
  width: 200px;
  height: 230px;
  display: flex;
  align-items: end;
  border-radius: 15px;
`;
const Ban = styled.div`
  width: 100%;
  background-color: rgba(124, 70, 20, 0.7);
  height: 25px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;
  font-size: 14px;
`;
const Desc = styled.div`
  width: 204px;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 6px;
  }

  h5 {
    font-size: 14px;
    opacity: 0.7;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div``;

const MinCon = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
const Arr = styled.div`
  display: flex;
`;

const NewCon = styled.div`
  margin-right: 25px;
`;

const RecCon = styled.div`
  margin-right: 25px;
`;
const Thumb = styled.div`
  width: 144px;
  height: 144px;
  background: url(${(props) => props.bgImg}) no-repeat center / cover;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const RThumb = styled.div`
  width: 144px;
  height: 144px;
  background: url(${(props) => props.recBg}) no-repeat center / cover;
  margin-bottom: 10px;
  border-radius: 15px;
`;
const MTitle = styled.div`
  display: flex;
  width: 144px;
  justify-content: space-between;
  h5 {
    font-weight: 600;
    margin-top: 7px;
    margin-bottom: 40px;
  }
`;

const params = {
  spaceBetween: 30,
  slidesPerView: 1.8,
};

const Home = () => {
  const random = (array, count) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const randomItem = random(All, 5);
  return (
    <Wrap>
      <Logo />

      <TopCon>
        <Title>
          <h4>오늘은 어디로</h4>
          <h5>가볼까요?</h5>
        </Title>
      </TopCon>
      <Form>
        <input type="text" placeholder="빵집을 검색해보세요." />
      </Form>

      <SecCon>
        <Res>
          {randomItem.map((bakery) => (
            <ResCon key={bakery.name}>
              <Link to={`/detail/${bakery.name}`}>
                <Img bg={bakery.url}>
                  <Ban>{bakery.ban}</Ban>
                </Img>
                <Desc>
                  <Name>
                    <h4>{bakery.name}</h4>
                    <h5>{bakery.hash}</h5>
                  </Name>
                  <BookMark />
                </Desc>
              </Link>
            </ResCon>
          ))}
        </Res>
      </SecCon>

      <MinCon>
        <h3>새로 오픈했어요!</h3>
        <Arr>
          {New.map((newlist) => (
            <NewCon>
              <Thumb bgImg={newlist.url}></Thumb>
              <MTitle>
                <h5>{newlist.name}</h5>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    marginTop: "3px",
                    color: "#7c4614",
                    width: "18px",
                    height: "18px",
                  }}
                />
              </MTitle>
            </NewCon>
          ))}
        </Arr>
      </MinCon>

      <MinCon>
        <h3>웨이팅 핫플레이스!</h3>
        <Arr>
          {Rec.map((reclist) => (
            <RecCon>
              <RThumb recBg={reclist.url}></RThumb>
              <MTitle>
                <h5>{reclist.name}</h5>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    marginTop: "3px",
                    color: "#7c4614",
                    width: "18px",
                    height: "18px",
                  }}
                />
              </MTitle>
            </RecCon>
          ))}
        </Arr>
      </MinCon>
    </Wrap>
  );
};

export default Home;
