import React from "react";
import { useNavigate } from "react-router-dom";

//import Header from "../components/header";
const Main = (props) => {
  const navigate = useNavigate();

  return (
    <div className="mainWrapper">
      <div className="mainHeader">
        <h1 className="title">국립 과학관에 오신 것을 환영합니다!</h1>

        <br></br>
      </div>
      <div className="btnBox">
        <div className="btn1" onClick={() => navigate("/ViewA")}>
          <img className="btnImg" src="/img/main/a.png" alt="img"></img>
        </div>
        <div className="btn2" onClick={() => navigate("/ViewS")}>
          <img className="btnImg" src="/img/main/b.png" alt="img"></img>
        </div>
        <div className="btn3" onClick={() => navigate("/Introduce")}>
          <img className="btnImg" src="/img/main/c.png" alt="img"></img>
        </div>
        <div className="btn4" onClick={() => navigate("/CameraPage")}>
          <img className="btnImg" src="/img/main/d.png" alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
