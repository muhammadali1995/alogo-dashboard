import { createContext, React, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const storedColour = (localStorage.getItem('theme')) ? (localStorage.getItem('theme')) : 'theme-orange';
    const [theme, setTheme] = useState(storedColour);

    const defaultContext = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={defaultContext}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;