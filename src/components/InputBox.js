import React,{useState} from "react";

<<<<<<< HEAD
export default function InputBox({ customStyles }) {
=======
export default function InputBox(props) {
 
  
  const handleInputChange=(e)=>{
    props.setText(e.target.value);
    
  }
  
 
>>>>>>> fc9d4d87bed6a2bb62348006fb5ed27fd85734a0
  return (

    <input
      type="text"
      name=""
      id=""
      placeholder="Enter a custom prompt instead."
<<<<<<< HEAD
      className={
        "text-center rounded-md w-5/6 p-2 mb-8 absolute bottom-4 left-[50%] translate-x-[-50%]"
      }
=======
      className="text-center rounded-md w-5/6 p-2 mb-8 absolute bottom-4 left-[50%] translate-x-[-50%]"
      value = {props.text} onChange = {handleInputChange}
>>>>>>> fc9d4d87bed6a2bb62348006fb5ed27fd85734a0
    />
  );
}
