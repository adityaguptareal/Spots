import React from 'react'

function Bullets({children}) {
  return (
    <div className=' cursor-pointer flex justify-center font-Inter items-center rounded-full bg-orange-400 text-center h-fit px-2 py-[5px] text-white text-sm'>{children}</div>
  )
}

export default Bullets