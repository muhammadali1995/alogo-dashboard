import { createContext, useState } from 'react';
import Button from './components/Button';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('theme-racing-green');

  const defaultContext = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={defaultContext}>
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
