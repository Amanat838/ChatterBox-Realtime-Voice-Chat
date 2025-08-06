import React from "react";
import TextInput from "../../components/shared/TextInput/TextInput";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import { FcPortraitMode } from "react-icons/fc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/activateSlice";

const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);

  function nextStep() {
    if (!fullName) {
      return;
    }
    dispatch(setName(fullName));
    onNext()
  }
  const [fullName, setFullName] = useState(name);
  return (
    <div>
      <Card title="What’s your full name?" icon={FcPortraitMode}>
        <TextInput
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <p className="text-[#C4C5C5] w-[50%] text-center">
          People use real names at codershouse :){" "}
        </p>
        <Button onClick={nextStep} text={"Next"} />
      </Card>
    </div>
  );
};

export default StepName;
