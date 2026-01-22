import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Button() {
  const [count, setcount] = useState(false);

  function Handleclick() {
    setcount(!count);
  }

  if (count) {
    return (
      <>
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="flex h-10 w-20 items-center justify-start rounded-xl bg-neutral-100">
            <div
              className="ml-3 h-5 w-5 cursor-pointer rounded-md bg-green-400 translate-x-7  rotate-90 transition-all duration-400"
              onClick={Handleclick}
            ></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex h-10 w-20 items-center justify-start rounded-xl bg-neutral-100">
          <div
            className="ml-3 h-5 w-5 cursor-pointer rounded-md bg-green-400 transition-all duration-100"
            onClick={Handleclick}
          ></div>
        </div>
      </div>
    </>
  );
}
