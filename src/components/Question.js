import React from "react";
import { useState } from "react";

export default function Question(props) {
  const [question, setQuestion] = useState(" ");
  const [index, setIndex] = useState(0);
  const [button, setButton] = useState("Start");
  const [inputVisible, setInputVisible] = useState(false); // Track input visibility

  const questionarray = [
    "What is your genre?",
    "What is the tone of the story?",
    "What is the setting of the story?",
    "How many characters in the story?",
    "What is the target audience?",
    "Who is the protagonist?",
    "Describe the protagonist?",
  ];

  function handleQuestionSubmit() {
    if (!inputVisible) {
      // Show input if it's currently hidden
      setInputVisible(true);
    }

    setQuestion(questionarray[index]);
    setIndex(index + 1);
    setButton("Next");

    if (index > questionarray.length - 1) {
      setQuestion("Done");
      setButton(" ");
      {
        props.setChange(true);
      }
    }
  }

  return (
    <main className="mt-6 w-5/6 rounded-md m-auto h-64 text-emerald-200 text-center text-xl merriweather-regular">
      <div className="w-full mt-16 text-3xl">{question}</div>
      <div className="w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your answer"
          className={`text-center text-black rounded-md w-2/6 p-2 my-8 ${
            inputVisible ? "" : "hidden"
          }`}
        />
        <button
          className="border-2 border-white rounded-md bg-inherit py-2 px-4 mt-8 mb-4 mx-4 text-white"
          onClick={handleQuestionSubmit}
        >
          {button}
        </button>
      </div>
    </main>
  );
}
