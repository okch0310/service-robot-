import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
const Main = (props) => {
  const navigate = useNavigate();

  return (
    <div className="mainWrapper">
      <div className="mainHeader">
        <h1>국립 대구 과학관에 오신 것을 환영합니다!</h1>

        <br></br>

        <h1>Main page</h1>
      </div>
      <div className="btn">
        <div className="btn1" onClick={() => navigate("/ViewA")}>
          전체 관람
        </div>
        <div className="btn2" onClick={() => navigate("/ViewS")}>
          선택 관람
        </div>
        <div className="btn3" onClick={() => navigate("/Introduce")}>
          과학관 소개
        </div>
        <div className="btn4" onClick={() => navigate("/CameraPage")}>
          사진 찍기
        </div>
      </div>
    </div>
  );
};

export default Main;
