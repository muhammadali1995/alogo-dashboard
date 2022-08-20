
import ThemeProvider from "./context/ThemeContext";
import Dashboard from './components/dashboard/Dashboard'
import Main from './components/Main/Main'
import ThemeChanger from './components/Main/ThemeChanger'

function App() {
  return (
    <ThemeProvider>
      <ThemeChanger />
      <div className="lg:flex max-w-[1440px] mx-auto">
        <Dashboard />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
