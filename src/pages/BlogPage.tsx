import React, { useState, useMemo } from 'react';
import { BlogPost, NavigateFn } from '../types';
import {
  Search, BookOpen, Clock, Calendar, ArrowRight, ArrowLeft,
  Tag, Share2, Check, Lock, PlusCircle, Sparkles, Filter, ChevronRight
} from 'lucide-react';

interface BlogPageProps {
  posts: BlogPost[];
  onNavigate: NavigateFn;
  onSelectPost?: (slug: string) => void;
  isAdminLoggedIn?: boolean;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  posts,
  onNavigate,
  isAdminLoggedIn
}) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);

  // Filter only published posts for the public view (unless admin)
  const publishedPosts = useMemo(() => {
    return posts.filter(p => p.published !== false);
  }, [posts]);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add('All');
    publishedPosts.forEach(p => set.add(p.category));
    return Array.from(set);
  }, [publishedPosts]);

  // Filtered posts based on category and search
  const filteredPosts = useMemo(() => {
    return publishedPosts.filter(post => {
      const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchSearch = searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [publishedPosts, selectedCategory, searchQuery]);

  const activePost = useMemo(() => {
    if (!selectedPostId) return null;
    return posts.find(p => p.id === selectedPostId || p.slug === selectedPostId) || null;
  }, [selectedPostId, posts]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // If viewing a single post
  if (activePost) {
    return (
      <div className="py-12 lg:py-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button & Admin tools */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
            <button
              id="blog-back-btn"
              onClick={() => {
                setSelectedPostId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Research & Articles</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>

              {isAdminLoggedIn && (
                <button
                  onClick={() => onNavigate('admin')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 hover:bg-blue-100 transition"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Edit in Admin</span>
                </button>
              )}
            </div>
          </div>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200">
                {activePost.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {activePost.date}
              </span>
              <span className="text-xs text-slate-400 font-mono">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {activePost.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed border-l-2 border-blue-500 pl-4 py-1 italic bg-blue-50/60 rounded-r-lg">
              {activePost.excerpt}
            </p>

            {/* Author bar */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm">
                {activePost.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{activePost.author}</div>
                <div className="text-xs text-slate-500">{activePost.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Featured Cover Image */}
          {activePost.coverImage && (
            <div className="rounded-xl overflow-hidden border border-slate-200 mb-10 shadow-lg bg-slate-100">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full max-h-[480px] object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Body Content */}
          <div className="prose max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            {activePost.content.split('\n\n').map((paragraph, idx) => {
              // Markdown style headers
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 pt-6 pb-2 border-b border-slate-200">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-8 pb-3 border-b border-slate-200">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={idx} className="space-y-2 my-4 list-disc pl-6 text-slate-700">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item.replace(/^- /, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-slate-700 whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Additional Gallery Pictures if available */}
          {activePost.additionalImages && activePost.additionalImages.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-4">
                Institutional Charts & Desk Visuals
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activePost.additionalImages.map((imgUrl, imgIdx) => (
                  <div key={imgIdx} className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={imgUrl}
                      alt={`Article reference ${imgIdx + 1}`}
                      className="w-full h-52 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {activePost.tags && activePost.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-2">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {activePost.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 text-xs font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Next Steps Mentorship Banner */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-blue-200 text-center space-y-4 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Ready to Master These Strategies 1-on-1?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Don't leave risk management to trial and error. Learn institutional order flow, delta hedging, and risk mechanics under direct personal mentorship.
            </p>
            <div className="pt-2">
              <button
                id="blog-post-apply-cta"
                onClick={() => onNavigate('mentorship', 'application-form-section')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] transition"
              >
                <span>Apply for 1-to-1 Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Blog Grid / List View
  return (
    <div className="py-12 lg:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Title */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Institutional Research & Strategy Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Academy Insights & Strategy Blog
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Direct commentary on market mechanics, delta hedging, institutional order book analysis, and risk models written by veteran floor traders.
          </p>
        </div>

        {/* Admin Bar Notification if logged in */}
        {isAdminLoggedIn && (
          <div className="mb-8 p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-blue-700">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>You are logged in as <strong>Administrator</strong>. You can publish new blogs or edit existing articles.</span>
            </div>
            <button
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition whitespace-nowrap shadow"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create / Manage Blogs</span>
            </button>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, strategies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Blog Post List / Cards */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-300 rounded-2xl p-8 bg-slate-50">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
              Try adjusting your category filter or search keywords.
            </p>
            {isAdminLoggedIn && (
              <button
                onClick={() => onNavigate('admin')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Create First Post in Admin</span>
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => {
              const isFirstFeatured = idx === 0 && selectedCategory === 'All' && !searchQuery;

              return (
                <article
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  onClick={() => {
                    setSelectedPostId(post.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`group relative rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-lg cursor-pointer ${
                    isFirstFeatured ? 'md:col-span-2 lg:col-span-3 md:flex-row' : ''
                  }`}
                >
                  {/* Card Image */}
                  <div className={`overflow-hidden bg-slate-100 relative ${
                    isFirstFeatured ? 'md:w-1/2 h-64 md:h-auto min-h-[280px]' : 'h-52 w-full'
                  }`}>
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-mono text-xs">
                        Hedge Trading Academy
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-white/90 text-blue-600 border border-blue-200 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`p-6 flex flex-col justify-between flex-1 ${
                    isFirstFeatured ? 'md:w-1/2 md:p-8' : ''
                  }`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className={`font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug ${
                        isFirstFeatured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                      }`}>
                        {post.title}
                      </h2>

                      <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold border border-blue-200">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-slate-600 font-medium">{post.author}</span>
                      </div>

                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Footer info & Admin login reminder */}
        <div className="mt-20 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          <span>Are you the website administrator? </span>
          <button
            onClick={() => onNavigate('admin')}
            className="text-blue-600 hover:underline font-semibold"
          >
            Log into Admin Portal
          </button>
          <span> to publish research notes, upload chart images, and manage blogs.</span>
        </div>

      </div>
    </div>
  );
};
