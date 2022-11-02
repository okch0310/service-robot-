import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import "../styles/viewS.scss";
import ViewSBtn from "../components/viewSBtn";

const socket = io.connect("http://192.168.0.18:30001", {
  //path: "/socket.io",
  transports: ["websocket"],
});

const ViewS = (props) => {
  const navigate = useNavigate();
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);
  const [btn6, setBtn6] = useState(false);
  const [btn7, setBtn7] = useState(false);
  const [btn8, setBtn8] = useState(false);
  const [btn9, setBtn9] = useState(false);
  const [btn10, setBtn10] = useState(false);
  let btnArr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10];

  const [msg, setMsg] = useState("");

  socket.on("connect", () => {
    console.log("연결 성공");
  });

  const sendCtoS = () => {
    socket.emit("message", btnArr);
    console.log(btnArr);
  };

  const sendStoC = () => {
    socket.on("server_msg", (data) => {
      console.log(`서버에게 받은 메시지: ${data}`);
    });
    socket.emit("message", msg);
  };

  return (
    <div>
      <Header headerText="선택 관람" />
      <div className="viewSHeader">
        <h1 className="h1">원하는 전시품을 선택하세요</h1>
      </div>

      <div className="btnWrapper">
        <div className="btnline1">
          <div onClick={() => setBtn1(!btn1)}>
            <ViewSBtn
              className={btn1 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn1.png"}
            />
          </div>

          <div onClick={() => setBtn2(!btn2)}>
            <ViewSBtn
              className={btn2 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn2.png"}
            />
          </div>
          <div onClick={() => setBtn3(!btn3)}>
            <ViewSBtn
              className={btn3 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn3.png"}
            />
          </div>
        </div>
        <div className="btnline1">
          <div onClick={() => setBtn4(!btn4)}>
            <ViewSBtn
              className={btn4 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn4.png"}
            />
          </div>
          <div onClick={() => setBtn5(!btn5)}>
            <ViewSBtn
              className={btn5 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn5.png"}
            />
          </div>
        </div>
        <div className="btnline1">
          <div onClick={() => setBtn6(!btn6)}>
            <ViewSBtn
              className={btn6 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn6.png"}
            />
          </div>
          <div onClick={() => setBtn7(!btn7)}>
            <ViewSBtn
              className={btn7 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn7.png"}
            />
          </div>
          <div onClick={() => setBtn8(!btn8)}>
            <ViewSBtn
              className={btn8 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn8.png"}
            />
          </div>
        </div>
        <div className="btnline1">
          <div onClick={() => setBtn9(!btn9)}>
            <ViewSBtn
              className={btn9 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn9.png"}
            />
          </div>
          <div onClick={() => setBtn10(!btn10)}>
            <ViewSBtn
              className={btn10 ? "btnClicked" : "btn"}
              imgSrc={"/img/btn10.png"}
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="bottomWrapper">
        <div onClick={sendCtoS} className="guideStartBtn">
          안내 시작
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main
      </button>
      <div></div>
    </div>
  );
};

export default ViewS;
