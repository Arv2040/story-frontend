import React from "react";
import Button from "./Button";

export default function Options() {
  return (
    <>
      <div className="text-white w-full place-items-center mt-8 grid grid-cols-2 gap-x-32 gap-y-4">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </>
  );
}
