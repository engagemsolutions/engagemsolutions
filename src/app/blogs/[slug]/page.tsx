import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export async function generateStaticParams() {
  return siteConfig.blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = siteConfig.blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = siteConfig.blogs.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <article className="pt-28 pb-24 bg-[#080C15] text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-brand-400 uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Insights</span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
          <span className="px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 font-semibold">
            {blog.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={13} className="text-brand-400" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-brand-400" />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          {blog.title}
        </h1>

        {/* Hero Image */}
        <div className="relative h-[340px] sm:h-[460px] w-full rounded-3xl overflow-hidden glass-card border border-slate-700 shadow-2xl mb-12">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          {blog.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Engagement Box */}
        <div className="mt-14 p-8 rounded-3xl glass-card border border-brand-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Connect with Engage Marketing Solutions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Need strategic guidance on implementing these marketing solutions in Dubai?
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-xs uppercase tracking-wider shadow-glow-cyan transition-all whitespace-nowrap"
          >
            Speak to a Strategist
          </Link>
        </div>

        {/* Related Insights */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blogs/${rel.slug}`}
                  className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-brand-500/40 transition-all group"
                >
                  <span className="text-[11px] text-brand-400 font-mono uppercase block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
