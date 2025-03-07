import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
export default function Header({
  shoppingCart,
  setSearchItemText,
  authUser,
  setAuthUser,
}) {
  const navigate = useNavigate();
  return (
    <header className="bg-black flex py-4 px-8 gap-8 h-[4.1rem] w-full">
      <Link to="/">
        <div>
          <img
            className="w-[7rem] h-[2.3rem]"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt="amazonLogo"
          />
        </div>
      </Link>

      <div className="flex items-center">
        <input
          className="w-[58rem] h-[2.2rem] px-2 py-0.7 border-none rounded-s-[0.2rem] outline-none"
          type="search"
          onChange={(e) => setSearchItemText(e.target.value)}
        />
        <div className="bg-[#fec76f] h-[2.2rem] w-[2.2rem] flex items-center justify-center rounded-e-[0.2rem]">
          <IoSearchSharp color="black" size="1.5rem" />
        </div>
      </div>
      <div className="text-white w-[5rem]">
        <p className="text-xs">Hello</p>
        <h4
          className="text-sm font-bold cursor-pointer"
          onClick={() => {
            if (authUser) {
              localStorage.removeItem("authenticateUser");
              setAuthUser(null);
            } else {
              navigate("/singIn");
            }
          }}
        >
          {authUser?.user?.email.split("@")[0] ?? "Sign In"}
        </h4>
      </div>
      <div className="text-white w-[5rem]">
        <p className="text-xs">Returns</p>
        <h4 className="text-sm font-bold">& Orders</h4>
      </div>
      <div className="text-white w-[2rem]">
        <p className="text-xs">Your</p>
        <h4 className="text-sm font-bold">Primes</h4>
      </div>

      <div
        onClick={() => {
          if (authUser) {
            navigate("/cart");
          } else {
            navigate("/singIn");
          }
        }}
        className={`${
          authUser
            ? "h-[1.6rem] px-2 py-0.7 flex gap-1 text-white items-center cursor-pointer"
            : "hidden"
        }`}
      >
        <AiFillShopping color="white" size="1.5rem" />
        <p className="font-semibold text-xl">{shoppingCart?.length}</p>
      </div>
    </header>
  );
}
