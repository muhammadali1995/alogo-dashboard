import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import logo from './../assets/logo.png'
import lines from './../assets/lines.png'
import { useState } from 'react'

export default function Dashboard() {
  const { theme } = useContext(ThemeContext)

  const [active, setActive] = useState('Dashboard')

  const navigations = [
    { name: 'Dashboard', icon: 'fas fa-house' },
    { name: 'Users', icon: 'fas fa-users' },
    { name: 'Badges', icon: 'fas fa-house' },
    { name: 'Rewards', icon: 'fas fa-house' },
    { name: 'Activities', icon: 'fas fa-house' },
    { name: 'Tickets', icon: 'fas fa-house' },
    { name: 'Systems', icon: 'fas fa-house' },
    { name: 'Settings', icon: 'fas fa-house' }
  ]

  return (
    <div className='shadow-sidebar pt-1 -mt-1 pr-10'>
      <img src={logo} alt="logo" className='mx-7' />
      <div className='mt-20 space-y-5'>
        {navigations.map((link, index) => {
          return <div key={index} className='flex items-center cursor-pointer' onClick={() => setActive(link.name)}>
            <div className={`${theme} w-2 rounded-r h-8 ` + (link.name == active ? 'bg-custom-100 shadow-custom-200' : '')}></div>
            <i className={`ml-6 mr-4 ${theme} ${link.icon} ` + (link.name == active ? 'text-custom-100' : 'text-dark')}></i>
            <h3 className={'text-sm ' + (link.name == active ? 'font-bold' : 'font-normal')}>{link.name}</h3>
          </div>
        })}
      </div>
      <img className='mt-20 w-10' src={lines} alt="lines" />
    </div >
  )
}