import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = userAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          alt="/"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/ea4e3067-609b-4f51-a5ae-88663802fbfc/NG-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </div>
                <button className="w-full bg-red-600 py-3 rounded font-bold my-6">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600 ">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-7">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to={"/login"}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
