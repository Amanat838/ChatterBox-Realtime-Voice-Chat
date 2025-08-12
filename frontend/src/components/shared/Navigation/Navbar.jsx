import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  async function logoutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <img
          className="w-[150px] h-[150px] rounded-full border-none outline-0"
          src="/images/logo.png"
          alt=""
        />
      </Link>
      {isAuth && (
        <button
          className="bg-white text-black px-4 py-2 rounded-2xl cursor-pointer"
          onClick={logoutUser}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
