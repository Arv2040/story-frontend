import React from "react";
import Button from "./Button";

export default function Options() {
  return (
    <>
      <div className="text-white w-full border-2 border-white mt-4 grid grid-cols-2 gap-x-16 gap-y-4">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </>
  );
}
