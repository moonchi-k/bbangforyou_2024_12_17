import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { New } from "./New";
import "swiper/css";
import { Link } from "react-router-dom";

const SArr = styled.div`
  display: flex;
`;

const NewCon = styled.div`
  /* margin-right: 25px; */
  /* width: 100%; */
`;

const Thumb = styled.div`
  /* width: 144px; */
  height: 140px;
  background: url(${(props) => props.bgimg}) no-repeat center / cover;
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

const newParams = {
  spaceBetween: 10,
  slidesPerView: 2.9,
};

const Arr = () => {
  return (
    <SArr>
      <Swiper {...newParams}>
        {New.map((newlist) => (
          <SwiperSlide>
            <NewCon>
              <Link to={`/detail/${newlist.name}`}>
                <Thumb bgimg={newlist.url}></Thumb>
                <MTitle>
                  <h5>{newlist.name}</h5>
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
            </NewCon>
          </SwiperSlide>
        ))}
      </Swiper>
    </SArr>
  );
};

export default Arr;
