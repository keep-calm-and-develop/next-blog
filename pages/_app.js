import NavBar from "../components/NavBar";
import '../styles/globals.css';

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
