import infinity from "../../assets/icons/infinity-solid.svg";
import headphone from "../../assets/icons/headphones-solid.svg";
import { Divider } from "@mui/material";
import React from "react";

const Feature = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center text-center bg-[#4478fe] w-full text-white py-8">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-8 flex-grow">
        <h1 className="text-5xl font-[Mignon-Regular] font-medium ">
          Get unlimited access to every story.
        </h1>
        <div className="flex justify-center w-full">
          <img src={infinity} alt="infinity" style={{ width: "150px" }} />
        </div>
        <p className="text-xl my-3">
          Read any article in our entire library across all your devices - with
          no paywalls, story limits ads.
        </p>
      </div>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          border: "1px solid white",
          height: { sm: "1px", lg: "500px" },
          width: { sm: "100%", lg: "1px" },
        }}
      />
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-8 flex-grow">
        <h1 className="text-5xl font-[Mignon-Regular] font-medium ">
          Support the voices you want to hear more from.
        </h1>
        <div className="flex justify-center w-full">
          <img src={headphone} alt="headphone" style={{ width: "150px" }} />
        </div>
        <p className="text-xl my-3">
          A portion of your memberships will directly support the writers and
          thinkers you read the most.
        </p>
      </div>
    </div>
  );
};

export default Feature;
