import React from "react";

export default function InputBox({ id,value, label, type, setValue }) {
  return (
    <div className="flex flex-col gap-2 font-semibold">
      <label htmlFor={id}>{label}</label>
      <input
        className="w-[18rem] p-2 outline-none border-slate-400 border-2 rounded-sm"
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}
