import './App.css';
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <main className ="h-screen bg-black">
      <h1 className="text-white m-auto w-fit text-5xl font-serif ">Story.ai</h1>
      <div className="prompt absolute bottom-5 left-[50%] translate-x-[-50%]">
        <input type="text" name="" id="" placeholder = "Enter your prompt here" className = "text-center rounded-md w-96 p-2"/>
      </div>
    
    </main>
  );
}

export default App;
