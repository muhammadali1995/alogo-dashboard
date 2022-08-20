import React from 'react'
import logo from './../../assets/logo.png'
import lines from './../../assets/lines.png'
import { useState } from 'react'
import Link from './Link'
import { navigations } from './../data/data'
import menu from './../../assets/arrow.svg'

export default function Dashboard() {
  const [active, setActive] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className='shadow-sidebar pt-1 flex items-center justify-between lg:block -mt-1 sm:pr-10 pr-4'>
        <img src={logo} alt="logo" className='sm:mx-7' />
        <div className='mt-20 hidden lg:block space-y-5'>
          {navigations.map((link, index) => {
            return <Link key={index} link={link} active={active} setActive={setActive} />
          })}
        </div>
        <img className='mt-20 w-10 hidden lg:block' src={lines} alt="lines" />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menu} alt="menu" />
        </button>
      </div>
      <div className={`lg:hidden bg-white absolute z-50 top-16 shadow-xl flex-col items-center justify-center left-0 w-fill ` + (menuOpen ? 'flex' : '!hidden')}>
        {navigations.map((link, index) => {
          return <Link key={index} link={link} active={active} setActive={setActive} />
        })}
      </div>
    </>
  )
}