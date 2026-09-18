'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function BlogsPage() {
  const featuredBlog = siteConfig.blogs[0];
  const regularBlogs = siteConfig.blogs.slice(1);

  return (
    <div className="pt-28 pb-24 bg-[#080C15] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6">
            <BookOpen size={16} className="text-brand-400" />
            <span>Engage Marketing Insights</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Latest Trends &amp; <span className="gradient-text-cyan">Strategic Thinking</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with Engage Marketing Solutions&apos; marketing insights blog, covering the latest trends, strategies, and tips in branding, communication, and digital engagement across Dubai and global markets.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredBlog && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blogs/${featuredBlog.slug}`}
              className="block rounded-3xl overflow-hidden glass-card border border-slate-700/80 hover:border-brand-500/50 transition-all duration-500 group hover:shadow-glow-cyan"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden">
                  <Image
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-dark-surface/90 text-brand-300 border border-brand-500/40">
                      Featured Insight
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-brand-400" />
                        {featuredBlog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-brand-400" />
                        {featuredBlog.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                      {featuredBlog.title}
                    </h2>

                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 group-hover:text-brand-300 uppercase tracking-wider">
                    <span>Read Full Analysis</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="rounded-3xl overflow-hidden glass-card border border-slate-800 hover:border-brand-500/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-glow-cyan"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-surface/85 backdrop-blur-md text-brand-300 border border-brand-500/30">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-brand-400" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-brand-400" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-300 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs font-bold text-brand-400 group-hover:text-brand-300 uppercase tracking-wider">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
