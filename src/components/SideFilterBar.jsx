import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function SideFilterBar() {
  const initialFilterFormValue = {
    brand1: "",
    brand2: "",
    isReusable: false,
    priceRangeMin: 0,
    priceRangeMax: 10,
  };
  const [formData, setFormData] = useState(initialFilterFormValue);

  console.log("form data ", formData);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("target ", e.target.checked);
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [filterBrandItem, setFilterBrandItem] = useState({
    isBrandOpen: true,
    isReusableItemOpen: true,
    isPriceRangeOpen: true,
  });

  return (
    <div className="w-66 bg-gray-50 ">
      <form className="w-52">
        <p className="font-semibold text-lg my-2">Filters</p>
        <hr className="h-px  bg-gray-500 mb-3" />

        <button
          className="text-gray-900 bg-white border border-gray-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded w-44 h-22 text-sm px-5 py-2.5 me-2 mb-2"
          type="reset"
          onClick={() => setFormData(initialFilterFormValue)}
        >
          clear Filter
        </button>
        <hr className="h-px  bg-gray-900 my-3" />
        <hr className="h-px  bg-gray-500 mb-3" />

        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Mark brand</p>
            <span
              className="cursor-pointer"
              onClick={() =>
                setFilterBrandItem((prev) => ({
                  ...prev,
                  isBrandOpen: !prev.isBrandOpen,
                }))
              }
            >
              ^
            </span>
          </div>
          <div className={`${filterBrandItem.isBrandOpen ? "" : "hidden"}`}>
            <div className="flex py-1">
              <input type="checkbox" name="" id="" className="w-10" />
              <p className="ms-2">Leopard Venen</p>
            </div>
            <div className="flex py-1">
              <input type="checkbox" name="" id="" className="w-10" />
              <p className="ms-2">Leopard Venen</p>
            </div>
            <p className="font-semibold">Toon alles show all</p>
          </div>
        </div>
        <hr className="h-px bg-gray-700 border-2 my-3" />
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Duurzam re</p>
            <span
              className="cursor-pointer"
              onClick={() =>
                setFilterBrandItem((prev) => ({
                  ...prev,
                  isReusableItemOpen: !prev.isReusableItemOpen,
                }))
              }
            >
              ^
            </span>
          </div>
          <div
            className={`${filterBrandItem.isReusableItemOpen ? "" : "hidden"}`}
          >
            <div className="flex py-1">
              <input
                type="checkbox"
                name="isReusable"
                checked={formData.isReusable}
                onChange={handleChange}
                id=""
                className="w-10"
              />
              <p className="ms-2">Leopard Venen</p>
            </div>
          </div>
        </div>
        <hr className="h-px bg-gray-400 my-3" />

        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Punteen</p>
            <span
              className="cursor-pointer"
              onClick={() =>
                setFilterBrandItem((prev) => ({
                  prev,
                  isPriceRangeOpen: !prev.isPriceRangeOpen,
                }))
              }
            >
              ^
            </span>
          </div>
          <div
            className={`${filterBrandItem.isPriceRangeOpen ? "" : "hidden"}`}
          >
            <div className="flex py-1">
              <input
                type="number"
                min={1}
                name="priceRangeMin"
                value={formData.priceRangeMin}
                onChange={handleChange}
                id=""
                className="border border-gray-500 w-10 "
              />
              <span className="ms-10">To</span>
              <input
                type="number"
                name="priceRangeMax"
                min={1}
                value={formData.priceRangeMax}
                onChange={handleChange}
                max={100}
                id=""
                className="border border-gray-500 w-10 ms-10"
              />
            </div>

            <br />
            <div className="">
              <Slider
                min={1}
                max={100}
                range={[10, 90]}
                tabIndex={[5, 10]}
                defaultValue={[10, 50]}
                onChangeComplete={(range) => {
                  setFormData((prev) => ({
                    ...prev,
                    priceRangeMin: range[0],
                    priceRangeMax: range[1],
                  }));
                }}
                allowCross={false}
                trackStyle={{
                  backgroundColor: "black",
                  height: "3px",
                }}
                railStyle={{
                  backgroundColor: "gray",
                  height: "3px",
                  alignContent: "center",
                }}
                handleStyle={[
                  {
                    background: "black",
                    border: "3px",
                    borderBlock: "5px",
                  },
                  {
                    background: "black",
                    border: "3px",
                    alignItems: "center",
                  },
                ]}
                tipProps={{
                  placement: "top",
                  prefixCls: "rc-slider-tooltip",
                  overlay: (e) => {
                    console.log("eval", e);
                  },
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
