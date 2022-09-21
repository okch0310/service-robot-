import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/viewA/guidequit.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
const ViewA = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header headerText="전체 관람" />
      <div className="viewA2Wrapper">
        <div className="viewA2_top">
          <div className="textWrapper">
            <h1>자동 복귀를 위해</h1>
            <h1>재시작 버튼을 터치하세요</h1>
          </div>
          <div className="iconWrapper">
            <div className="playBtn">
              <FontAwesomeIcon className="playIcon" icon={faPlay} />
            </div>
          </div>
        </div>

        <div className="viewA2_bottom">
          <div className="guideWrapper">
            <div className="currentLocation">
              <div className="number"></div>
              자동 복귀 중 입니다.
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
          navigate("/Distance");
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
