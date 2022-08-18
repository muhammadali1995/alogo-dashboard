
import ThemeProvider from "./context/ThemeContext";
import Dashboard from './components/Dashboard'
import Main from './components/Main'

function App() {
  return (
    <ThemeProvider>
      <div className="flex">
        <Dashboard />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
