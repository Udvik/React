import {useContext} from 'react';
import {ThemeContext} from './App';

function ThemeChanger(){
    const {theme, setTheme}= useContext(ThemeContext);

    return (
        <button onClick={
            () => {
                setTheme((theme == "light")?"dark":"light")
            }
        }>Toggle Theme</button>
    );
}

export default ThemeChanger;