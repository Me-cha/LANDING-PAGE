import React from "react";
import Header from "../components/Header/Header";

const LandingPage = () => {
  return (
    <div className=" flex flex-col justify-top items-center mt-16">
      <Header />
      <div className="flex flex-col items-center text-center px-15 justify-center">
        <h1 className="text-4xl font-bold">Fuel Great Thinking</h1>
        <p className="mt-4 text-center">
          Become a Medium member to enjoy unlimited access and directly support
          the writers you read most.
        </p>
        <button className="bg-black text-white p-2 rounded-md mt-4 text-center">
          Get Unlimited Access
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
