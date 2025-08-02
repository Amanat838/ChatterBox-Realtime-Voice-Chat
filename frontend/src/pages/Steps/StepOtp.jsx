import React, { useState } from "react";
import TextInput from "../../components/shared/TextInput/TextInput";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import { FcUnlock } from "react-icons/fc";


const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState('')
  return (
    <div className="w-full flex justify-center">
      <Card title="Enter the code we just texted you" icon={FcUnlock}>
        <TextInput value={otp} onChange={(e)=>setOtp(e.target.value)}/>
        <p>Didn’t receive? Tap to resend</p>
        <Button text={"Next"} />
      </Card>
    </div>
  );
};

export default StepOtp;
