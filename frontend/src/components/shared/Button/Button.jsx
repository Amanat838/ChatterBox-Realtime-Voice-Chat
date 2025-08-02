import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({text, onClick}) => {
  return (
      <button onClick={onClick} className="flex items-center gap-2 bg-[#0077ff] py-[10px] px-[20px] font-bold rounded-3xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#014a9c]">
        <span>{text}</span>
        <FaArrowRightLong />
      </button>
  );
};

export default Button;
