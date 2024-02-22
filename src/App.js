import "./App.css";
import React,{useState} from "react";
import "tailwindcss/tailwind.css";
import Prompt from "./components/Prompt";
import Options from "./components/Options";
import Question from "./components/Question";
import InputBox from "./components/InputBox";

function App() {
  const[change,setChange] = useState(false)
  return (
    <main className="h-screen bg-black py-8">
      <section className="flex flex-col justify-evenly items-center">
        <h1 className="text-white w-fit text-5xl poppins-thin">Story.ai</h1>

        <Prompt />
       
        {(change === false)?( <Question change = {change} setChange= {setChange}/>):(<Options/>)}

        <div className="">
          <InputBox />
        </div>
      </section>
    </main>
  );
}

export default App;
