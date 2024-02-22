import React from 'react'
import { useState } from 'react'

export default function Question() {
    const questionarray = [
        "what is your genre",
        "what is the tone of the story",
        "what is the setting of the story",
        "how many characters in the story",
       
        "what is the target audience",
        "who is the protagonist",
        "describe the protagonist"
    ]
  
    function handleQuestionSubmit(){
        setQuestion(questionarray[index]);
        setIndex(index+1);
        setButton("NEXT");
        if(index>(questionarray.length-1)){
            setQuestion('done');
            setButton(" ");
        }
    }
    const[question,setQuestion] = useState(" ");
    const[index,setIndex] = useState(0);
    const[button,setButton] = useState("START")
    
  return (
    <main className = "w-full border-2 text-white">
         <div className = "font-mono w-full text-white">
        {question}
        </div>
        <button className = "border-2 border-white bg-inherit py-2 px-4" onClick = {handleQuestionSubmit}>
          {button}
        </button>
    </main>
   
  )
}
