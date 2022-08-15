import React from 'react'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className='bg-gray-700 text-white px-4 py-2 rounded-md text-[15px] '>Create Todo</button>
  )
}

export default Button