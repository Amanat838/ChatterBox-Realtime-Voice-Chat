import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import { FcPhone } from "react-icons/fc";
import TextInput from "../../../components/shared/TextInput/TextInput";
import { sendOtp } from "../../../http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/authSlice";

const Phone = ({ onNext }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const dispatch = useDispatch();

  async function submit() {
    const { data } = await sendOtp({ phone: phoneNo });
    console.log(data)
    dispatch(setOtp({phone: data.phone, hash: data.hash}));
    onNext()
  }

  return (
    <div className="">
      <Card title="Enter your phone number" icon={FcPhone}>
        <TextInput
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <Button onClick={submit} text={"Next"} />
        <p className="text-[#c4c5c5] w-[80%] text-center">
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  );
};

export default Phone;
