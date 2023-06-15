import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getPost(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf-8');
    const { data: { date, title }, content } = matter(source);
    const body = marked(content, {
        mangle: false,
        headerIds: false,
    });
    return { title, date, body };
}

export async function getPosts() {
    const slugs = await getSlugs();
    const posts = [];
    for (const slug of slugs) {
        const { title, date } = await getPost(slug);
        posts.push({ slug, title, date });
    }
    return posts;
}

export async function getSlugs() {
    const files = await readdir('content/posts');
    return files.filter(file => file.endsWith('.md'))
        .map(file => file.slice(0, -3));
}
