import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeChanger() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (event) => {
        setTheme(event.target.value);
    }

    return (
        <div>ThemeChanger
            <select onChange={changeTheme}>
                <option value="theme-dark">Dark</option>
                <option value="theme-monzo">monzo</option>
                <option value="theme-racing-green">racing-green</option>
            </select>

        </div>
    )
}
