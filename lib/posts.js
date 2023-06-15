import { readFile } from 'fs/promises';
import { marked } from 'marked';

export async function getPost(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf-8');
    const html = marked(source, {
        mangle: false,
        headerIds: false,
    });
    return {
        body: html,
    };
}
