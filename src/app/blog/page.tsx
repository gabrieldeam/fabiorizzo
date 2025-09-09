// app/blog/page.tsx

import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import { Post } from '../types/post';
import styles from './Blog.module.css';

export const metadata = {
  title: 'Blog',
};

export default function Blog() {
  const posts: Post[] = getAllPosts();

  return (
    <section className={styles.blogSection}>
      <h1>Blog</h1>
      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.slug} className={styles.postItem}>
            <Link href={`/blog/${post.slug}`} className={styles.postLink} aria-label={`Leia mais sobre ${post.meta.title}`}>
              {post.meta.image && (
                <img src={post.meta.image} alt={post.meta.title} className={styles.postImage} />
              )}
              <div className={styles.postContent}>
                <span className={styles.postDate}>{post.meta.date}</span>
                <h2 className={styles.postTitle}>{post.meta.title}</h2>
                <p className={styles.postDescription}>{post.meta.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
