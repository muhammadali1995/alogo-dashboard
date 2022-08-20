import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function Link({ link, active, setActive }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className='flex items-center cursor-pointer' onClick={() => setActive(link.name)}>
            <div className={`${theme} w-2 rounded-r h-8 ` + (link.name === active ? 'bg-custom-100 shadow-custom-200' : '')}></div>
            <i className={`ml-6 mr-4 ${theme} ${link.icon} ` + (link.name === active ? 'text-custom-100' : 'text-dark')}></i>
            <h3 className={'text-sm ' + (link.name === active ? 'font-bold' : 'font-normal')}>{link.name}</h3>
        </div>
    )
}