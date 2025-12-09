import { HiArrowRight, HiClock, HiUser, HiBookOpen, HiTrendingUp, HiLightningBolt } from 'react-icons/hi';

const blogPosts = [
  {
    title: 'The Future of AI in Digital Marketing',
    excerpt:
      'Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing and customer engagement.',
    category: 'Digital Marketing',
    author: 'Sarah Mitchell',
    readTime: '5 min read',
    date: 'Nov 28, 2024',
    featured: true,
    color: 'from-violet-600 to-indigo-600',
    icon: HiLightningBolt,
  },
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt:
      'Learn the best practices for creating high-performance, scalable web applications using the Next.js framework.',
    category: 'Development',
    author: 'James Chen',
    readTime: '8 min read',
    date: 'Nov 25, 2024',
    featured: false,
    color: 'from-emerald-500 to-teal-600',
    icon: HiBookOpen,
  },
  {
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt:
      'Cut through the noise with proven SEO techniques that will help your website rank higher and attract more organic traffic.',
    category: 'SEO',
    author: 'Emily Brown',
    readTime: '6 min read',
    date: 'Nov 22, 2024',
    featured: false,
    color: 'from-amber-500 to-orange-600',
    icon: HiTrendingUp,
  },
];

export default function Blog() {
  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  return (
    <section id="blog" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HiBookOpen className="text-primary mr-2" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Blog</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-dark-light/70 max-w-xl mt-4 text-lg">
              Stay updated with the latest trends, tips, and insights from our experts.
            </p>
          </div>
          <button className="group flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
            View All Posts
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          {featuredPost && (
            <article className="group lg:row-span-2 relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary/10 cursor-pointer">
              {/* Image */}
              <div className={`h-72 lg:h-full bg-gradient-to-br ${featuredPost.color} relative overflow-hidden`}>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>

                {/* Floating Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <featuredPost.icon className="text-white text-3xl" />
                </div>

                {/* Featured Badge */}
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-2 bg-white text-dark rounded-full text-sm font-semibold shadow-lg">
                    ✨ Featured
                  </span>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-8">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-white/70 mb-6 line-clamp-2 lg:line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <HiUser />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts */}
          <div className="space-y-8">
            {regularPosts.map((post, index) => (
              <article
                key={index}
                className="group flex flex-col sm:flex-row bg-gray rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className={`sm:w-48 h-48 sm:h-auto bg-gradient-to-br ${post.color} flex-shrink-0 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <post.icon className="text-white/50 text-4xl group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <span className="inline-block px-3 py-1 bg-white rounded-full text-primary text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-dark-light/60 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-dark-light/50 text-sm">
                    <div className="flex items-center gap-2">
                      <HiUser className="text-base" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="text-base" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="relative gradient-dark rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">📧 Stay Updated</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/60 mb-8 text-lg">
              Get the latest insights, tips, and updates delivered straight to your inbox.
              Join 10,000+ subscribers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn-animate px-8 py-4 gradient-accent text-white rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Subscribe
                <HiArrowRight />
              </button>
            </form>
            <p className="text-white/40 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
