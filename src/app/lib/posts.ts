// src/app/lib/posts.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post, PostMeta } from '../types/post';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  
  const meta: PostMeta = {
    title: data.title,
    date: data.date,
    description: data.description,
    image: data.image,
    // quaisquer outros campos do front matter
  };

  return {
    meta,
    content,
    slug: realSlug,
  };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  
  // Ordenar posts por data (mais recente primeiro)
  return posts.sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
}
