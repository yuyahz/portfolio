import React, { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownWrapper,
  DropdownInnerWrapper,
  DropdownComponent,
} from "../DropdownElements";
import { Button } from "../ButtonCaseElements";
import { FaDribbble } from "react-icons/fa";

const DropdownDiscipline = ({ to, buttonLabel }) => {
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
                Discipline&nbsp;
              </span>
              {/* <span>+</span> */}
            </div>

            <div
              className={`dropdown-contents ${open ? "active" : "inactive"}`}
            >
              <ul>
                <DropdownItem
                  textTitle={"User Interface Design"}
                  textTag={"Design"}
                />
                <DropdownItem
                  textTitle={"User Experience Design"}
                  textTag={"Design / Analysis"}
                />
                <DropdownItem textTitle={"Wireframing"} textTag={"Design"} />
                <DropdownItem textTitle={"Prototyping"} textTag={"Design"} />
                <DropdownItem
                  textTitle={"Motion Prototype"}
                  textTag={"Design"}
                />
                <DropdownItem
                  textTitle={"Usability Testing"}
                  textTag={"Analysis"}
                />
                <DropdownItem
                  textTitle={"Data - Analysis"}
                  textTag={"Analysis"}
                />
                <DropdownItem
                  textTitle={"Design identity systems"}
                  textTag={"Design / Analysis"}
                />
                <DropdownItem
                  textTitle={"Information Architecture"}
                  textTag={"Design / Analysis"}
                />
                <DropdownItem
                  textTitle={"E-commerce Optimization"}
                  textTag={"Design / Analysis / Coding"}
                />
                <DropdownItem
                  textTitle={"Brand Development"}
                  textTag={"Branding"}
                />
                <DropdownItem
                  textTitle={"Agile Development"}
                  textTag={"Coding"}
                />
                <DropdownItem
                  textTitle={"Vector - illustration"}
                  textTag={"Design"}
                />
                <DropdownItem textTitle={"Logo Design"} textTag={"Design"} />
                <DropdownItem textTitle={"Package Design"} textTag={"Design"} />
                <DropdownItem
                  textTitle={
                    "Check out how I enhanced UI at the beginning of my career !!"
                  }
                  textTag={"Design"}
                />
                <Button
                  to={"dailyUiPage"}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  <FaDribbble style={{ marginRight: "6px" }} />
                  View Study
                </Button>
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

export default DropdownDiscipline;
