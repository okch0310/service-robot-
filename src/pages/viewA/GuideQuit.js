import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/viewA/viewA2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
const ViewA = (props) => {
  const navigate = useNavigate();
  const locationArr = [
    "자동차의 진화",
    "자동차의 동력원1",
    "자동차의 동력원2",
    "자동차의 동력원2",
    "로봇을 활용한 자동차 생산 기술",
    "운전자 편의 시스템",
    "부품 전시",
    "자율 주행 도시",
    "미래 도시 그리기",
    "자율주행 시뮬레이터",
    "ADAS",
  ];

  const [index, setIndex] = useState(0);
  const [icon, setIcon] = useState(false);
  const onClick = () => {
    setIcon((current) => !current);
  };
  return (
    <div>
      <Header headerText="전체 관람" />
      <div className="viewA2Wrapper">
        <div className="viewA2_top">
          {icon ? (
            <div className="textWrapper">
              <h1>계속 관람하시려면</h1>
              <h1>재시작 버튼을 터치하세요.</h1>
            </div>
          ) : (
            <div className="textWrapper">
              <h1>"{locationArr[index]}"로 </h1>

              <h1>이동 하시겠습니다.</h1>
            </div>
          )}

          <div className="iconWrapper">
            <div onClick={onClick} className="playBtn">
              {
                (console.log(icon),
                icon ? (
                  <FontAwesomeIcon className="playIcon" icon={faPlay} />
                ) : (
                  <FontAwesomeIcon className="playIcon" icon={faPause} />
                ))
              }
            </div>
            <div className="quitBtn">
              <FontAwesomeIcon className="stopIcon" icon={faStop} />
            </div>
          </div>
        </div>
        <div className="viewA2_bottom">
          <div className="guideWrapper">
            <div className="currentLocation">
              <div className="number">{index}</div>
              {locationArr[index]}
            </div>
            <img className="robotImg" src="img/viewA2/robotImg.png"></img>
          </div>
          <div className="mapImgWrapper">
            <img className="mapImg" src="img/viewA2/mapImg.png"></img>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setIndex((current) => current + 1);
          console.log(index);
        }}
      >
        NEXT
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main
      </button>
    </div>
  );
};

export default ViewA;
