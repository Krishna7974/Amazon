import React from "react";

export default function SquareButton({ text, col,onClick }) {
  return (
    <div>
      <button
        className={`w-[18rem] p-2 border-2 border-slate-600 rounded-sm ${col}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
