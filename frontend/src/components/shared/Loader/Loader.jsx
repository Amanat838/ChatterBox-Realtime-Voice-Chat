import React from "react";
import Card from "../Card/Card";

const Loader = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <span className="font-bold text-[22px]">{message}</span>
      </Card>
    </div>
  );
};

export default Loader;
