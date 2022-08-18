import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext"

export default function Button() {
    const {theme} = useContext(ThemeContext)
    return (
        <button className={`${theme} rounded-md  text-custom-400 p-3 border`}>
            children
        </button>
    )
}