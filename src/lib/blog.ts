export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

const posts: BlogPost[] = [];

export function registerPost(post: BlogPost) {
  posts.push(post);
}

export function getAllPosts(): BlogPost[] {
  // Ensure posts are loaded
  loadPosts();
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  loadPosts();
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  loadPosts();
  return posts.map((p) => p.slug);
}

let loaded = false;
function loadPosts() {
  if (loaded) return;
  loaded = true;
  // Side-effect imports that call registerPost
  require("./posts/post-1");
  require("./posts/post-2");
  require("./posts/post-3");
  require("./posts/post-4");
  require("./posts/post-5");
  require("./posts/post-6");
  require("./posts/post-7");
  require("./posts/post-8");
  require("./posts/post-9");
  require("./posts/post-10");
}
