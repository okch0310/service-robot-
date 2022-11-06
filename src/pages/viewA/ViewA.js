import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/header.scss";
import "../../styles/viewA/viewA.scss";

const ViewA = (props) => {
  const navigate = useNavigate();
  setTimeout(() => navigate("/ViewA2"), 3000);
  return (
    <div>
      <Header headerText="전체 관람" />

      <div className="imgWrapper">
        <img className="img" src="img/viewA1.png" alt="btn"></img>
      </div>

      <div className="test">
        <button
          onClick={() => {
            navigate("/ViewA2");
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ViewA;
