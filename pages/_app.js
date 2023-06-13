import NavBar from "../components/NavBar";

function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default App;
