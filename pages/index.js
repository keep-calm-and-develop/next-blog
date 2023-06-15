import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";


export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: {
            posts,
        },
    };
}

function HomePage({ posts }) {
    return (
        <>
            <Head>
                <title>Aniket's Blog</title>
            </Head>
            <h1>Aniket's Blog</h1>
            <ul>
                {
                    posts.map(({ slug, title }) => (
                        <li key={slug}>
                            <Link href={`/posts/${slug}`}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default HomePage;
