import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Clock,
    DollarSign,
    Heart,
    Zap,
    Coffee,
    Gamepad2,
    GraduationCap,
    Shield,
    ChevronRight,
    CheckCircle2,
    Briefcase,
    Sparkles,
} from "lucide-react";

export default function CareersPage() {
    const jobOpenings = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Remote / San Francisco",
            type: "Full-time",
            salary: "$120k - $160k",
            description:
                "We're looking for an experienced full-stack developer to join our core team and work on cutting-edge web applications.",
            requirements: [
                "5+ years React/Node.js experience",
                "TypeScript proficiency",
                "Cloud platform experience",
            ],
            posted: "2 days ago",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote / New York",
            type: "Full-time",
            salary: "$90k - $120k",
            description:
                "Join our design team to create beautiful, user-centered experiences for web and mobile applications.",
            requirements: [
                "3+ years UI/UX experience",
                "Figma expertise",
                "Portfolio of web/mobile designs",
            ],
            posted: "1 week ago",
        },
        {
            id: 3,
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "Remote",
            type: "Full-time",
            salary: "$110k - $140k",
            description:
                "Help us build and maintain scalable infrastructure for our growing portfolio of applications.",
            requirements: [
                "AWS/Azure experience",
                "Docker/Kubernetes",
                "CI/CD pipeline expertise",
            ],
            posted: "3 days ago",
        },
        {
            id: 4,
            title: "Mobile Developer (React Native)",
            department: "Engineering",
            location: "Remote / Austin",
            type: "Full-time",
            salary: "$100k - $130k",
            description:
                "Build amazing mobile experiences using React Native for our diverse client projects.",
            requirements: [
                "3+ years React Native",
                "iOS/Android deployment",
                "Redux/Context API",
            ],
            posted: "5 days ago",
        },
        {
            id: 5,
            title: "3D Artist / Developer",
            department: "Creative",
            location: "Remote / Los Angeles",
            type: "Full-time",
            salary: "$80k - $110k",
            description:
                "Create stunning 3D visualizations and interactive experiences for web and mobile platforms.",
            requirements: [
                "Three.js/WebGL experience",
                "Blender/Maya proficiency",
                "Creative portfolio",
            ],
            posted: "1 week ago",
        },
        {
            id: 6,
            title: "Junior Frontend Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "$60k - $80k",
            description:
                "Perfect opportunity for a junior developer to grow their skills in a supportive environment.",
            requirements: [
                "1+ years React experience",
                "HTML/CSS/JavaScript",
                "Eagerness to learn",
            ],
            posted: "4 days ago",
        },
    ];

    const benefits = [
        {
            icon: Heart,
            title: "Health & Wellness",
            description:
                "Comprehensive health, dental, and vision insurance plus wellness stipend",
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20",
        },
        {
            icon: Zap,
            title: "Flexible Work",
            description:
                "Remote-first culture with flexible hours and unlimited PTO",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
        },
        {
            icon: GraduationCap,
            title: "Learning & Growth",
            description:
                "$2000 annual learning budget for courses, conferences, and books",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
        },
        {
            icon: Coffee,
            title: "Great Perks",
            description:
                "Free lunch, snacks, coffee, and team building activities",
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
        },
        {
            icon: Gamepad2,
            title: "Fun Environment",
            description:
                "Game room, team outings, and a culture that values work-life balance",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
        },
        {
            icon: Shield,
            title: "Security & Stability",
            description:
                "401k matching, stock options, and long-term career growth",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
        },
    ];

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
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">
                                Careers at Sabih
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                            Join Our
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                                Engineering Team
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Build amazing software with passionate developers,
                            architects, and designers who love pushing the
                            boundaries of what's possible.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                            >
                                View Open Positions
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                className="text-white hover:bg-white/5 px-8 py-6 rounded-full border border-white/10"
                            >
                                Learn About Our Culture
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-16 border-b border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                12<span className="text-blue-500">+</span>
                            </div>
                            <div className="text-slate-500 uppercase tracking-widest text-xs font-semibold">
                                Team Members
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                15<span className="text-emerald-500">+</span>
                            </div>
                            <div className="text-slate-500 uppercase tracking-widest text-xs font-semibold">
                                Countries
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                1<span className="text-purple-500">yr</span>
                            </div>
                            <div className="text-slate-500 uppercase tracking-widest text-xs font-semibold">
                                Experience
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                95<span className="text-amber-500">%</span>
                            </div>
                            <div className="text-slate-500 uppercase tracking-widest text-xs font-semibold">
                                Satisfaction
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/50 text-primary px-4 py-1"
                        >
                            Life at Sabih
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Why Work With Us?
                        </h2>
                        <p className="text-lg text-slate-400">
                            We believe that great software comes from great
                            teams. Join a culture that values innovation,
                            collaboration, and personal growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2"
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center mx-auto mb-6 border ${benefit.border} group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <benefit.icon
                                        className={`h-8 w-8 ${benefit.color}`}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/50 text-primary px-4 py-1"
                        >
                            Open Roles
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                            Current Openings
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Find your next career defining opportunity with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {jobOpenings.map((job) => (
                            <div
                                key={job.id}
                                className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex flex-col hover:-translate-y-1 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge
                                                variant="outline"
                                                className="bg-primary/10 border-primary/20 text-primary"
                                            >
                                                {job.department}
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className="bg-white/5 border-white/10 text-slate-300"
                                            >
                                                {job.type}
                                            </Badge>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                                        {job.posted}
                                    </span>
                                </div>

                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    {job.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <DollarSign className="w-5 h-5 text-emerald-400" />
                                        {job.salary}
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Clock className="w-5 h-5 text-purple-400" />
                                        {job.type}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-slate-400" />
                                        Requirements
                                    </h4>
                                    <ul className="space-y-2">
                                        {job.requirements.map((req, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3 text-slate-400 text-sm"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 h-12 rounded-xl mt-auto transition-colors">
                                    Apply for this role
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                                Our Hiring Process
                            </h2>
                            <p className="text-lg text-slate-400">
                                Simple, transparent, and designed to find the
                                best mutual fit.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    num: "01",
                                    title: "Application",
                                    desc: "Submit your resume and portfolio",
                                    color: "text-blue-400",
                                },
                                {
                                    num: "02",
                                    title: "Phone Screen",
                                    desc: "Brief conversation with our HR team",
                                    color: "text-purple-400",
                                },
                                {
                                    num: "03",
                                    title: "Tech Interview",
                                    desc: "Discuss your experience and skills",
                                    color: "text-emerald-400",
                                },
                                {
                                    num: "04",
                                    title: "Final Chat",
                                    desc: "Meet the team and discuss culture fit",
                                    color: "text-amber-400",
                                },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                                >
                                    <div
                                        className={`text-6xl font-black mb-4 opacity-20 ${step.color} group-hover:scale-110 transition-transform origin-left`}
                                    >
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm relative z-10">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
