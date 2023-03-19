import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-gray-200 flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 mx-auto hover:shadow-xl rounded-lg">
      <Card review={reviews[index]} />

      <div className="  text-3xl mt-11 gap-3 text-green-400 font-bold mx-auto ">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-green-500"
        >
          <FiChevronLeft></FiChevronLeft>
        </button>

        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-green-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-7">
        <button
          onClick={surpriseHandler}
          className="bg-green-400 hover:bg-green-500 transition-all duration-200 cursor-pointer
         px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
