import React from 'react'

const Card = ({children}) => {
  return (
    <div className='m-4 md:w-3/6 lg:w-[40%] md:mx-auto border border-slate-700 rounded-md p-4'>
        {children}
    </div>
  )
}

export default Card
