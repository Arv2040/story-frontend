import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";
import "tailwindcss/tailwind.css";
import Question from "./components/Question";
import Options from "./components/Options";
import InputBox from "./components/InputBox";
import Prompt from "./components/Prompt";

function App() {
  const [change, setChange] = useState(false);
<<<<<<< HEAD

=======
  const[text,setText] = useState("");
 
>>>>>>> fc9d4d87bed6a2bb62348006fb5ed27fd85734a0
  return (
    <main className="h-screen bg-black py-8">
      <section className="flex flex-col justify-evenly items-center">
        <h1 className="text-white w-auto text-5xl merriweather-light">
          StoryForge.ai
          <Cursor />
        </h1>

        {/* <Content /> */}

        {change === false ? (
          <Question  text= {text} setText= {setText} change={change} setChange={setChange} />
        ) : (
<<<<<<< HEAD
          <>
            <Prompt />
            <div className="">
              <Options />
            </div>
          </>
=======
          <Content text = {text} setText = {setText}/>
>>>>>>> fc9d4d87bed6a2bb62348006fb5ed27fd85734a0
        )}
      </section>
    </main>
  );
}

export default App;
