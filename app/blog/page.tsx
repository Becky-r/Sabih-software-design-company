import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Calendar,
    User,
    ArrowRight,
    Clock,
    Sparkles,
    Mail,
    Hash,
} from "lucide-react";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of Web Development: Trends to Watch in 2024",
            excerpt:
                "Explore the latest trends shaping the web development landscape, from AI integration to advanced frameworks.",
            image: "/placeholder.svg?height=400&width=600",
            author: "Sarah Johnson",
            date: "Dec 15, 2023",
            readTime: "5 min read",
            category: "Web Development",
            featured: true,
        },
        {
            id: 2,
            title: "Building Scalable Mobile Apps with React Native",
            excerpt:
                "Learn best practices for creating performant and maintainable React Native applications for modern devices.",
            image: "/placeholder.svg?height=400&width=600",
            author: "Mike Davis",
            date: "Dec 12, 2023",
            readTime: "8 min read",
            category: "Mobile Development",
            featured: true,
        },
        {
            id: 3,
            title: "3D Web Experiences: The Next Frontier",
            excerpt:
                "Discover how Three.js and WebGL are revolutionizing user experiences on the web with immersive spatial design.",
            image: "/placeholder.svg?height=400&width=600",
            author: "Alex Smith",
            date: "Dec 10, 2023",
            readTime: "6 min read",
            category: "3D Development",
            featured: true,
        },
        {
            id: 4,
            title: "DevOps Best Practices for Modern Applications",
            excerpt:
                "Essential DevOps strategies for deploying and maintaining scalable applications in cloud-native environments.",
            image: "/placeholder.svg?height=300&width=400",
            author: "Jennifer Lee",
            date: "Dec 8, 2023",
            readTime: "7 min read",
            category: "DevOps",
            featured: false,
        },
        {
            id: 5,
            title: "UI/UX Design Principles That Drive Conversions",
            excerpt:
                "How thoughtful design decisions can significantly impact user engagement and critical business metrics.",
            image: "/placeholder.svg?height=300&width=400",
            author: "David Wilson",
            date: "Dec 5, 2023",
            readTime: "4 min read",
            category: "Design",
            featured: false,
        },
        {
            id: 6,
            title: "Securing Your Applications: A Developer's Guide",
            excerpt:
                "Essential security practices every developer should implement in their applications from day one.",
            image: "/placeholder.svg?height=300&width=400",
            author: "Lisa Chen",
            date: "Dec 3, 2023",
            readTime: "9 min read",
            category: "Security",
            featured: false,
        },
    ];

    const featuredPosts = blogPosts.filter((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    const categories = [
        "Web Development",
        "Mobile Development",
        "3D Development",
        "DevOps",
        "Design",
        "Security",
    ];

    return (
        <div className="min-h-screen bg-background selection:bg-primary/30 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Animated Blobs */}
                <div className="absolute top-1/4 -right-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mt-20">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-float">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">
                                Perspectives
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                            Sabih
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                                Insights
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Stay updated with the latest engineering trends,
                            technical tutorials, and deep-dives from our team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div>
                            <Badge
                                variant="outline"
                                className="mb-4 border-primary/50 text-primary px-4 py-1"
                            >
                                Editor's Picks
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                                Featured Articles
                            </h2>
                        </div>
                        <p className="text-lg text-slate-400 max-w-sm">
                            Our most popular and impactful content curated just
                            for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {featuredPosts.map((post) => (
                            <Link
                                href={`/blog/${post.id}`}
                                key={post.id}
                                className="block group"
                            >
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <Image
                                            src={
                                                post.image || "/placeholder.svg"
                                            }
                                            alt={post.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md px-3 py-1">
                                                Featured
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <Badge
                                                variant="outline"
                                                className="bg-white/5 border-white/10 text-slate-300"
                                            >
                                                {post.category}
                                            </Badge>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-400 mb-8 leading-relaxed flex-grow line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-slate-500 pt-6 border-t border-white/10 mt-auto">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5">
                                                    <User className="h-4 w-4 text-slate-400" />
                                                    <span className="truncate max-w-[80px] sm:max-w-none">
                                                        {post.author}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-4 w-4 text-slate-400" />
                                                    {post.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter & Categories Banner */}
            <section className="py-12 relative bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
                        {/* Newsletter */}
                        <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.2)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-screen filter blur-[80px]" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        Subscribe to Newsletter
                                    </h3>
                                </div>
                                <p className="text-slate-400 mb-8">
                                    Get the latest articles, engineering
                                    insights, and tech news delivered straight
                                    to your inbox. No spam, ever.
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address..."
                                        className="flex-1 bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                        required
                                    />
                                    <Button className="h-auto py-4 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="lg:col-span-5">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Hash className="w-5 h-5 text-primary" />
                                Browse Topics
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <Link
                                        key={category}
                                        href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                                    >
                                        <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer font-medium text-sm">
                                            {category}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Posts */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                            Latest Publications
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {regularPosts.map((post) => (
                            <Link
                                href={`/blog/${post.id}`}
                                key={post.id}
                                className="block group"
                            >
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-1">
                                    <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <Image
                                            src={
                                                post.image || "/placeholder.svg"
                                            }
                                            alt={post.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4 flex justify-between items-start">
                                            <Badge
                                                variant="outline"
                                                className="bg-white/5 border-white/10 text-slate-300 text-xs"
                                            >
                                                {post.category}
                                            </Badge>
                                            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-white/10 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                                                    <User className="w-3 h-3" />
                                                </div>
                                                <span>{post.author}</span>
                                            </div>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button
                            variant="outline"
                            className="bg-white/5 hover:bg-white/10 text-white border-white/10 rounded-xl px-8 h-12"
                        >
                            Load More Articles
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
