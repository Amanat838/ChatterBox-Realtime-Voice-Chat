import React from "react";

const StepAvatar = ({ onNext }) => {
  return (
    <>
      <div>
        <p>StepAvatar</p>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

export default StepAvatar;
