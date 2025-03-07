import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../Components/common/InputBox";
import SquareButton from "../Components/common/SquareButton";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../firebase";

export default function SignInPage({ setAuthUser, authUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser) {
      navigate("/");
    } else {
      navigate("/signIn");
    }
  }, [authUser]);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = getAuth(app);

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log("Sign In Successfully");
      localStorage.setItem("authenticateUser", JSON.stringify(user));
      setAuthUser(localStorage.getItem("authenticateUser"));
      navigate("/");
    } catch (e) {
      console.error(e);
      alert("Invalid Credential");
      setEmail("");
      setPass("");
    }
  };

  const hendleResetPass = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Email sended successfully");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center p-12 gap-2">
      <div className="w-[11rem]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazonLogo"
        />
      </div>
      <div className="border-black border-2 w-[23rem] flex flex-col justify-center items-center gap-3 p-5">
        <div className="flex justify-start w-full pl-5 font-semibold text-3xl">
          <h1>Sign In</h1>
        </div>
        <div className=" flex flex-col gap-3">
          <InputBox
            label="E-mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <InputBox
            label="Password"
            type="password"
            value={pass}
            setValue={setPass}
          />
          <SquareButton
            text="Sign-In"
            col="bg-yellow-500"
            onClick={handleSignIn}
          />
        </div>
        <div>
          <p className="text-center text-sm p-2">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <SquareButton
            text="Create your Amazon Account"
            col="bg-slate-200"
            onClick={() => {
              navigate("/signUp");
            }}
          />
          <SquareButton
            text="Reset Password"
            col="bg-yellow-500"
            onClick={hendleResetPass}
          />
        </div>
      </div>
    </div>
  );
}
