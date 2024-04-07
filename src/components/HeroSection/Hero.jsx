import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center text-center bg-[#4478fe] w-full text-white border-b-2 py-8 sm:py-32 mt-10 sm:mt-0"
      data-color="#4478fe"
    >
      <h1 className="text-4xl sm:text-9xl font-[Mignon-Regular] font-medium ">
        Fuel Great Thinking.
      </h1>
      <p className="text-center text-lg sm:text-xl my-3">
        Become a Medium member to enjoy unlimited access and
        <br className="hidden sm:block" /> directly support the writers you read
        most.
      </p>
      <button className="bg-white text-black font-semibold py-2 mt-2 rounded-full text-center px-4 sm:px-10">
        Get Unlimited Access
      </button>
    </div>
  );
};

export default Hero;
