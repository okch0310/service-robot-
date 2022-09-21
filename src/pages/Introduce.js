import React from "react";
import { useNavigate } from "react-router-dom";
const Introduce = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Introduce page</h1>
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

export default Introduce;
