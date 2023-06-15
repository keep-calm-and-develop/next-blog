import Head from "next/head";
import { readFile } from 'fs/promises';

export async function getStaticProps() {
    const data = await readFile('content/posts/first-post.json', 'utf-8');
    const post = JSON.parse(data);
    return {
        props: {
            post
        },
    };
}

function FirstPostPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title} - Aniket's Blog</title>
            </Head>
            <h1>{post.title}</h1>
            <section>
                <p>
                    {post.body}
                </p>
            </section>
        </>
    );
}

export default FirstPostPage;

