import { useState } from "react";

/* eslint-disable */
function ProductDescriptionCard({
  imageUrl,
  title,
  category,
  point,
  description,
}) {
  const descItems = [
    "Vermogen: 25W",
    "Aantal snelheden: 1",
    " Snoerlengte: 0,7m",
    "Inhoud: 1L",
    " Vaatwasserbestendig: Ja",
  ];
  const [selectedGift, setSelectedGift] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedGift({ [name]: value });
  };
  return (
    <div>
      <div className="flex-col sm:flex-row sm:flex sm:mx-10 mx-5">
        <div className=" sm:w-2/5">
          <img src={selectedImage ?? imageUrl} alt="" sizes="" />
          <div className="flex justify-start mx-3 cursor-pointer">
            {[imageUrl, imageUrl, imageUrl].map((image) => {
              return (
                <div
                  className="border border-gray-400 p-2 mx-3"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt="" width={100} sizes="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:ms-32 sm:w-2/5">
          <p className="text-lg font-bold my-3">{category}</p>
          <p className="text-3lg font-bold text-3xl mb-10">
            {title.toUpperCase()}
          </p>
          <div className="flex justify-start items-center my-10">
            <div className="w-12 h-12 rounded-3xl bg-[#77CEAB] flex items-center justify-center text-white">
              {point}
            </div>
            <span className="ms-3 text-lg">points</span>
          </div>
          <div className="mb-5"> {description}</div>
          <div>
            <ul>
              {descItems.map((list) => {
                return (
                  <>
                    <li className="">{list}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <hr className="mt-12 mb-4 h-px  bg-gray-500" />
          <p className="font-semibold text-lg text-[#7bd9b4] mb-2">
            op Somethong text{" "}
          </p>
          <div className="flex items-center">
            <div>
              <select
                id="gift"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="gift"
                onChange={handleSelectChange}
              >
                <option value={1}>1</option>
                {[...new Array(20)].map((option, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </div>
            <div className="ms-5 mt-2">
              <button
                type="button"
                class="text-white bg-[#7bd9b4] hover:bg-[#7bd9b4]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                onClick={() => selectedGift()}
              >
                Choose the Gift
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionCard;
