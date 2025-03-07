import React, { useEffect } from "react";
import Header from "../Components/common/Header";
import ProductCart from "../Components/CartPage/ProductCartContainer";

export default function CartPage({
  shoppingCart,
  setShoppingCart,
  authUser,
  setAuthUser,
}) {
  return (
    <div>
      <div className="sticky top-0">
        <Header
          shoppingCart={shoppingCart}
          authUser={authUser}
          setAuthUser={setAuthUser}
        />
      </div>
      <ProductCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}
