import React from "react";
import { useNavigate } from "react-router-dom";

import Webcam from "react-webcam";
import Header from "../components/header";
import "../styles/camera.scss";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CameraPage = (props) => {
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    console.log("capture");
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div>
      <h1>Camera page</h1>
      <Header headerText={"사진 촬영"} />
      <div className="cameraWrapper">
        <Webcam
          className="camera"
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="cameraBtnWrapper">
        <div className="cameraBtn">이메일 보내기</div>
        <div onClick={capture} className="cameraBtn">
          사진 찍기
        </div>
      </div>
      <div className="bgWrapper">
        <img className="bgImg" src="/img/camera/cameraBg.png"></img>
      </div>
      <div className="guideWrapper">
        <img className="guideImg" src="/img/camera/cameraGuide.png"></img>
      </div>

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

export default CameraPage;
