import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import MainButton from "../common/MainButton";

export default function CartProduct({
  image,
  index,
  count,
  title,
  subtitle,
  newPrice,
  stars,
  rating,
  setShoppingCart,
}) {
  let starsArr = [];
  for (let i = 1; i <= stars; i++) {
    starsArr.push(i);
  }

  return (
    <div className=" flex shadow-xl gap-6 px-3 py-2 rounded-lg">
      <div className="w-[10rem]">
        <img src={image} className="w-[10rem] h-[11rem] rounded-md" alt={title} />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col pt-5">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm #fefefe text-center">{subtitle}</p>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {starsArr.map((i) => (
                <MdOutlineStar key={Math.random().toString()} color="#f5945c" />
              ))}
            </div>
            <GoDotFill size="10px" />
            <p className="text-[#3ebfff] font-semibold">{rating}</p>
          </div>
          <div className="flex gap-1 items-center text-green-600">
            <TiShoppingCart size={30} />
            <p className="font-bold">{count}</p>
          </div>
          <div className="mt-3">
            <MainButton
              onClick={() =>
                setShoppingCart((prev) =>
                  prev.filter((_, ind) => ind !== index)
                )
              }
              title="Remove From Cart"
            />
          </div>
        </div>
        <div>
          <p className="text-[#a21e2b] font-semibold text-lg">₹{newPrice}</p>
        </div>
      </div>
    </div>
  );
}
