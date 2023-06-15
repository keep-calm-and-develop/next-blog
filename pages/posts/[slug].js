import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths({ }) {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug }}) {
    const post = await getPost(slug);
    return {
        props: {
            post
        },
    };
}

function PostPage({ post }) {
    return (
        <>
            <Head>
                <title>{`${post.title} - Aniket's Blog`}</title>
            </Head>
            <p>Created on {post.date}</p>
            <h1>{post.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: post.body }}>
            </article>
        </>
    );
}

export default PostPage;

