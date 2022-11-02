import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/header.scss";

const Header = ({ headerText }) => {
  const navigate = useNavigate();

  return (
    <div className="headerWraper">
      <div className="text">
        <h2 className="h2">{headerText}</h2>
      </div>
      <div className="iconWrapper" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} className="homeIcon" />
      </div>
    </div>
  );
};

export default Header;
