import { RxCross2 } from "react-icons/rx";
export default function CartProductCard({ imgUrl, title, point }) {
  return (
    <div className="flex w-[700px]  border-b-2 border-gray-300 relative">
      <div>
        <img src={imgUrl} width={300} />
      </div>
      <div className="flex-col flex-1 mt-2">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{title}</p>
          <div className="me-2 mt-2">
            <span className="cursor-pointer">
              <RxCross2 />
            </span>
          </div>
        </div>
        <div className=" absolute bottom-10">
          <div>
            <select
              id="gift"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="gift"
              //   onChange={handleSelectChange}
            >
              st
              <option value={1}>1</option>
              {[...new Array(20)].map((option, i) => {
                return (
                  <option value={i + 1} key={option}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className=" absolute bottom-10 right-2">
          <div className="flex justify-start items-center">
            <div className="w-12 h-12 rounded-3xl bg-[#77CEAB] flex items-center justify-center text-white">
              {point}
            </div>
            <span className="ms-3 text-lg">points</span>
          </div>
        </div>
      </div>
    </div>
  );
}
