import React, { useState, createContext } from 'react';
import Content from './Content';
import '../../App.css';

// 1. Create context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext();
// console.log(ThemeContext);

function UseContext() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Content theme={theme} />
            </div>
        </ThemeContext.Provider>
    );
}

export default UseContext;
