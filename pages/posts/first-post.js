import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticProps() {
    const post = await getPost('first-post');
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
                <title>{`${post.title} - Aniket's Blog`}</title>
            </Head>
            <h1>{post.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: post.body }}>
            </article>
        </>
    );
}

export default FirstPostPage;

