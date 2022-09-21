import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/header.scss";
import "../../styles/viewA/viewA.scss";

const ViewA = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Header headerText="전체 관람" />

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
