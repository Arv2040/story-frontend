import React from "react";
import { useState } from "react";

export default function Question(props) {
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
    setQuestion(questionarray[index]);
    setIndex(index + 1);
    setButton("NEXT");

    if (index > questionarray.length - 1) {
      setQuestion("done");
      setButton(" ");
      {
        props.setChange(true);
      }
    }
  }
  const [question, setQuestion] = useState(" ");
  const [index, setIndex] = useState(0);
  const [button, setButton] = useState("START");

  return (
    <main className="mt-6 w-5/6 rounded-md m-auto h-64 text-white text-2xl">
      <div className="w-full text-center text-white mt-16">{question}</div>
      <div className="w-full text-center text-white">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your prompt here"
          className="text-center lora-regular rounded-md w-2/6 p-2 my-8"
        />
        <button
          className="border-2 border-white rounded-md bg-inherit py-2 px-4 mt-8 mb-4 mx-4 text-xl"
          onClick={handleQuestionSubmit}
        >
          {button}
        </button>
      </div>
    </main>
  );
}
