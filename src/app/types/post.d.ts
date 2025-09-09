// types/post.d.ts

export interface PostMeta {
    title: string;
    date: string;
    description: string;
    image?: ImagePath;
  }
  
  export interface Post {
    meta: PostMeta;
    content: string;
    slug: string;
  }
  