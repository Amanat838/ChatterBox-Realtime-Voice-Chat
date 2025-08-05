import React from 'react'

const TextInput = (props) => {
  return (
    <div>
        <input className='bg-[#323232] border-none py-[10px] px-[20px] outline-none w-[290px] text-white text-[18px] rounded-xl' type="text" {...props}/>
    </div>
  )
}

export default TextInput