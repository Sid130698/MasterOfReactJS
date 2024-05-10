import React from 'react'
import ColorButton from './ColorButton'

const FootingBar = ({setColor}) => {
  return (
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <ColorButton buttonName="red" setColor={setColor}/>
            <ColorButton buttonName="blue" setColor={setColor}/>
            <ColorButton buttonName="green" setColor={setColor}/>
            <ColorButton buttonName="grey" setColor={setColor}/>
            <ColorButton buttonName="black" setColor={setColor}/>
            <ColorButton buttonName="brown" setColor={setColor}/>
        </div>
    </div>
  )
}

export default FootingBar