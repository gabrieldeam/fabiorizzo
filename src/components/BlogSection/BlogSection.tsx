import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../app/lib/posts';
import { Post } from '../../app/types/post';
import styles from './BlogSection.module.css';

function BlogSection() {
  const posts: Post[] = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <a href='/blog'className={styles.contactButton}>Ver blog</a>
      </div>
      <div className={styles.postsContainer}>
        {posts.map(post => (
          <div key={post.slug} className={styles.postCard}>
            {post.meta.image && (
              <img src={post.meta.image} alt={post.meta.title} className={styles.postImage} />
            )}
            <div className={styles.postContent}>
              <p className={styles.postDate}>{post.meta.date}</p>
              <h3 className={styles.postTitle}>{post.meta.title}</h3>
              <p className={styles.postDescription}>{post.meta.description}</p>
            </div>
            <Link href={`/blog/${post.slug}`} className={styles.postLink} aria-label={`Leia mais sobre ${post.meta.title}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
