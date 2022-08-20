import React from 'react'
import { cities } from '../data/data'
import Card from './Card'
import MyChart from './MyChart'

export default function Sidebar() {
  return (
    <div className='md:w-2/5 sm:p-8 p-4'>
      <h1 className='text-2xl font-bold text-dark'>General Statistics</h1>
      <MyChart />
      <div className='grid grid-cols-3 gap-2'>
        {cities.map((city, index) => {
          console.log(city)
          return <Card key={index} city={city} />
        })}
      </div>
    </div>
  )
}