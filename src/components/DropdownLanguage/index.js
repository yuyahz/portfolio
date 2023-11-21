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
                Language&nbsp;
              </span>
              {/* <span>+</span> */}
            </div>
            <div
              className={`dropdown-contents ${open ? "active" : "inactive"}`}
            >
              <ul>
                <DropdownItem textTitle={"HTML"} textTag={"Language"} />
                <DropdownItem textTitle={"CSS"} textTag={"Language"} />
                <DropdownItem textTitle={"JavaScript"} textTag={"Language"} />
                <DropdownItem
                  textTitle={"Liquid"}
                  textTag={"Shopify Template Language"}
                />
                <DropdownItem textTitle={"React"} textTag={"Library"} />
                <DropdownItem textTitle={"Bootstrap"} textTag={"Framework"} />
                <DropdownItem textTitle={"Materialize"} textTag={"Framework"} />
                <DropdownItem textTitle={"SCSS / SASS"} textTag={"Language"} />
                <DropdownItem
                  textTitle={"styled-components"}
                  textTag={"Library"}
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
