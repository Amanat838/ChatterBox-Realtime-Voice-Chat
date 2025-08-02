import React from "react";

const StepName = ({onNext}) => {
  return (
    <div>
      <p>StepName</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default StepName;
