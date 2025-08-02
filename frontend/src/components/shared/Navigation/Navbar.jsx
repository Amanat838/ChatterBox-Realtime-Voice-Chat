import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <img
          className="w-[150px] h-[150px] rounded-full border-none outline-0"
          src="/public/images/logo.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Navbar;
