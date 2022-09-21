import React from "react";
import { useNavigate } from "react-router-dom";
const ViewS = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>선택 관람 page</h1>

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

export default ViewS;
