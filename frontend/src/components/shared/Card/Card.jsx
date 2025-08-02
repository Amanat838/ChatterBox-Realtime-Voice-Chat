import React from 'react'



const Card = ({title, icon: Icon, children}) => {
  return (
    <div className='w-[555px] max-w-[90%] min-h-[300px] bg-[#2b2a2a] p-[30px] rounded-xl flex flex-col items-center gap-8'>
        <div className='flex gap-2 items-center'>
            <Icon size={30} color='#ac89e8'/>
            <h2 className='font-bold text-xl'>{title}</h2>
        </div>
        {children}
        
    </div>
  )
}

export default Card
