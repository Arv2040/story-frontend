import React from "react";

export default function AnswerBox({ customStyles }) {
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter a custom prompt instead."
      className={`text-center text-black rounded-md w-2/6 p-2 my-8 ${customStyles}`}
    />
  );
}
