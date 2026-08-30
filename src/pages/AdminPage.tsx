import React, { useState, useRef } from 'react';
import { BlogPost, NavigateFn } from '../types';
import {
  Lock, KeyRound, Plus, Trash2, Edit3, Eye, CheckCircle2,
  AlertCircle, Image, Upload, RefreshCw, ArrowLeft, BookOpen,
  LogOut, Shield, Check, FileText, Sparkles
} from 'lucide-react';

interface AdminPageProps {
  posts: BlogPost[];
  onSavePosts: (posts: BlogPost[]) => void;
  onNavigate: NavigateFn;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (status: boolean) => void;
}

const STOCK_CHART_PRESETS = [
  {
    name: 'Institutional Trading Floor',
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Order Flow & Footprint Matrix',
    url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Algorithmic Financial Charts',
    url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Risk Desk & Portfolio Analytics',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
  }
];

export const AdminPage: React.FC<AdminPageProps> = ({
  posts,
  onSavePosts,
  onNavigate,
  isAdminLoggedIn,
  setIsAdminLoggedIn,
}) => {
  // Login form state
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Editor mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [notification, setNotification] = useState<string | null>(null);

  // Post form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<BlogPost['category']>('Hedging Strategy');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [author, setAuthor] = useState('Lead Mentor');
  const [authorRole, setAuthorRole] = useState('Founder & Pit Desk Trader');
  const [readTime, setReadTime] = useState('5 min read');
  const [tagsInput, setTagsInput] = useState('Hedging, Risk Management');
  const [published, setPublished] = useState(true);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const galleryFileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingPostId) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setSlug(generatedSlug);
    }
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === 'hedgeadmin2026') {
      setIsAdminLoggedIn(true);
      setLoginError('');
      showNotification('Successfully authenticated as Administrator');
    } else {
      setLoginError('Invalid access key.');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setIsEditing(false);
    setPasswordInput('');
  };

  // Open Blank Post Creator
  const handleCreateNew = () => {
    setEditingPostId(null);
    setTitle('');
    setSlug('');
    setCategory('Hedging Strategy');
    setExcerpt('');
    setContent(`### Market Structure & Execution Context\n\nWrite your institutional analysis here...\n\n### Practical Hedging Playbook\n\n- Step 1: Identify inventory imbalance\n- Step 2: Lock delta risk with options/futures\n- Step 3: Unwind at extreme volume deviations\n\n### Risk Summary\n\nAlways maintain non-negotiable risk limits before initiating capital.`);
    setCoverImage(STOCK_CHART_PRESETS[0].url);
    setAdditionalImages([]);
    setAuthor('Lead Mentor');
    setAuthorRole('Founder & Pit Desk Trader');
    setReadTime('5 min read');
    setTagsInput('Hedging, Order Flow, Risk');
    setPublished(true);
    setIsEditing(true);
    setActiveTab('editor');
  };

  // Edit Existing Post
  const handleEditPost = (post: BlogPost) => {
    setEditingPostId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCoverImage(post.coverImage || '');
    setAdditionalImages(post.additionalImages || []);
    setAuthor(post.author);
    setAuthorRole(post.authorRole);
    setReadTime(post.readTime);
    setTagsInput(post.tags.join(', '));
    setPublished(post.published ?? true);
    setIsEditing(true);
    setActiveTab('editor');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  };

  // Delete Post
  const handleDeletePost = (id: string) => {
    if (window.confirm('Are you sure you want to permanently delete this blog post?')) {
      const updated = posts.filter(p => p.id !== id);
      onSavePosts(updated);
      showNotification('Blog post deleted successfully.');
    }
  };

  // Toggle Published Status
  const handleTogglePublish = (id: string) => {
    const updated = posts.map(p => {
      if (p.id === id) {
        return { ...p, published: !p.published };
      }
      return p;
    });
    onSavePosts(updated);
    showNotification('Article visibility updated.');
  };

  // Handle Cover File Upload (base64)
  const handleCoverFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
        showNotification('Cover image uploaded successfully.');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Additional Gallery Image Upload
  const handleGalleryFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdditionalImages(prev => [...prev, reader.result as string]);
        showNotification('Gallery image added.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImageUrl = () => {
    if (newImageUrl.trim()) {
      setAdditionalImages(prev => [...prev, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setAdditionalImages(prev => prev.filter((_, i) => i !== index));
  };

  // Save Blog Post (Create or Update)
  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Please provide a Title for the blog.');
      return;
    }
    if (!excerpt.trim()) {
      alert('Please provide a short Excerpt/Subtitle.');
      return;
    }
    if (!content.trim()) {
      alert('Please provide the main blog content/description.');
      return;
    }

    const todayFormatted = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const parsedTags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const postPayload: BlogPost = {
      id: editingPostId || `post-${Date.now()}`,
      title: title.trim(),
      slug: slug.trim() || `article-${Date.now()}`,
      category,
      excerpt: excerpt.trim(),
      content: content.trim(),
      coverImage: coverImage.trim() || STOCK_CHART_PRESETS[0].url,
      additionalImages,
      author: author.trim() || 'Lead Mentor',
      authorRole: authorRole.trim() || 'Hedge Trading Academy Desk',
      date: todayFormatted,
      readTime: readTime.trim() || '5 min read',
      tags: parsedTags.length > 0 ? parsedTags : ['Hedging', 'Trading Strategy'],
      published
    };

    let updatedPosts: BlogPost[];
    if (editingPostId) {
      updatedPosts = posts.map(p => p.id === editingPostId ? postPayload : p);
      showNotification('Blog article updated and live on website.');
    } else {
      updatedPosts = [postPayload, ...posts];
      showNotification('New blog article published to Academy Blog!');
    }

    onSavePosts(updatedPosts);
    setIsEditing(false);
  };

  // 1. If not logged in, show clean Institutional Admin Login
  if (!isAdminLoggedIn) {
    return (
      <div className="py-20 bg-black min-h-[85vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full p-8 sm:p-10 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">Academy Admin Portal</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Access the administrative desk to create, edit, and publish blog articles & market research.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider text-slate-300">
                Administrator Access Key
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setLoginError('');
                  }}
                  placeholder="Enter administrator password..."
                  className="w-full pl-9 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  autoFocus
                />
              </div>
            </div>

            {loginError && (
              <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
            >
              Sign In to Admin Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. Logged In Admin Dashboard
  return (
    <div className="py-10 lg:py-16 bg-black min-h-screen text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Notification Toast */}
        {notification && (
          <div className="fixed top-24 right-4 z-50 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm font-semibold">{notification}</span>
          </div>
        )}

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] uppercase bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                Admin Mode Active
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400">Hedge Trading Academy CMS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Blog & Research Content Manager
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition"
            >
              <Eye className="w-4 h-4" />
              <span>View Public Blog</span>
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-950/20 border border-red-900/40 text-xs font-semibold text-red-400 hover:bg-red-950/40 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Action / Create Bar */}
        {!isEditing && (
          <div className="my-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white">Manage Academy Blog Posts</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                You currently have <strong>{posts.length}</strong> total articles stored in database.
              </p>
            </div>
            <button
              onClick={handleCreateNew}
              id="admin-create-post-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Blog Post</span>
            </button>
          </div>
        )}

        {/* 3. Post Editor Form */}
        {isEditing ? (
          <div className="my-6 rounded-2xl bg-slate-950/60 border border-slate-800 overflow-hidden">
            {/* Editor Header */}
            <div className="p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {editingPostId ? 'Edit Blog Article' : 'Compose New Institutional Article'}
                  </h2>
                  <span className="text-xs text-slate-400">
                    Changes will reflect instantly in the public Blog tab.
                  </span>
                </div>
              </div>

              {/* Tabs Switcher */}
              <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-slate-700">
                <button
                  type="button"
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    activeTab === 'editor' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Editor</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    activeTab === 'preview' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </button>
              </div>
            </div>

            {activeTab === 'editor' ? (
              <form onSubmit={handleSavePost} className="p-6 sm:p-8 space-y-6">

                {/* Row 1: Title & Category */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Blog Title *
                    </label>
                    <input
                      type="text"
                      id="admin-blog-title-input"
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g., Delta Hedging Strategies for High Volatility Sessions"
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-base font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as BlogPost['category'])}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                    >
                      <option value="Hedging Strategy">Hedging Strategy</option>
                      <option value="Order Flow">Order Flow</option>
                      <option value="Risk Management">Risk Management</option>
                      <option value="Market Psychology">Market Psychology</option>
                      <option value="Institutional Insights">Institutional Insights</option>
                    </select>
                  </div>
                </div>

                {/* Excerpt / Subtitle */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-slate-300">
                    Excerpt / Brief Subtitle (Appears in Card Preview) *
                  </label>
                  <textarea
                    rows={2}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Short 1-2 sentence executive summary of this strategy or research note..."
                    required
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                {/* Cover Image Selection & Upload */}
                <div className="space-y-3 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="block text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Image className="w-4 h-4 text-blue-400" />
                      <span>Featured Cover Image</span>
                    </label>
                    <span className="text-xs text-slate-500">Provide direct URL, upload image, or pick a trading preset</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="url"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleCoverFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload File</span>
                    </button>
                  </div>

                  {/* Preset quick buttons */}
                  <div className="pt-2">
                    <span className="text-[11px] text-slate-500 mr-2">Or select preset:</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {STOCK_CHART_PRESETS.map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setCoverImage(preset.url)}
                          className={`text-xs px-2.5 py-1 rounded border transition ${
                            coverImage === preset.url
                              ? 'bg-blue-950/40 border-blue-500/50 text-blue-300'
                              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {preset.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Preview */}
                  {coverImage && (
                    <div className="mt-3 relative w-full h-44 rounded-lg overflow-hidden border border-slate-700 bg-slate-900">
                      <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 rounded text-[10px] text-white">
                        Active Cover Image
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Content (Description) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Main Blog Description & Content *
                    </label>
                    <span className="text-[11px] text-slate-500">
                      Supports Markdown formatting (### Heading, - list items, **bold**)
                    </span>
                  </div>
                  <textarea
                    id="admin-blog-content-input"
                    rows={12}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write the institutional analysis, strategy breakdown, mathematical formulas, and step-by-step risk protocols..."
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 font-sans leading-relaxed placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                {/* Additional Images / Chart Gallery Section */}
                <div className="space-y-3 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Image className="w-4 h-4 text-blue-400" />
                      <span>Additional Pictures / Chart Breakdown Gallery (Optional)</span>
                    </label>
                    <span className="text-xs text-slate-500">{additionalImages.length} images added</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="url"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Add an image URL (e.g. chart screenshot)..."
                      className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddImageUrl}
                      className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition"
                    >
                      Add URL
                    </button>
                    <input
                      type="file"
                      ref={galleryFileInputRef}
                      onChange={handleGalleryFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => galleryFileInputRef.current?.click()}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Picture</span>
                    </button>
                  </div>

                  {/* Gallery Thumbnails */}
                  {additionalImages.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                      {additionalImages.map((imgUrl, i) => (
                        <div key={i} className="relative group rounded-lg overflow-hidden border border-slate-700 h-28 bg-slate-900">
                          <img src={imgUrl} alt={`Attached ${i + 1}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(i)}
                            className="absolute top-1 right-1 p-1 bg-red-600/90 text-white rounded hover:bg-red-500 transition opacity-90 group-hover:opacity-100"
                            title="Remove image"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Metadata Row: Author, Read Time, Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Reading Time
                    </label>
                    <input
                      type="text"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="e.g. 5 min read"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-slate-300">
                      Tags (Comma Separated)
                    </label>
                    <input
                      type="text"
                      value={tagsInput}
                      onChange={(e) => setTagsInput(e.target.value)}
                      placeholder="Hedging, Order Flow, Risk"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
                    />
                  </div>
                </div>

                {/* Publish Switcher */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <input
                    type="checkbox"
                    id="published-checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-slate-900 border-slate-700 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="published-checkbox" className="text-sm font-semibold text-slate-200 cursor-pointer">
                    Publish to Academy Blog immediately (uncheck to save as Draft)
                  </label>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="admin-save-post-btn"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>{editingPostId ? 'Update Blog Article' : 'Publish to Blog Section'}</span>
                  </button>
                </div>

              </form>
            ) : (
              /* Live Preview Tab */
              <div className="p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
                <div className="p-3 bg-blue-950/20 border border-blue-500/30 rounded-lg text-xs text-blue-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>This is how your post will render on the live website.</span>
                </div>

                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-950/40 text-blue-400 border border-blue-500/30">
                    {category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {title || 'Untitled Blog Article'}
                  </h1>
                  <p className="text-slate-300 italic border-l-2 border-blue-500 pl-4 py-1">
                    {excerpt || 'No excerpt provided yet.'}
                  </p>
                </div>

                {coverImage && (
                  <div className="rounded-xl overflow-hidden border border-slate-700 max-h-72">
                    <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="space-y-4 text-slate-300 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                  {content || 'No content written yet.'}
                </div>

                {additionalImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {additionalImages.map((img, i) => (
                      <img key={i} src={img} alt="Gallery" className="rounded-lg h-40 w-full object-cover border border-slate-700" />
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t border-slate-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveTab('editor')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold"
                  >
                    Return to Editor & Save
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* 4. Posts Table / Grid */
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900/60 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Article</th>
                    <th className="px-4 py-4">Category</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-900/40 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {post.coverImage && (
                            <img
                              src={post.coverImage}
                              alt=""
                              className="w-12 h-12 rounded-lg object-cover border border-slate-700 flex-shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <div className="font-bold text-white truncate max-w-xs sm:max-w-md">
                              {post.title}
                            </div>
                            <div className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                              {post.excerpt}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <span className="px-2.5 py-1 rounded text-xs font-medium bg-blue-950/40 text-blue-400 border border-blue-500/30 whitespace-nowrap">
                          {post.category}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleTogglePublish(post.id)}
                          className={`px-2.5 py-1 rounded text-xs font-bold transition flex items-center gap-1.5 ${
                            post.published !== false
                              ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-950/30 text-amber-400 border border-amber-500/30'
                          }`}
                          title="Click to toggle publish status"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${post.published !== false ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                          <span>{post.published !== false ? 'Published' : 'Draft'}</span>
                        </button>
                      </td>

                      <td className="px-4 py-4 text-xs text-slate-400 whitespace-nowrap">
                        {post.date}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditPost(post)}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
                            title="Edit Blog"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition"
                            title="Delete Blog"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
