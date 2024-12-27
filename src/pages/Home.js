import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { All } from "../components/All";
import { New } from "../components/New";
import { Rec } from "../components/Rec";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Arr from "../components/Arr";
import Footer from "../components/Footer";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 0px 0px 0px;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;

  form {
    all: unset;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 100%;
    display: block;
    /* margin-right: 30px; */
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const Logo = styled.div`
  width: 95px;
  height: 31px;

  background-image: url(${process.env.PUBLIC_URL}/img/logo.png);
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const TWrapper = styled.div`
  background-color: rgba(247, 240, 242, 0.4);
  padding-top: 50px;
  padding-bottom: 70px;
`;
const TopCon = styled.div`
  /* margin-top: 60px; */
  margin-bottom: 20px;
  /* background-color: #7c4614; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
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
  /* width: 100%; */
  /* padding-left: 30px; */

  input {
    all: unset;
    box-sizing: border-box;
    display: block;
    width: 88%;
    /* margin-left: 30px; */

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
  padding-left: 30px;
`;

const Res = styled.div`
  width: 100%;
  display: flex;
  /* margin-bottom: 50px; */
  margin-top: 30px;
`;

const ResCon = styled.div`
  /* margin-right: 30px; */
`;
const Img = styled.div`
  background: url(${(props) => props.bg}) no-repeat center / cover;
  /* width: 200px; */
  width: 100%;
  height: 200px;
  display: flex;
  align-items: end;
  border-radius: 15px;

  @media screen and (max-width: 380px) {
    width: 100%;
    height: 180px;
  }
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
  font-size: 12px;
`;
const Desc = styled.div`
  width: 204px;
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 6px;

    @media screen and (max-width: 380px) {
      font-size: 18px;
    }
  }

  h5 {
    font-size: 14px;
    opacity: 0.7;
    @media screen and (max-width: 380px) {
      font-size: 14px;
    }
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
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    opacity: 0.4;
    margin-bottom: 20px;
  }
`;

const Arrs = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  /* background-color: rgba(247, 240, 242, 0.4); */
  padding: 60px 20px;
`;

const RecCon = styled.div`
  /* margin-right: 25px; */
`;

const RThumb = styled.div`
  /* width: 144px; */
  height: 140px;
  background: url(${(props) => props.recbg}) no-repeat center / cover;
  margin-bottom: 10px;
  border-radius: 15px;

  @media screen and (max-width: 380px) {
    height: 120px;
  }
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

  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 2.3,

  breakpoints: {
    380: {
      spaceBetween: 10,
      slidesPerView: 2.3,
    },
  },
};

const newParams = {
  spaceBetween: 10,
  slidesPerView: 2.9,
};

const Home = () => {
  const random = (array, count) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const randomItem = random(All, 5);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("검색어", data.name);
    navigate(`/detail/${data.name}`);
  };

  return (
    <Wrap>
      <Logo />

      <TWrapper>
        <TopCon>
          <Title>
            <h4>오늘은 어디로</h4>
            <h5>가볼까요?</h5>
          </Title>
        </TopCon>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="빵집을 검색해보세요."
            {...register("name", { required: "검색어를 입력하세요." })}
          />
        </Form>

        <SecCon>
          <Res>
            <Swiper {...params}>
              {randomItem.map((bakery) => (
                <SwiperSlide>
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
                      </Desc>
                    </Link>
                  </ResCon>
                </SwiperSlide>
              ))}
            </Swiper>
          </Res>
        </SecCon>
      </TWrapper>
      <Wrapper>
        <MinCon>
          <h3>새로 오픈했어요!</h3>
          <p>발빠른 빵지순례 빵포유와 함께해요 😋</p>
          <Arr />
        </MinCon>

        <MinCon>
          <h3>웨이팅 핫플레이스!</h3>
          <p>나빼고 다가는 핫플레이스 😮</p>

          <Arrs>
            <Swiper {...newParams}>
              {Rec.map((reclist) => (
                <SwiperSlide>
                  <RecCon>
                    <Link to={`/detail/${reclist.name}`}>
                      <RThumb recbg={reclist.url}></RThumb>
                      <MTitle>
                        <h5>{reclist.name}</h5>
                        {/* <FontAwesomeIcon
                      icon={faBookmark}
                      style={{
                        marginTop: "3px",
                        color: "#7c4614",
                        width: "18px",
                        height: "18px",
                      }}
                    /> */}
                      </MTitle>
                    </Link>
                  </RecCon>
                </SwiperSlide>
              ))}
            </Swiper>
          </Arrs>
        </MinCon>
      </Wrapper>
      <Footer></Footer>
    </Wrap>
  );
};

export default Home;
