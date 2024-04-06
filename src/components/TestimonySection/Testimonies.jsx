import React, { useState } from "react";
import arrowRight from "../../assets/icons/arrow-right-solid.svg";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";

const user = [
  {
    name: "John Doe",
    testimonial:
      "Medium has been a game-changer for me as a content creator. Its user-friendly interface and wide reach have helped me connect with a diverse audience. Whether I'm sharing personal anecdotes or professional insights, Medium provides the perfect platform to showcase my work.",
    avatar: img1,
  },
  {
    name: "Michael R.",
    testimonial:
      "As a freelance writer, Medium has been invaluable for expanding my portfolio and attracting new clients. The platform's built-in audience and seamless publishing process make it easy to share my expertise and gain recognition in my niche. Plus, the feedback and engagement from readers have been incredibly rewarding.",
    avatar: img2,
  },
  {
    name: "John M.",
    testimonial:
      "Medium has revolutionized the way I share my thoughts and ideas online. The platform's emphasis on quality content and thoughtful discussions has encouraged me to elevate my writing and engage with fellow writers and readers in meaningful conversations. It's more than just a blogging platform; it's a supportive community.",
    avatar: img3,
  },
  {
    name: "Chris S.",
    testimonial:
      "Medium has been an invaluable resource for supplementing my education and exploring topics beyond the classroom. I appreciate the platform's accessibility and the wealth of knowledge shared by experts in various fields. From career advice to scientific discoveries, Medium serves as a gateway to endless learning opportunities.",
    avatar: img4,
  },
  {
    name: "Danielle L.",
    testimonial:
      "Medium has become my go-to resource for staying informed and inspired. Whether I'm seeking industry insights, personal development tips, or thought-provoking essays, Medium never disappoints. Its curated collections and recommended reads feature a diverse range of perspectives that challenge and enlighten me.",
    avatar: img5,
  },
];

const Testimony = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % user.length);
  };

  return (
    <div className="flex flex-col items-center text-center w-full py-8 sm:py-8 sm:mt-10 sm:px-0 px-1">
      <h1 className="text-4xl sm:text-6xl font-[Mignon-Regular] font-medium ">
        Why I'm a Medium Member...
      </h1>
      <div className="flex flex-col sm:flex-row items-center my-4">
        <div className="flex flex-row items-center justify-evenly mx-10">
          <img
            src={user[currentTestimonial].avatar}
            alt={user[currentTestimonial].name}
            className="w-36 h-36 rounded-full mx-auto"
          />
          <div className="h-36 w-20 rounded-[50%] bg-pink-500 mx-3"></div>
          <div className="h-[136px] w-8 rounded-[50%] bg-green-600"></div>
        </div>
        <div className="flex flex-col w-full sm:w-[600px] text-center sm:text-left ">
          <p className="text-base sm:text-xl my-3">
            {`"${user[currentTestimonial].testimonial}"`}
          </p>
          <h2 className="text-xl font-semibold">
            {user[currentTestimonial].name}
          </h2>
        </div>
      </div>
      <button
        className="text-black font-semibold py-2 mt-2 rounded-full text-center px-4 sm:px-10"
        onClick={handleNextTestimonial}
      >
        <img src={arrowRight} alt="arrow-right" style={{ height: "30px" }} />
      </button>
    </div>
  );
};

export default Testimony;
