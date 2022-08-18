
import Button from './components/Button';
import ThemeChanger from "./components/ThemeChanger";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeChanger/>
      <Button />
    </ThemeProvider>
  );
}

export default App;
