'use client'

import Link from "next/link"
import { motion } from "framer-motion"

// metadata handled at route level

import { allBlogs } from 'contentlayer/generated'
import { compareDesc, parseISO } from 'date-fns'
const posts = [...allBlogs].sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))

const categoryMap = posts.reduce((map, post) => {
  if (post.category) {
    map.set(post.category, (map.get(post.category) ?? 0) + 1);
  }
  return map;
}, new Map<string, number>());

const categories = Array.from(categoryMap, ([name, count]) => ({ name, count }));


export default function BlogsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 pt-24 md:pt-28">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Softics Blog
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Insights, thoughts, and updates from our journey in AI development.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="group relative rounded-lg border p-6 hover:border-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${post.slug}`} className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category ?? 'General'}</span>
                  </div>
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Categories */}
          <motion.div
            className="rounded-lg border p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/blogs/category/${category.name.toLowerCase()}`}
                  className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="text-muted-foreground">{category.count}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="rounded-lg border p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest insights and updates from Softics Studio.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 