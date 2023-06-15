import Head from "next/head";
import NavBar from "../components/NavBar";
import '../styles/globals.css';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel='icon' href='/icons/favicon.ico' />
            </Head>
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
