import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeChanger() {
    const { setTheme } = useContext(ThemeContext);
    const changeTheme = (event) => {
        localStorage.setItem('theme', JSON.stringify(event.target.value))
        setTheme(event.target.value);
    }

    return (
        <div className='absolute top-5 left-1/2 '>
            <select onChange={changeTheme} className='border border-black outline-none rounded-2xl shadow-xl'>
                <option value="theme-outrageous-orange">Orange</option>
                <option value="theme-carrot-orange">Carrot orange</option>
                <option value="theme-pompadour">Pompadour</option>
                <option value="theme-tangaroa">Tangaroa</option>
            </select>
        </div>
    )
}
