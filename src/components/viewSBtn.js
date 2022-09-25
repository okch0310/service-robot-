import React from "react";
import "../styles/viewSBtn.scss";
const ViewSBtn = ({ imgSrc }) => {
  return (
    <div>
      <img className="btn" src={imgSrc}></img>
    </div>
  );
};

export default ViewSBtn;
