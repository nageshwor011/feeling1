import CartProductCard from "../components/CartProductCard";
import imgUrl from "../assets/images/productDesc.jpg";

export default function Cart() {
  const carts = [...new Array(10)];
  return (
    <div className=" ms-5">
      <p className="my-10 font-bold text-3xl">
        DEZE CADEAU ZIJN DOOR JOUW GESELECTEERD
      </p>
      <div className="flex justify-between">
        <div>
          {carts.map((product) => {
            return (
              <CartProductCard
                imgUrl={imgUrl}
                title={" CITRUSPERS CLASSIC BLACK - 1L"}
                key={product}
                point={5}
              />
            );
          })}
        </div>

        <div className="me-10 w-80">
          <p className="font-bold text-xl">Total</p>
          <DisplayPoint point={15} border="border-b-2" />
          <DisplayPoint point={10} additionalAmount="voucher" margin={"mt-3"} />
          <div className="ms-5 font-bold mt-[-8px]">+</div>
          <DisplayPoint
            point={5}
            additionalAmount={19.95}
            border="border-b-2"
            margin="mt-1"
          />
          <button className="w-[318px] h-[66px] bg-[#77CEAB] text-white font-semibold text-xl mt-[300px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

function DisplayPoint({ point, additionalAmount, border, margin }) {
  return (
    <div
      className={`flex justify-between ${
        margin ?? "mt-1"
      } ${border} border-gray-300 pb-3`}
    >
      <div className="flex justify-start items-center ">
        <div className="w-12 h-12 rounded-3xl bg-[#77CEAB] flex items-center justify-center text-white">
          {point}
        </div>
        <span className="ms-3 text-lg">points</span>
      </div>
      {additionalAmount && (
        <div className="mt-2 mx-5">
          <p className="text-xl font-bold">{additionalAmount}</p>
        </div>
      )}
    </div>
  );
}
