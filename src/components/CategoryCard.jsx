import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ imageUrl, title }) {
  const [hoverColor, setHoverColor] = useState("");
  return (
    <div className="mx-auto mt-5">
      <Link to={`category/${5}`}>
        <div
          className="w-[180px] sm:w-[280px] border border-gray-300 hover:border-gray-400 rounded-xl hover:shadow-md shadow-gray-400  overflow-hidden"
          onMouseOut={() => setHoverColor("bg-gray-300")}
          onMouseOver={() => setHoverColor("bg-gray-400")}
        >
          <div className="h-[100%] w-full">
            <img
              className=" border-gray-200 hover:border-t-0 w-full"
              src={imageUrl}
              alt=""
            />
          </div>
          <div
            className={` flex justify-center py-3 ${hoverColor} hover:bg-gray-400 font-serif`}
          >
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
}
