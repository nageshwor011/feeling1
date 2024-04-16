import { useState } from "react";
import flag from "../assets/images/flag.jpg";

export default function CouponLogin() {
  const colors = {
    activeColor: "#77CEAB",
    btnPassiveColor: "#DCDCDD",
    outLineInvalidColor: "#B3261E",
  };
  const [btnColor, setBtnColor] = useState(colors.btnPassiveColor);
  const [isCouponInvalid, setIsCouponInValid] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const handleInputField = (event) => {
    setCouponCode(event.target.value);
    if (event.target.value.length !== 0) {
      setBtnColor(colors.activeColor);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsCouponInValid(true);
  };
  return (
    <div className="loginBgImage w-full border-2 border-red-900">
      <div className="flex justify-end">
        <div className=" text-black opacity-75 me-3 text-[16px]">English</div>
        <div className="one">
          <img src={flag} alt="" width={"40"} />
        </div>
      </div>
      <div className="flex justify-center mx-6 sm:justify-end sm:me-8">
        <div className="w-[550px]  border border-black rounded-2xl mt-5 couponCard">
          <div className="flex justify-center font-bold text-4xl p-3">
            Feelingz
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="text-center text-lg font-[500] mb-5 ">
              <p>Vul je persoonlijke vouchercode in en ontdek alle cadeaus!</p>
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                name=""
                id=""
                onChange={handleInputField}
                className={`border-2 ${
                  isCouponInvalid
                    ? `border-[${colors.outLineInvalidColor}]`
                    : `border-[#77CEAB]`
                } w-80 h-16 text-3xl text-center pb-2 items-center focus:outline-none focus:border-[#77CEAB] focus:border-[3px]`}
                placeholder="xxx-xxx-xxx"
                required
              />
            </div>
            <div className="flex justify-center mb-5">
              <p
                className={`text-sm  ${
                  isCouponInvalid ? "text-[#B3261E]" : "text-gray-700"
                } `}
              >
                Vul hier Uw voucher code in!
              </p>
            </div>
            <div className="flex justify-center my-3 ">
              <button
                className={` w-[90%] text-center mx-auto h-9 rounded-2xl`}
                style={{
                  backgroundColor: `${
                    isCouponInvalid ? colors.btnPassiveColor : btnColor
                  }`,
                }}
                type="submit"
              >
                Inlogin
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-36 me-6  sm:me-8 text-end font-mono">
        <p>Het leukste cadeau kies je zelf!</p>
      </div>
    </div>
  );
}
