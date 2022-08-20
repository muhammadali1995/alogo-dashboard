import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import datepicker from './../../assets/datepicker.svg'
import Card from './Card'
import plus from './../../assets/plus.svg'
import UserCard from './UserCard'
import Badge from './Badge'
import { badges, cards, users } from './../../data/data'

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
            <svg className={`ml-2 ${theme} text-custom-100`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4531 0.9375H9.375V0.375C9.375 0.167906 9.20712 0 9 0C8.79288 0 8.625 0.167906 8.625 0.375V0.9375H3.375V0.375C3.375 0.167906 3.20712 0 3 0C2.79288 0 2.625 0.167906 2.625 0.375V0.9375H1.54688C0.693914 0.9375 0 1.63141 0 2.48438V10.4531C0 11.3061 0.693914 12 1.54688 12H10.4531C11.3061 12 12 11.3061 12 10.4531V2.48438C12 1.63141 11.3061 0.9375 10.4531 0.9375ZM1.54688 1.6875H2.625V2.0625C2.625 2.26959 2.79288 2.4375 3 2.4375C3.20712 2.4375 3.375 2.26959 3.375 2.0625V1.6875H8.625V2.0625C8.625 2.26959 8.79288 2.4375 9 2.4375C9.20712 2.4375 9.375 2.26959 9.375 2.0625V1.6875H10.4531C10.8925 1.6875 11.25 2.04497 11.25 2.48438V3.375H0.75V2.48438C0.75 2.04497 1.10747 1.6875 1.54688 1.6875ZM10.4531 11.25H1.54688C1.10747 11.25 0.75 10.8925 0.75 10.4531V4.125H11.25V10.4531C11.25 10.8925 10.8925 11.25 10.4531 11.25Z" fill="currentColor" />
            </svg>
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