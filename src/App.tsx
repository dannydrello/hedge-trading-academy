import React, { useState, useEffect } from 'react';
import { PageId, BlogPost } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ApplyPage } from './pages/ApplyPage';
import { BlogPage } from './pages/BlogPage';
import { AdminPage } from './pages/AdminPage';
import { EventPage } from './pages/EventPage';
import { ContactPage } from './pages/ContactPage';
import { getStoredBlogPosts, saveBlogPosts } from './data/blogData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('hta_admin_auth') === 'true';
  });

  // Initialize blog posts from localStorage or defaults
  useEffect(() => {
    const initialPosts = getStoredBlogPosts();
    setBlogPosts(initialPosts);
  }, []);

  // Update admin status in localStorage
  const handleSetAdminStatus = (status: boolean) => {
    setIsAdminLoggedIn(status);
    localStorage.setItem('hta_admin_auth', status ? 'true' : 'false');
  };

  // Handler to persist blog posts
  const handleSaveBlogPosts = (updated: BlogPost[]) => {
    setBlogPosts(updated);
    saveBlogPosts(updated);
  };

  // Support URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
      } else if (hash === 'mentorship' || hash === 'apply' || hash === 'apply-for-mentorship') {
        setCurrentPage('mentorship');
      } else if (hash === 'event' || hash === 'events') {
        setCurrentPage('events');
      } else if (hash === 'blog' || hash === 'blogs') {
        setCurrentPage('blog');
      } else if (hash === 'contact' || hash === 'contact-us') {
        setCurrentPage('contact');
      } else if (hash === 'admin' || hash === 'admin-portal') {
        setCurrentPage('admin');
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, scrollTargetId?: string) => {
    setCurrentPage(page);
    window.location.hash = page;

    if (scrollTargetId) {
      // Wait a couple of frames so the destination page has mounted before scrolling to it.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation with exact user lineup */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'mentorship' && <ApplyPage onNavigate={navigateTo} />}
        {currentPage === 'events' && <EventPage onNavigate={navigateTo} />}
        {currentPage === 'blog' && (
          <BlogPage 
            posts={blogPosts} 
            onNavigate={navigateTo} 
            isAdminLoggedIn={isAdminLoggedIn} 
          />
        )}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'admin' && (
          <AdminPage 
            posts={blogPosts} 
            onSavePosts={handleSaveBlogPosts} 
            onNavigate={navigateTo}
            isAdminLoggedIn={isAdminLoggedIn}
            setIsAdminLoggedIn={handleSetAdminStatus}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
