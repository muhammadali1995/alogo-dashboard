import React from 'react'
import lines from './../../assets/lines.png'

export default function Badge({ badge }) {
  const { name, earn, lastEarn, color, bgColor, btnColor } = badge
  return (
    <div className={`rounded-xl flex items-center justify-center py-7 ${bgColor} relative cursor-pointer`}>
      <div className={`w-11 h-11 rounded mr-2 ${btnColor}`}></div>
      <div>
        <h4 className='font-bold text-18 text-dark'>{name}</h4>
        <h6 className='font-normal text-xs text-dark'>{earn}</h6>
        <p className={`text-10 font-normal ${color}`}>{lastEarn}</p>
      </div>
      <img src={lines} alt="lines" className='absolute h-9 -rotate-90 -bottom-3 right-8' />
    </div>
  )
}