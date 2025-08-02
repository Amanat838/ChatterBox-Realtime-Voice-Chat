import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import { MdAlternateEmail } from "react-icons/md";
import Button from "../../../components/shared/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";

const Email = ({onNext}) => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Card title="Enter your email" icon={MdAlternateEmail}>
        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={onNext} text={"Next"} />
        <p className="text-[#c4c5c5] w-[80%] text-center">
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  );
};

export default Email;
