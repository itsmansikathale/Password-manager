import React from "react";

const Manager = () => {
  return (
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="mx-auto bg-slate-50 h-20 container px-55">
        <h1>Password Manager</h1>
        <p>Your Own Password Manager</p>
        <div className="text-white flex flex-col p-4">
          <input className="rounded-4xl" type="text" />

          <div className="flex rounded-3xl">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
