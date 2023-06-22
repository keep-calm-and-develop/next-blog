import { useCallback, useState } from "react";
import DarkTheme from "./DarkTheme";

function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onToggleMode = useCallback(() => {
        setIsDarkMode(state => !state)
    }, []);
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode';
    return (
        <>
            <button onClick={onToggleMode}>
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