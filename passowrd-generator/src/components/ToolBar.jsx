import React from 'react'

const ToolBar = ({length,setLength,num,setNum,spChar,setSPChar}) => {
  return (
    <div className='flex my-3'>
        <input type='range' max={16} min={6} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer ml-1'/>
        <label className='text-white px-2'>{length}</label>
        {/* sliding bar ends number checkbox begins*/ }
        <input type='checkbox' className='cursor-pointer ml-3' value={num} onChange={()=>{setNum(!num)}}/>
        <label className='text-white px-2'>Allow Numbers</label>
        {/* For special character*/}
        <input type='checkbox' className='cursor-pointer ml-3' value={spChar} onChange={()=>{setSPChar(!spChar)}}/>
        <label className='text-white px-2'>Allow Special character</label>
    </div>
  )
}

export default ToolBar