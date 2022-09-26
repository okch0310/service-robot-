import React from "react";
import "../styles/viewSBtn.scss";
const ViewSBtn = ({ className, imgSrc }) => {
  return (
    <div>
      <img className={className} src={imgSrc}></img>
    </div>
  );
};

export default ViewSBtn;
