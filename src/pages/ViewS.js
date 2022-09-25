import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import "../styles/viewS.scss";
import ViewSBtn from "../components/viewSBtn";
const ViewS = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Header headerText="선택 관람" />
      <div className="viewSHeader">
        <h1 className="h1">원하는 전시품을 선택하세요</h1>
      </div>

      <div className="btnWrapper">
        <div className="btnline1">
          <ViewSBtn imgSrc={"/img/puppy.png"} />
          <ViewSBtn imgSrc={"/img/cat.png"} />
          <ViewSBtn imgSrc={"/img/puppy.png"} />
        </div>
        <div className="btnline1">
          <ViewSBtn imgSrc={"/img/puppy.png"} />
          <ViewSBtn imgSrc={"/img/cat.png"} />{" "}
        </div>
        <div className="btnline1">
          <ViewSBtn imgSrc={"/img/puppy.png"} />
          <ViewSBtn imgSrc={"/img/cat.png"} />
          <ViewSBtn imgSrc={"/img/puppy.png"} />
        </div>
        <div className="btnline1">
          <ViewSBtn imgSrc={"/img/puppy.png"} />
          <ViewSBtn imgSrc={"/img/cat.png"} />
        </div>
      </div>
      <h1>임시</h1>
      <hr></hr>

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
