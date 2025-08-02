import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import Card from "../components/shared/Card/Card";
import {Link, useNavigate} from 'react-router-dom'
import Button from "../components/shared/Button/Button";

const Home = () => {
    const navigate = useNavigate()
    function startRegister() {
        navigate('/authenticate')
    }
  return (
    <div className="flex justify-center mt-16">
      <Card title="Welcome to ChatterBox!" icon={FaRegCommentDots}>
        <p className="text-center text-lg">
          We work hard to get ChatterBox ready for everyone! While we
          wrap up the finishing touches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <Button onClick={startRegister} text={"Go Chat"}/>
        <div className="flex gap-1">
          <span className="text-[#0077ff]">Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
