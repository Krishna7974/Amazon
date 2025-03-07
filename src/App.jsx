import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";

const App = () => {
  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem("authenticateUser");
    return user ? JSON.parse(user) : null;
  });

  console.log(authUser);

  const [shoppingCart, setShoppingCart] = useState(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const AuthRedirector = () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (authUser) {
        navigate("/");
      } else {
        navigate("/signIn");
      }
    }, [authUser]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            }
          />
          <Route
            path="/signIn"
            element={<SignInPage setAuthUser={setAuthUser} authUser={authUser}/>}
          />
          <Route
            path="/signUp"
            element={<SignUpPage setAuthUser={setAuthUser} authUser={authUser}/>}
          />
          <Route path="*" element={<AuthRedirector />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
