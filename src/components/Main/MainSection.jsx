import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import datepicker from './../../assets/datepicker.svg'
import Card from './Card'
import plus from './../../assets/plus.svg'
import UserCard from './UserCard'
import Badge from './Badge'
import { badges, cards, users } from './../data/data'

export default function MainSection() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='md:w-3/5 py-4 border-r-0.2 border-r-gray'>
      <div className='border-b-0.2 border-b-gray sm:px-11 px-4'>
        <h1 className='text-2xl font-bold text-dark'>Welcome Back, Mohammed!</h1>
        <p className='mt-1 font-normal text-sm text-dark'>Here is how your users are performing recently</p>
        <div className='flex items-center sm:justify-end'>
          <p className='text-xs font-normal'>Data shown from</p>
          <div className={`${theme} text-custom-100 ml-2 rounded bg-white shadow-date flex items-center p-2`} >
            <p className='font-bold text-xs'>October 10 - November 10, 2020</p>
            <img src={datepicker} alt="datepicker" className='ml-2 text-white' />
          </div>
        </div>
        <div className='grid xl:grid-cols-3 grid-cols-2 mt-5 gap-y-5 gap-x-4 pb-8'>
          {cards.map((card, index) => {
            return <Card key={index} card={card} />
          })}
          <div className='bg-white shadow-card rounded-xl flex items-center justify-center flex-col'>
            <img src={plus} alt="plus" />
            <h5 className='mt-2.5 font-normal text-18 text-[#87949B]'>Add New Card</h5>
          </div>
        </div>
      </div>
      <div className='sm:px-11 px-4 border-b-0.2 border-b-gray pb-8'>
        <div className='flex items-center mt-8 justify-between'>
          <h3 className='font-bold text-dark'>Most Active Users</h3>
          <a href="/" className={`${theme} text-custom-100 underline font-bold text-xs leading-3`}>View All Users</a>
        </div>
        <div className='grid xl:grid-cols-2 grid-cols-1 mt-4 gap-y-5 gap-x-4'>
          {users.map((user, index) => {
            return <UserCard user={user} key={index} />
          })}
        </div>
      </div>
      <div className='sm:px-11 px-4'>
        <div className='flex items-center mt-8 justify-between'>
          <h3 className='font-bold text-dark'>Top Earned Badges</h3>
          <a href="/" className={`${theme} text-custom-100 underline font-bold text-xs leading-3`}>View All Badges</a>
        </div>
        <div className='grid xl:grid-cols-3 grid-cols-2 gap-4 pt-4'>
          {badges.map((badge, index) => {
            return <Badge badge={badge} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}