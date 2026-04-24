import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Code,
    Smartphone,
    Palette,
    Cloud,
    CuboidIcon as Cube,
    Globe,
    ArrowRight,
    CheckCircle,
    Zap,
} from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Web Development",
            description:
                "We create modern, responsive web applications using cutting-edge technologies. From simple websites to complex enterprise solutions, we deliver scalable and maintainable code.",
            icon: Code,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            shadow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
            features: [
                "React & Next.js Applications",
                "E-commerce Platforms",
                "Progressive Web Apps (PWA)",
                "API Development & Integration",
            ],
            tech: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
        },
        {
            title: "Mobile App Development",
            description:
                "Build powerful mobile applications for iOS and Android platforms. We specialize in both native development and cross-platform solutions using React Native and Flutter.",
            icon: Smartphone,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            shadow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
            features: [
                "iOS & Android Native Apps",
                "React Native Development",
                "Flutter Applications",
                "App Store Optimization",
            ],
            tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        },
        {
            title: "UI/UX Design",
            description:
                "Create intuitive and engaging user experiences that drive conversions and user satisfaction. Our design process focuses on user research, prototyping, and iterative improvement.",
            icon: Palette,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            shadow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
            features: [
                "User Research & Analysis",
                "Wireframing & Prototyping",
                "Visual Design & Branding",
                "Usability Testing",
            ],
            tech: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
        },
        {
            title: "DevOps & Cloud Services",
            description:
                "Implement robust DevOps practices and cloud infrastructure to ensure your applications are scalable, secure, and highly available. We specialize in AWS, Azure, and Google Cloud.",
            icon: Cloud,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            shadow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
            features: [
                "CI/CD Pipeline Setup",
                "Cloud Migration",
                "Container Orchestration",
                "Monitoring & Logging",
            ],
            tech: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
        },
        {
            title: "3D Animation",
            description:
                "Create captivating 3D animations and visual effects for web, mobile, and marketing materials. From product visualizations to interactive experiences, we bring your ideas to life.",
            icon: Cube,
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20",
            shadow: "shadow-[0_0_20px_rgba(239,68,68,0.15)]",
            features: [
                "Product Visualization",
                "Character Animation",
                "Motion Graphics",
                "VR/AR Experiences",
            ],
            tech: ["Blender", "Maya", "Cinema 4D", "After Effects", "Unity"],
            link: "/3Dwebsite",
        },
        {
            title: "3D Websites",
            description:
                "Build immersive 3D web experiences using Three.js, WebGL, and modern web technologies. Create interactive product showcases, virtual tours, and engaging brand experiences.",
            icon: Globe,
            color: "text-teal-400",
            bg: "bg-teal-500/10",
            border: "border-teal-500/20",
            shadow: "shadow-[0_0_20px_rgba(20,184,166,0.15)]",
            features: [
                "Interactive 3D Scenes",
                "Virtual Product Tours",
                "WebGL Optimization",
                "Cross-browser Compatibility",
            ],
            tech: [
                "Three.js",
                "WebGL",
                "React Three Fiber",
                "GSAP",
                "Babylon.js",
            ],
        },
    ];

    const processSteps = [
        {
            num: "01",
            title: "Discovery",
            desc: "Understanding your core requirements and defining clear, actionable goals.",
            color: "text-blue-400",
        },
        {
            num: "02",
            title: "Planning",
            desc: "Creating detailed project roadmaps, architecture plans, and sprint timelines.",
            color: "text-purple-400",
        },
        {
            num: "03",
            title: "Development",
            desc: "Agile engineering and iterative development with transparent, regular updates.",
            color: "text-emerald-400",
        },
        {
            num: "04",
            title: "Delivery",
            desc: "Rigorous testing, seamless deployment, and continuous ongoing support.",
            color: "text-amber-400",
        },
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
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">
                                Digital Expertise
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                            Our
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                                Solutions
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive software engineering and high-end
                            design solutions tailored to scale your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex flex-col ${service.shadow}`}
                            >
                                <div className="flex items-center gap-5 mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center border ${service.border} group-hover:scale-110 transition-transform duration-500 shrink-0`}
                                    >
                                        <service.icon
                                            className={`h-8 w-8 ${service.color}`}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle
                                                className={`h-5 w-5 ${service.color}`}
                                            />
                                            <span className="text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {service.tech.map((t, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="bg-white/5 border-white/10 text-slate-300 hover:text-white"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                {service.link ? (
                                    <Link
                                        href={service.link}
                                        className="w-full mt-auto block"
                                    >
                                        <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 h-12 rounded-xl">
                                            Get Quote{" "}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 h-12 rounded-xl mt-auto">
                                        Get Quote{" "}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 relative bg-white/[0.02] border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/50 text-primary px-4 py-1"
                        >
                            Methodology
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                            Development Process
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            A proven, engineering-first methodology that
                            guarantees project success from concept to
                            deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div
                                    className={`text-6xl font-black mb-4 opacity-20 ${step.color} group-hover:scale-110 transition-transform origin-left`}
                                >
                                    {step.num}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
