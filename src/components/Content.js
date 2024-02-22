import React from "react";
import Prompt from "./Prompt";
import Options from "./Options";
import InputBox from "./InputBox";

export default function Content() {
  return (
    <>
      <Prompt />
      <div className="">
        <Options />
        <InputBox />
      </div>
    </>
  );
}
