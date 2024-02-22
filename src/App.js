import "./App.css";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Question from "./components/Question";
import Content from "./components/Content";
import Options from "./components/Options";

function App() {
  const [change, setChange] = useState(false);
  return (
    <main className="h-screen bg-black py-8">
      <section className="flex flex-col justify-evenly items-center">
        <h1 className="text-white w-fit text-5xl poppins-thin">Oohbaby.ai</h1>

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
