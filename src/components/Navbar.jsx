import React from 'react'
import search from './../assets/search.svg'
import dot from './../assets/dot.svg'
import mail from './../assets/mail.svg'
import notification from './../assets/notification.svg'
import user from './../assets/user.svg'
import { useContext } from 'react'
import { ThemeContext } from './../context/ThemeContext'

export default function Navbar() {
    const { theme } = useContext(ThemeContext)
    return (
        <form className='flex items-center w-full justify-between py-8 px-5'>
            <div className='flex items-center w-fit'>
                <img src={search} alt="search" />
                <input
                    type="text"
                    placeholder='Search for users or rewards'
                    className='ml-4 w-full font-normal text-sm placeholder:text-sm placeholder:font-normal outline-none'
                />
            </div>
            <div className='flex items-center'>
                <div className='relative'>
                    <img src={dot} alt="dot" className='absolute -top-1 -right-1' />
                    <img src={mail} alt="mail" />
                </div>
                <div className='relative ml-4'>
                    <img src={dot} alt="dot" className='absolute -top-1 -right-1' />
                    <img src={notification} alt="notification" />
                </div>
                <div className='flex items-center'>
                    <img src={user} alt="user" className='rounded-full ml-5' />
                    <h5 className='text-sm font-bold ml-2'>Mohammed Abdullah</h5>
                    <i className={`${theme} fa-solid fa-sort-down text-custom-100 -mt-2 ml-2`}></i>
                </div>
            </div>
        </form>
    )
}