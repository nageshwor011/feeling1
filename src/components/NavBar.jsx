import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../assets/images/logo.jpg";
import flag from "../assets/images/flag.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartState } from "../context/Context";

export default function NavBar() {
  const cat = [
    "wonen1",
    "koken2",
    "wonen3",
    "koken4",
    "wonen5",
    "koken6",
    "wonen7",
  ];
  const [categoryStyle, setIsCategory] = useState("hidden");
  const catState = useCartState();
  console.log("catsss ", catState);
  return (
    <>
      <div className="w-full bg-[#F2F7F5] h-[100px]">
        <div className="flex justify-end">
          <div className=" text-black opacity-75 me-3 text-[16px]">English</div>
          <div className=" mx-1 text-black opacity-75 text-[16px]">NL</div>
          <div className="one">
            <img src={flag} alt="" width={"40"} />
          </div>
        </div>

        <div className="flex justify-start w-[85%] items-center mt-[-20px]">
          <div className="font-semibold text-4xl p-5 mr-32">
            <img src={logo} alt="" width="300px" />
          </div>
          <div className="w-[600px]">
            <input
              type="search"
              name=""
              id=""
              className=" w-full bg-white h-10 text-black rounded-2xl  "
            />
          </div>

          <div className="flex">
            <div className="mx-5 mt-[5px]">
              <Link to="/cart">
                <MdOutlineShoppingCart />
              </Link>
            </div>
            <div className="mx-5 ">cart</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <ul className="flex justify-between hidden">
          {cat.map((cat, index) => {
            return (
              <div key={index} className="relative ">
                <li className="pb-[2px] font-[500]">{cat}</li>
                <div
                  className={`absolute ${"hidden"} bg-white w-[200px] top-9 border border-gray-200 rounded-md shadow-md`}
                >
                  <ul className="">
                    <li className="hover:bg-gray-200 ps-3 text-lg py-1">
                      woonac
                    </li>
                    <li className="hover:bg-gray-200 ps-3">planteen </li>
                    <li className="hover:bg-gray-200 ps-3">tafeleen </li>
                    <li className="hover:bg-gray-200 ps-3">textiel </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <hr />
    </>
  );
}
