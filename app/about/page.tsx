import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Award,
    Target,
    Eye,
    Users,
    Calendar,
    Trophy,
    Zap,
    Code,
    Shield,
} from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background selection:bg-primary/30 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Animated Blobs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mt-20">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-float">
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">
                                Our Origin Story
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            About
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                                Sabih Software
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Pioneering software development since 2024,
                            transforming ambitious ideas into immersive digital
                            realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                <Target className="h-7 w-7 text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                Our Mission
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                To empower businesses with innovative software
                                solutions that drive growth, efficiency, and
                                digital transformation. We believe in creating
                                technology that not only meets today's needs but
                                anticipates tomorrow's challenges.
                            </p>
                        </div>

                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Eye className="h-7 w-7 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                Our Vision
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                To be the leading software development partner
                                that businesses trust for their most critical
                                projects. We envision a future where technology
                                seamlessly integrates with human creativity to
                                solve complex problems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Timeline */}
            <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge
                                variant="outline"
                                className="mb-4 border-primary/50 text-primary px-4 py-1"
                            >
                                The Journey
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                                Our Story
                            </h2>
                        </div>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {[
                                {
                                    year: "2024",
                                    title: "The Beginning",
                                    desc: "Founded by three passionate developers with a shared vision of creating exceptional software. Started with our first client project - a custom e-commerce platform.",
                                    icon: Calendar,
                                    color: "text-blue-400",
                                    bg: "bg-blue-500/10",
                                    border: "border-blue-500/20",
                                },
                                {
                                    year: "2024",
                                    title: "Growing Team",
                                    desc: "Expanded to a team of 8 developers and designers. Launched our mobile app development division and completed 8+ successful projects.",
                                    icon: Users,
                                    color: "text-emerald-400",
                                    bg: "bg-emerald-500/10",
                                    border: "border-emerald-500/20",
                                },
                                {
                                    year: "2024",
                                    title: "Recognition",
                                    desc: "Received 'Best Software Development Company' award. Pioneered 3D web experiences and expanded into AI/ML solutions.",
                                    icon: Award,
                                    color: "text-purple-400",
                                    bg: "bg-purple-500/10",
                                    border: "border-purple-500/20",
                                },
                                {
                                    year: "2025",
                                    title: "Today",
                                    desc: "Now a team of 10+ professionals, having delivered 8+ projects across 25 countries. Leading innovation in 3D web development and immersive digital experiences.",
                                    icon: Trophy,
                                    color: "text-amber-400",
                                    bg: "bg-amber-500/10",
                                    border: "border-amber-500/20",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background ${item.bg} ${item.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.2)] z-10`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span
                                                className={`font-mono text-sm font-bold ${item.color}`}
                                            >
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-white">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/50 text-primary px-4 py-1"
                        >
                            Leadership
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            The visionaries behind TechForge Solutions building
                            the future of digital experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Team Member 1 */}
                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                                BY
                            </div>
                            <h3 className="text-2xl font-bold mb-1 text-white">
                                Bereket Yimer
                            </h3>
                            <p className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">
                                CEO & Co-Founder
                            </p>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Visionary leader with 2+ years in software
                                development. Expert in strategic planning and
                                business growth.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    Leadership
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    Full-Stack
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    3D Design
                                </Badge>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                                SJ
                            </div>
                            <h3 className="text-2xl font-bold mb-1 text-white">
                                Robsen Tadese
                            </h3>
                            <p className="text-emerald-400 font-medium mb-4 text-sm uppercase tracking-wider">
                                Manager
                            </p>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Creative director specializing in UI/UX design,
                                3D visualization, and user experience
                                optimization.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center mt-auto">
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    UI/UX
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    3D Design
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    Strategy
                                </Badge>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2">
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                                NB
                            </div>
                            <h3 className="text-2xl font-bold mb-1 text-white">
                                Nati Beshani
                            </h3>
                            <p className="text-purple-400 font-medium mb-4 text-sm uppercase tracking-wider">
                                Head of Team
                            </p>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Technical architect with expertise in full-stack
                                development, cloud infrastructure, and emerging
                                technologies.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    Full-Stack
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    Cloud
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                >
                                    DevOps
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Achievements */}
            <section className="py-24 relative bg-white/[0.02] border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                            Awards & Achievements
                        </h2>
                        <p className="text-lg text-slate-400">
                            Recognition for our commitment to engineering
                            excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Best Software Company 2025",
                                desc: "Tech Innovation Awards",
                                icon: Award,
                                color: "text-amber-400",
                            },
                            {
                                title: "Excellence in Web Dev",
                                desc: "Digital Excellence 2025",
                                icon: Code,
                                color: "text-blue-400",
                            },
                            {
                                title: "Top Employer 2025",
                                desc: "Great Place to Work",
                                icon: Users,
                                color: "text-emerald-400",
                            },
                            {
                                title: "Innovation Leader",
                                desc: "Tech Pioneers 2025",
                                icon: Zap,
                                color: "text-purple-400",
                            },
                        ].map((award, i) => (
                            <div
                                key={i}
                                className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                                    <award.icon
                                        className={`h-6 w-6 ${award.color}`}
                                    />
                                </div>
                                <h3 className="font-bold text-white mb-2">
                                    {award.title}
                                </h3>
                                <p className="text-sm text-slate-400">
                                    {award.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
