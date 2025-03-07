import React from "react";
import ProductCard from "./ProductCard";
import ProductBanner from "./ProductBanner";
import { allProducts } from "../../Helpers/ProductDetails";

export default function ProductContainer({ setShoppingCart, searchItemText ,authUser}) {
  return (
    <div>
      <ProductBanner />
      <div className="flex top-[19rem]  justify-center  gap-10 flex-wrap">
        {allProducts?.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            stars={product.stars}
            rating={product.rating}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            setShoppingCart={setShoppingCart}
            authUser={authUser}
          />
        ))}
      </div>
    </div>
  );
}
