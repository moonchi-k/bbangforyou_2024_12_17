import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  background-color: aliceblue;
  padding: 50px 0px 0px 30px;
`;
const Logo = styled.div`
  width: 95px;
  height: 31px;

  background-image: url(${process.env.PUBLIC_URL}/img/logo.png);
  background-repeat: no-repeat;
  margin: 0 auto;
`;
const TopCon = styled.div`
  margin-top: 60px;
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
const Search = styled.div`
  width: 47px;
  height: 47px;
  background-color: white;
  border-radius: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 19px 1px #d9d9d9;
  margin-right: 30px;
`;

const Form = styled.form`
  all: unset;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  display: block;

  input {
    all: unset;
    display: none;
    width: 100%;
    box-sizing: border-box;
    padding: 15px 0 10px 15px;
    background-color: #f7e2c8;
    border-radius: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  ::placeholder {
    opacity: 0.5;
  }
`;
const SecCon = styled.div`
  width: 100%;
`;
const Btn = styled.div``;
const Tag = styled.div``;
const Res = styled.div``;
const Img = styled.div``;
const Ban = styled.div``;
const Desc = styled.div``;
const Name = styled.div``;
const Page = styled.div``;
const MinCon = styled.div``;
const Arr = styled.div``;
const Thumb = styled.div``;
const MTitle = styled.div``;
const More = styled.div``;

const Home = () => {
  return (
    <Wrap>
      <Logo />

      <TopCon>
        <Title>
          <h4>오늘은 어디로</h4>
          <h5>가볼까요?</h5>
        </Title>
        <Search>
          <CiSearch
            style={{ width: "24px", height: "24px", color: "#A1A1A1" }}
          />
        </Search>
      </TopCon>
      <Form>
        <input type="text" placeholder="빵집을 검색해보세요." />
      </Form>

      <SecCon>
        <Btn>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
        </Btn>
        <Res>
          <Img>
            <Ban></Ban>
          </Img>
          <Desc>
            <Name>
              <h4>가게이름</h4>
              <h5>해시태그</h5>
            </Name>
            <Page>상세</Page>
          </Desc>
        </Res>
      </SecCon>

      <MinCon>
        <h3>새로 오픈했어요!</h3>
        <Arr>
          <Thumb></Thumb>
          <MTitle>
            <h5></h5>
            <More></More>
          </MTitle>
        </Arr>
      </MinCon>

      <MinCon>
        <h3>추천빵집</h3>
        <Arr>
          <Thumb></Thumb>
          <Title>
            <h5></h5>
            <More></More>
          </Title>
        </Arr>
      </MinCon>
    </Wrap>
  );
};

export default Home;
