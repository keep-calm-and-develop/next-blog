import { useCallback, useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
    if (typeof localStorage !== 'undefined') {
        const initialValue = localStorage.getItem('isDarkMode');
        return initialValue ? JSON.parse(initialValue) : false;
    }
    return false;
}

function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(loadDarkMode);

    const onToggleMode = useCallback(() => {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    }, [isDarkMode]);

    const text = isDarkMode ? 'Light Mode' : 'Dark Mode';
    return (
        <>
            <button onClick={onToggleMode} suppressHydrationWarning>
                {text}
            </button>
            <style jsx>{`
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: inherit;
                }
            `}
            </style>
            {isDarkMode && <DarkTheme/>}
        </>
    );
}

export default ThemeSwitch;