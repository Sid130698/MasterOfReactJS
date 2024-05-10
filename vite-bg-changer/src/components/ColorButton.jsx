import React from 'react'

const ColorButton = ({buttonName,setColor}) => {
  return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:buttonName}} onClick={()=>setColor(buttonName)}>
        {buttonName}
    </button>
  )
}

export default ColorButton