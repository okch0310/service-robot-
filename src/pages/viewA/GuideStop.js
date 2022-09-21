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
            <h1>전시품 안내를 중단하겠습니다.</h1>
          </div>
        </div>
        <div>
          <img className="quitImg" src="img/viewA2/stopImg.png"></img>
        </div>
        <div className="viewA2_bottom">
          <div className="guideWrapper">
            <div className="currentLocation">
              <div className="number"></div>
              감사합니다.
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
          navigate("/AutoComeback");
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
