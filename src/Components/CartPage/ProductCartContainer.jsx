import React from "react";
import CartProduct from "./CartProduct";
import CartAmount from "./CartAmount";

export default function ProductCart({ shoppingCart, setShoppingCart }) {
  return (
    <div className="flex">
      <div className="w-8/12">
        <div className="flex justify-between ">
          <p className="text-3xl font-sans px-8 py-2 font-semibold">
            Shopping Cart
          </p>
          <p className="text-lg mt-6 font-semibold px-8">Price</p>
        </div>
        <hr />
        <div className="px-5 py-2 flex flex-col gap-4">
          {shoppingCart?.map((product, index) => (
            <CartProduct
              key={index}
              index={index}
              count={product.count}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              stars={product.stars}
              rating={product.rating}
              newPrice={product.newPrice}
              setShoppingCart={setShoppingCart}
            />
          ))}
        </div>
      </div>
      <CartAmount shoppingCart={shoppingCart} />
    </div>
  );
}
