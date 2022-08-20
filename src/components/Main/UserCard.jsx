import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import userImg from './../../assets/user.png'
import dot from './../../assets/centered-dot.svg'

export default function UserCard({ user }) {
    const { name, pt, badge, reward } = user
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme} rounded-xl flex items-center bg-white shadow-card p-3 border-l-8 border-l-custom-100 cursor-pointer`}>
            <img src={userImg} alt="user" className='rounded-full w-8 h-8 object-cover' />
            <div className='ml-2'>
                <h5 className='font-bold text-sm'>{name}</h5>
                <div className={`mt-2 font-bold text-10 ${theme} text-custom-100 flex items-center`}>
                    <p> {pt} </p>
                    <img src={dot} alt="dot" className='mx-1' />
                    <p> {badge} </p>
                    <img src={dot} alt="dot" className='mx-1' />
                    <p> {reward} </p>
                </div>
            </div>
        </div>
    )
}