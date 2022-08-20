import { createContext, React, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const localTheme = JSON.parse(localStorage.getItem('theme'))
    const storedColour = localTheme ? localTheme : 'theme-outrageous-orange';
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