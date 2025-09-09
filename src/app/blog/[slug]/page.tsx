// app/blog/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import { getPostSlugs, getPostBySlug, markdownToHtml } from '../../lib/posts';
import { Post } from '../../types/post';
import styles from './Post.module.css';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Gerar parâmetros estáticos para todos os posts
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map(slug => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post: Post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <article className={styles.post}>
      <h1 className={styles.postTitle}>{post.meta.title}</h1>
      <p className={styles.postDate}>{post.meta.date}</p>
      {post.meta.image && (
        <img src={post.meta.image} alt={post.meta.title} className={styles.postImage} />
      )}
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
