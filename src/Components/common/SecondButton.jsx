import React from 'react'

export default function SecondButton({title,onClick}) {
  return (
    <div>
      <button onClick={onClick} className="bg-yellow-400 hover:bg-yellow-500 rounded-[2rem] px-[2rem] py-[0.4rem] text-sm my-2 font-medium">
        {title}
      </button>
    </div>
  )
}
