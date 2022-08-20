import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './../../context/ThemeContext'
import arrow from './../../assets/arrow.svg'
import lines from './../../assets/lines.png'

export default function Card({ card }) {
  const { btnImg, name, title, date, user } = card
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme} card bg-white shadow-card rounded-xl p-4 hover:bg-custom-100 hover:-translate-y-3 text-dark hover:text-custom-300 relative cursor-pointer`}>
      <img src={lines} alt="lines" className='absolute w-auto -top-4 right-8 rotate-90 h-11' />
      <div className={`rounded card-btn text-white shadow-card-button w-10 h-10 flex items-center justify-center ${theme} bg-custom-100`}>
        {btnImg}
      </div>
      <h3 className={`${theme} text-custom-100 mt-2 font-bold text-2xl leading-7 card-title`}>{name}</h3>
      <h4 className={`${theme} mt-1.5 font-bold text-18  leading-5`}>{title}</h4>
      <div className='flex items-start text-green font-normal text-xs mt-1'>
        <img src={arrow} alt="arrow" />
        <div>
          <p className='ml-1 user leading-3'>{date}</p>
          <p className={`${theme} xl:ml-1 text-dark text-10 mt-1 -ml-3 subtitle`}>{user}</p>
        </div>
      </div>
    </div>
  )
}