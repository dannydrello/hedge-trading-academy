import { BlogPost } from '../types';

export const INITIAL_BLOG_POSTS: BlogPost[] = [];

export const STORAGE_KEY_BLOGS = 'hta_blog_posts';
export const STORAGE_KEY_ADMIN_AUTH = 'hta_admin_authenticated';

export function getStoredBlogPosts(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BLOGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(INITIAL_BLOG_POSTS));
      return INITIAL_BLOG_POSTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse blog posts from storage', e);
    return INITIAL_BLOG_POSTS;
  }
}

export function saveBlogPosts(posts: BlogPost[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(posts));
  } catch (e) {
    console.error('Failed to save blog posts', e);
  }
}
