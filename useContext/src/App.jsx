import { useState , createContext } from 'react'
import ThemeSwitcher from './ThemeSwitcher';

const ThemeContext = createContext();
function App() {
  const [theme , setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div style = {{
        backgroundColor: theme === "light"?"white":"black",
        color: theme === "light"?"black":"white",
        height: "100vh",
      }}>
        <h1>Theme : {theme}</h1>
      <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  )
}
export {ThemeContext};
export default App;
