import React, { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownWrapper,
  DropdownInnerWrapper,
  DropdownComponent,
} from "../DropdownElements";

const DropdownSoftware = () => {
  const [open, setOpen] = useState(false);

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
        console.log(dropdownRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <DropdownContainer id="Dropdown" ref={dropdownRef}>
      <DropdownWrapper>
        <DropdownInnerWrapper>
          <div className="dropdown-container">
            <div
              className="dropdown-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className={`dropdown-chip ${open ? "active" : "inactive"}`}>
                Software&nbsp;
              </span>
              {/* <span>+</span> */}
            </div>
            <div
              className={`dropdown-contents ${open ? "active" : "inactive"}`}
            >
              <ul>
                <DropdownItem
                  textTitle={"VS Code"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Wordpress"}
                  // textTag={"Design / Analysis"}
                />
                <DropdownItem
                  textTitle={"Shopify"}
                  // textTag={"Design"}
                />
                <DropdownItem
                  textTitle={"Replo Landing Page Designer"}
                  // textTag={"Analysis"}
                />
                <DropdownItem
                  textTitle={"Adobe CC"}
                  textTag={
                    "Illustrator / Photoshop / XD / Bridge / InDesign/ Premiere / After Effects"
                  }
                />
                <DropdownItem
                  textTitle={"Figma"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Sketch"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"InVision"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Wix"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Miro"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Trello"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Notion"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Click Up"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Slack"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Google"}
                  textTag={"Optimize / Tag Manager / Analytics"}
                />
                <DropdownItem
                  textTitle={"Hotjar"}
                  // textTag={""}
                />
                <DropdownItem
                  textTitle={"Microsoft Clarity"}
                  // textTag={""}
                />
              </ul>
            </div>
          </div>
        </DropdownInnerWrapper>
      </DropdownWrapper>
    </DropdownContainer>
  );

  function DropdownItem(props) {
    return (
      <li>
        <div>
          <h4>{props.textTitle}</h4>
          <p>{props.textTag}</p>
        </div>
      </li>
    );
  }
};

export default DropdownSoftware;
