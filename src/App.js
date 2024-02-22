import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";
import "tailwindcss/tailwind.css";
import Question from "./components/Question";
import Content from "./components/Content";
import Options from "./components/Options";

function App() {
  const [change, setChange] = useState(false);

  return (
    <main className="h-screen bg-black py-8">
      <section className="flex flex-col justify-evenly items-center">
        <h1 className="text-white w-auto text-5xl merriweather-light">
          StoryForge.ai
          <Cursor />
        </h1>

        {/* <Content /> */}

        {change === false ? (
          <Question change={change} setChange={setChange} />
        ) : (
          <Content />
        )}
      </section>
    </main>
  );
}

export default App;
