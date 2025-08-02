import React, { useState } from "react";
import Phone from "./Phone";
import Email from "./Email";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex w-[500px] items-end justify-end gap-2">
          <button
            className={`px-3 py-3 rounded-2xl cursor-pointer ${
              type === "phone" ? "bg-[#0077ff]" : "bg-[#262626]"
            }`}
            onClick={() => setType("phone")}
          >
            <IoIosPhonePortrait size={40} />
          </button>
          <button
            className={`px-3 py-3 rounded-2xl cursor-pointer ${
              type === "email" ? "bg-[#0077ff]" : "bg-[#262626]"
            }`}
            onClick={() => setType("email")}
          >
            <IoIosMail size={40} />
          </button>
        </div>
        <Component onNext={onNext} />
      </div>
    </div>
  );
};

export default StepPhoneEmail;
