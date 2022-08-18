import React, { useContext } from 'react'
import { ThemeContext } from './../App'

export default function Button() {
    const { theme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <button className={"rounded-md bg-secondary text-text-base px-3 py-1 " + theme}>
            children
        </button>
    )
}