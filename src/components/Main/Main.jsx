import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
import Sidebar from './../Sidebar/Sidebar'

export default function Main() {
  return (
    <div className='w-full border-r-0.2 border-r-gray'>
      <Navbar />
      <div className='md:flex'>
        <MainSection />
        <Sidebar />
      </div>
    </div>
  )
}