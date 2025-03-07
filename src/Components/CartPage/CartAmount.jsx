import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import SecondButton from "../common/SecondButton";

export default function CartAmount({ shoppingCart }) {
  let totalAmount = shoppingCart.reduce(
    (acc, item) => acc + item.newPrice * item.count,
    0
  );
  let totalItems = shoppingCart.reduce((acc, item) => acc + item.count, 0);
  return (
    <div className=" w-4/12 h-[15rem] flex flex-col justify-center items-center gap-3 shadow-xl m-4 rounded-lg">
      <div className="flex">
        <div className="flex text-xl font-medium">
          Subtotal{" "}
          <sub className="text-sm flex items-end mb-1">
            {" "}
            ({totalItems} itmes){" "}
          </sub>
          <pre> : </pre>
        </div>
        <p className="text-xl font-bold"> ₹{totalAmount}</p>
      </div>
      <div className="text-green-800 font-semibold flex items-center gap-2">
        <AiFillCheckCircle />
        <p>Your order is eligible for FREE Delivery.</p>
      </div>
      <div>
        <SecondButton title="Proceed to Pay" />
      </div>
    </div>
  );
}
