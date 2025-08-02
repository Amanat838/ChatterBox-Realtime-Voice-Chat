import StepPhoneEmail from "./Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "./Steps/StepOtp";
import { useState } from "react";



const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const totalSteps = Object.keys(steps).length;
  const Step = steps[step];

  const onNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      console.log("All steps completed ✅");
      // Optionally navigate or show completion message
    }
  };
  return (
      <div>{Step && <Step onNext={onNext} />}</div>
  );
};

export default Authenticate;
