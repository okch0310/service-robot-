import React from "react";
import { useNavigate } from "react-router-dom";
const Camera = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Camera page</h1>
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

export default Camera;
