import React, { createContext, useContext } from 'react';
import useLocalStorage from 'use-local-storage';


const THEME_CONTEXT = createContext();

// eslint-disable-next-line react/prop-types
const ThemeContext = ({ children }) => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }


    const value = {
        name: "dark",
        theme,
        setTheme,
        switchTheme
    }
    return (
        <div>
            <THEME_CONTEXT.Provider value={value}>{children}</THEME_CONTEXT.Provider>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(THEME_CONTEXT);
    return context;
}

export default ThemeContext;