import React from 'react'
import MyChart from './MyChart'

export default function Sidebar() {
  return (
    <div className='md:w-2/5 sm:p-8 p-4'>
      <h1 className='text-2xl font-bold text-dark'>General Statistics</h1>
      <MyChart />
    </div>
  )
}