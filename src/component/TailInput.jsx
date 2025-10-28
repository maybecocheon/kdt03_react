import React from 'react'

export default function TailInput({type, name, ref}) {
  return (
    <div>
      <input type={type} name={name} ref={ref} className="w-full h-full bg-white border-1 border-black focus:outline-blue-600"/>
    </div>
  )
}
