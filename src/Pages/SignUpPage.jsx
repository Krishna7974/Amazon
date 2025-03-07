import React, { useState ,useEffect} from "react";
import InputBox from "../Components/common/InputBox";
import SquareButton from "../Components/common/SquareButton";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUpPage({ setAuthUser, authUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser) {
      navigate("/");
    } else {
      navigate("/signUp");
    }
  }, [authUser]);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = getAuth(app);

  const handleSingUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      console.log("Sign Up Successfully");
      localStorage.setItem("authenticateUser", JSON.stringify(user));
      setAuthUser(localStorage.getItem("authenticateUser"));
      navigate("/");
    } catch (e) {
      console.error(e);
      alert(e);
      setEmail("");
      setPass("");
    }
  };

  const provider = new GoogleAuthProvider();

  const handleSignUpWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      localStorage.setItem("authenticateUser", JSON.stringify(user));
      setAuthUser(localStorage.getItem("authenticateUser"));
      navigate("/");
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
          <h1>Sign Up</h1>
        </div>
        <div className=" flex flex-col gap-3">
          {/* <InputBox id="useName" label="Username" type="text" /> */}
          <InputBox
            id="email"
            label="E-mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <InputBox
            id="pass"
            label="Password"
            type="password"
            value={pass}
            setValue={setPass}
          />
          <SquareButton
            text="Sign-Up"
            col="bg-yellow-500"
            onClick={handleSingUp}
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
            text="Already have account? SignIn"
            col="bg-slate-200"
            onClick={() => navigate("/signIn")}
          />
          <SquareButton
            text="Sing Up with Google"
            col="bg-slate-200"
            onClick={handleSignUpWithGoogle}
          />
        </div>
      </div>
    </div>
  );
}
