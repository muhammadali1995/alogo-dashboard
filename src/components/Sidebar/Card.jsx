import React from 'react'

export default function Card({ city }) {
    const { name, users, bgColor, img } = city
    return (
        <div className={`${bgColor} rounded-xl h-52 overflow-hidden flex flex-col items-center justify-between`}>
            <div className='2xl:p-6 p-4 '>
                <h2 className='text-dark font-bold'>{name}</h2>
                <p className='mt-1 font-normal text-xs text-dark'>{users}</p>
            </div>
            <img src={img} alt="not found" />
        </div>
    )
}