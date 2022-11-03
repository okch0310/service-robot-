import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//import { useNavigate } from "react-router-dom";
import "../styles/tab2Header.scss";

const Tab2Header = ({ headerText }) => {
  //  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(0);
  console.log(pageNum);

  return (
    // <div className="headerWraper">
    //   <div className="text">
    //     <h2 className="h2">{headerText}</h2>
    //   </div>
    //   <div className="icon" onClick={() => navigate("/")}>
    //     <FontAwesomeIcon icon={faHouse} className="homeIcon" />
    //   </div>
    // </div>
    <div>
      <div className="headerWrapper">
        <div className="iconWrapper">
          <FontAwesomeIcon
            onClick={() => (pageNum > 0 ? setPageNum(pageNum + -1) : null)}
            icon={faAngleLeft}
            className="icon"
          />
        </div>
        <div className="title">국립대구과학관</div>
        <div className="iconWrapper">
          <FontAwesomeIcon
            onClick={() => (pageNum < 3 ? setPageNum(pageNum + 1) : null)}
            icon={faAngleRight}
            className="icon"
          />
        </div>
      </div>
      <div className="imgWrapper">
        {(() => {
          if (pageNum === 0)
            return (
              <img
                className="pic"
                src={process.env.PUBLIC_URL + "/img/introduce/tab2img0.png"}
                alt="img"
              ></img>
            );
          else if (pageNum === 1)
            return (
              <img
                className="pic"
                src={process.env.PUBLIC_URL + "/img/introduce/tab2img1.png"}
                alt="img"
              ></img>
            );
          else if (pageNum === 2)
            return (
              <img
                className="pic"
                src={process.env.PUBLIC_URL + "/img/introduce/tab2img2.png"}
                alt="img"
              ></img>
            );
          else
            return (
              <img
                className="pic"
                src={process.env.PUBLIC_URL + "/img/introduce/tab2img3.png"}
                alt="img"
              ></img>
            );
        })()}
      </div>
    </div>
  );
};

export default Tab2Header;
