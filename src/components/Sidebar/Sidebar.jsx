import React from 'react'
import RegisteredUserChart from '../Charts/RegisteredUserChart'
import UserStatistics from "../Charts/UserStatistics"

export default function Sidebar() {
  return (
    <div className='md:w-2/5 sm:p-8 p-4 relative'>
      <h1 className='text-2xl font-bold text-dark'>General Statistics</h1>
      <div className="relative">
        <RegisteredUserChart header='Total New Registered Users' className="mt-5 min-w-[28rem] h-48" />
      </div>
      <div className="relative mt-16">
        <UserStatistics header='Users Statistics' className="mt-5 min-w-[28rem] h-52"/>
      </div>
    </div>
  )
}