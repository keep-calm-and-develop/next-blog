
function DarkTheme() {
    return (
        <style jsx global>{`
            /* Dark Theme */
            :root {
                --background-color: #333;
                --text-color: rgb(229, 229, 229);
                --link-color: rgb(234, 207, 3);
            }
        `}</style>
    );
}

export default DarkTheme;
