import "./App.css";
import "tailwindcss/tailwind.css";
import Prompt from "./components/Prompt";
import Options from "./components/Options";
import Question from "./components/Question";

function App() {
  return (
    <main className="h-screen bg-black py-8">
      <section className="flex flex-col justify-evenly items-center">
        <h1 className="text-white w-fit text-5xl poppins-thin">Story.ai</h1>

        <Prompt />
        {/* <Options/> */}
        {/* <Question/> */}

        <div className="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your prompt here"
            className="text-center rounded-md w-96 p-2 absolute bottom-4 left-[50%] translate-x-[-50%]"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
