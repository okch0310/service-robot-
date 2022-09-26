import React from "react";
import { useNavigate } from "react-router-dom";

import Webcam from "react-webcam";
import Header from "../components/header";

const CameraPage = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Camera page</h1>
      <Header headerText={"사진 촬영"} />
      <Webcam />
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
