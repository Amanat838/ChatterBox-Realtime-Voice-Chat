import React from "react";
import { useState } from "react";
import StepName from "./Steps/StepName";
import StepAvatar from './Steps/StepAvatar'

const steps = {
  1: StepName,
  2: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Step onNext={onNext}></Step>
    </div>
  );
};

export default Activate;
