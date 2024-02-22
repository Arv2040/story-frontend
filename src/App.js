import "./App.css";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Question from "./components/Question";
import Content from "./components/Content";
import Options from "./components/Options";

function App() {
  const [change, setChange] = useState(false);
  const[text,setText] = useState("");
 
  return (
    <main className="h-screen bg-black py-8">
      <section className="flex flex-col justify-evenly items-center">
        <h1 className="text-white w-fit text-5xl merriweather-light">
          Story.ai
        </h1>

        {/* <Content /> */}

        {change === false ? (
          <Question  text= {text} setText= {setText} change={change} setChange={setChange} />
        ) : (
          <Content text = {text} setText = {setText}/>
        )}
      </section>
    </main>
  );
}

export default App;
