import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
import { FcOk } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAvatar } from "../../store/activateSlice";
import { activate } from "../../http";
import { setAuth } from "../../store/authSlice";

const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/w1.jpg");

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  }

  async function submit() {
    try {
      const { data } = await activate({ name, avatar });
      // if(data.auth){
      //   dispatch(setAuth(data))
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <Card title={`Okay, ${name}!`} icon={FcOk}>
          <p className="text-[#C4C5C5]">How’s this photo?</p>
          <div className="w-[110px] h-[110px] border-[6px] border-[#0077ff] rounded-full overflow-hidden flex items-center justify-center">
            <img
              className="h-[90%] w-[90%] rounded-full object-cover"
              src={image}
              alt="avatar"
            />
          </div>
          <div>
            <input id="avatarIP" type="file" onChange={captureImage} hidden />
            <label
              className="text-[#0077FF] text-[14px] cursor-pointer hover:underline"
              htmlFor="avatarIP"
            >
              Choose a different photo
            </label>
          </div>

          <Button onClick={submit} text={"Next"} />
        </Card>
      </div>
    </>
  );
};

export default StepAvatar;
