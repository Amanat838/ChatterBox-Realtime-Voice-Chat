import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import { FcPhone } from "react-icons/fc";
import TextInput from "../../../components/shared/TextInput/TextInput";

const Phone = ({onNext}) => {
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <div className="">
      <Card title="Enter your phone number" icon={FcPhone}>
        <TextInput
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <Button onClick={onNext} text={"Next"} />
        <p className="text-[#c4c5c5] w-[80%] text-center">
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  );
};

export default Phone;
