import React from 'react'
import RegisteredUserChart from '../Charts/RegisteredUserChart'
import UserStatistics from "../Charts/UserStatistics"
import { cities } from './../../data/data'
import Card from './Card'

export default function Sidebar() {
  return (
    <div className='md:w-2/5 sm:py-8 py-4 relative'>
      <h1 className='text-2xl font-bold text-dark'>General Statistics</h1>
      <div className="relative">
        <RegisteredUserChart header='Total New Registered Users' className="mt-5 px-4 sm:px-8 min-w-[28rem] h-48" />
      </div>
      <div className="relative mt-16 border-t-0.2 border-gray">
        <UserStatistics header='Users Statistics' className="mt-5 px-4 sm:px-8 min-w-[28rem] h-52" />
      </div>
      <div className="mt-24 border-t-0.2 border-gray px-4 sm:px-8">
        <h2 className="text-base font-bold text-dark mb-4 ml-2 pt-8">Active Cities</h2>
        <div className='grid grid-cols-3 gap-2'>
          {cities.map((city, index) => {
            return <Card key={index} city={city} />
          })}
        </div>
      </div>
    </div>
  )
}