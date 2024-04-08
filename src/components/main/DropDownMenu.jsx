"use client";
import {useState } from "react";
import Arrow from "../../../public/icons/left-arrow-logo.svg";
import Tick from "../../../public/icons/tick.svg";
import "../../styles/product.css";

import Image from "next/image";

export const DropDownMenu = ({ options, defaultOption }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const [click, setClick] = useState(false);
  
    const handleOptionsSelect = (option) => {
      setSelectedOption(option);
      setClick(false);
    };
    return (
      <div className="dropdown">
        <div className="sorting-btn" onClick={() => setClick(!click)}>
          <p>{selectedOption}</p>
          <Image
            style={{
              rotate: `${click ? "180deg" : "0deg"}`,
              transition: "rotate 0.15s ease-in-out",
            }}
            src={Arrow}
            alt="arrow"
            height={16}
            width={16}
          />
        </div>
        {click && (
          <ul className="options">
            {options.map((option, index) => {
              return (
                <li
                  onClick={() => handleOptionsSelect(option)}
                  className="each-option"
                  key={index}
                >
                  {option == selectedOption && (
                    <Image src={Tick} height={26} width={26} alt="tick-logo" />
                  )}
                  <p
                    style={{
                      fontWeight: `${option == selectedOption ? "800" : "normal"
                        }`,
                    }}
                  >
                    {option}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };
  export default DropDownMenu