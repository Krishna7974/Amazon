import React, { useState } from "react";
import Header from "../Components/common/Header";
import ProductContainer from "../Components/HomePage/ProductContainer";

export default function HomePage({
  shoppingCart,
  setShoppingCart,
  authUser,
  setAuthUser,
}) {
  const [searchItemText, setSearchItemText] = useState("");

  return (
    <div>
      <div className="sticky top-0 z-10">
        <Header
          shoppingCart={shoppingCart}
          setSearchItemText={setSearchItemText}
          authUser={authUser}
          setAuthUser={setAuthUser}
        />
      </div>
      <ProductContainer
        searchItemText={searchItemText}
        setShoppingCart={setShoppingCart}
        authUser={authUser}
      />
    </div>
  );
}
