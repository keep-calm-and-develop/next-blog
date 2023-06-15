import Head from "next/head";
import Link from "next/link";

function HomePage() {
    return (
        <>
            <Head>
                <title>Aniket's Blog</title>
            </Head>
            <h1>Aniket's Blog</h1>
            <ul>
                <li>
                    <Link href='/posts/first-post'>First Post</Link>
                </li>
            </ul>
        </>
    );
}

export default HomePage;
