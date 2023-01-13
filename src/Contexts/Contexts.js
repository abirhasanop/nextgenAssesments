import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const Context = createContext()
const Contexts = ({ children }) => {

    // Dark mode starts
    const [dark, setDark] = useState(false)

    const handleTheme = () => {
        setDark(!dark)
        localStorage.setItem("dark-mode", !dark)
    }

    useEffect(() => {
        if (dark) {
            document.querySelector("html").setAttribute("data-theme", "night")
        } else {
            document.querySelector("html").setAttribute("data-theme", "light")
        }
    }, [dark])

    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem("dark-mode"))
        console.log(localDark);
        setDark(localDark)
    }, [])

    // dark mode ends

    const appInfo = {
        dark,
        handleTheme
    }

    return (
        <div>
            <Context.Provider value={appInfo}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default Contexts;