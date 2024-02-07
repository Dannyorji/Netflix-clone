import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white ">
        <img
          className="w-full h-[400px] object-cover"
          alt="/"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/ea4e3067-609b-4f51-a5ae-88663802fbfc/NG-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"> </div>
        <div className="absolute top-[20%] p-4 md:p-8  ">
          <h1 className="text-3xl md:text-5xl font-bold ">My Shows </h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
