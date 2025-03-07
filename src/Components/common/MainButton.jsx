import React from 'react'

export default function MainButton({title,onClick}) {
  return (
    <div>
        <button onClick={onClick} className='rounded-md bg-red-700 hover:bg-red-800 px-4 py-2 font-semibold text-white'>{title}</button>
    </div>
  )
}
