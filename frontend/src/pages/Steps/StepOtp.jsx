import React, { useState } from "react";
import TextInput from "../../components/shared/TextInput/TextInput";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import { FcUnlock } from "react-icons/fc";
import { verifyOtp } from "../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  async function submit() {
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      // console.log(data);  
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full flex justify-center">
      <Card title="Enter the code we just texted you" icon={FcUnlock}>
        <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
        <p>Didn’t receive? Tap to resend</p>
        <Button onClick={submit} text={"Next"} />
      </Card>
    </div>
  );
};

export default StepOtp;
