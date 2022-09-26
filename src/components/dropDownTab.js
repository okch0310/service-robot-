import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import "../styles/dropDownTab.scss";

const DropDownTab = ({ qText, aText }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsClicked((current) => !current)}
        className="QWrapper"
      >
        <div className="QIconWrapper">
          <FontAwesomeIcon icon={faQ} className="QIcon" />
        </div>
        <div className="QText">{qText}</div>
      </div>
      {isClicked ? (
        <div className="AWrapper">
          <div className="AText">{aText}</div>
        </div>
      ) : null}
    </div>
  );
};

export default DropDownTab;
