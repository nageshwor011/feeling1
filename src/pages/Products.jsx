import SideFilterBar from "../components/SideFilterBar";

import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  console.log("categoryId ", id);
  return (
    <div>
      <div className="banner h-[164px] bg-slate-600"></div>
      <div className="sm:mx-10 mx-auto my-22 hidden sm:inline-block">
        <p>
          home <span className="mx-3">&gt;</span>
          <span>Women</span>
          <span className="mx-3">&gt;</span>
          <span>Women</span>
          <span className="mx-3">&gt;</span>
          <span>Women</span>
        </p>
      </div>
      <div className="flex ">
        <div className="ms-10 hidden sm:inline-block">
          <SideFilterBar />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-y-6 mx-auto">
          {[...new Array(10)].map((product, i) => {
            return <ProductCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
