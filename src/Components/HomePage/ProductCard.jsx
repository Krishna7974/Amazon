import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import SecondaryButton from "../common/SecondButton";

export default function ProductCard({
  image,
  id,
  title,
  subtitle,
  oldPrice,
  newPrice,
  stars,
  rating,
  setShoppingCart,
  authUser,
}) {
  const savingPrice = oldPrice - newPrice;
  const discount = Math.floor((savingPrice / oldPrice) * 100);

  let starsArr = [];
  for (let i = 1; i <= stars; i++) {
    starsArr.push(i);
  }

  return (
    <div className="z-0 w-[18rem] h-[34rem] p-[1rem] rounded-xl border-b-2">
      <img
        src={image}
        className="w-[15rem] h-[21rem] rounded-md"
        alt="Anushka"
      />
      <div className="text-center flex flex-col items-center p-[1rem]">
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
        <div className="flex items-center gap-2">
          <p className="text-[#a21e2b] font-semibold text-lg">₹{newPrice}</p>
          <p className="line-through text-xs">₹{oldPrice}</p>
          <p>Save</p>
          <p>
            ₹{savingPrice}({discount}%)
          </p>
        </div>
        <div className={`${authUser?"":"hidden"}`}>
          <SecondaryButton 
            onClick={() => {
              setShoppingCart((prev) => {
                const isPresent = prev?.find((item) => item.id === id);
                if (!isPresent) {
                  return [
                    ...prev,
                    {
                      image,
                      id,
                      title,
                      subtitle,
                      oldPrice,
                      newPrice,
                      stars,
                      rating,
                      count: 1,
                    },
                  ];
                } else {
                  return prev?.map((item) => {
                    if (item.id === id) {
                      return { ...item, count: item.count + 1 };
                    } else return item;
                  });
                }
              });
            }}
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
}
