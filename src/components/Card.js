import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative">
      <div className=" absolute top-[-7rem] z-[10] mx-auto">
        <img
          className=" aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          alt=""
          src={review.image}
        />
        <div className="w-[140px] h-[140px] bg-green-400 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      <div className="text-center mt-7">
        <p className=" tracking-wider font-bold text-2xl capitalize">{review.name}</p>
        <p className="font-bold text-lg capitalize opacity-20">
          {review.job}
        </p>
      </div>

   

      <div className="text-violet-4000 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      <div className="text-center text-slate-500 ">{review.text}</div>

      <div className="text-violet-4000 mx-auto mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>

    </div>
  );
};

export default Card;
