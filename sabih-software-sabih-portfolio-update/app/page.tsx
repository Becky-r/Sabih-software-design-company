import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Cloud,
  CuboidIcon as Cube,
  Globe,
  Star,
  Users,
  Award,
  Zap,
  MousePointer2,
} from "lucide-react";
import Scene3D from "@/components/three/Scene3D";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* 3D Background */}
        <Scene3D />

        {/* Animated Blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-float">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">
                Pioneering the Digital Frontier
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
              Architecting
              <span className="text-primary-gradient block mt-2">
                Digital Realities
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We merge high-end engineering with immersive design to build
              software that doesn't just work—it inspires.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(129,140,248,0.3)]"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/5 px-10 py-6 text-lg rounded-full border border-white/10"
              >
                View Showcase
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-20">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Stats/Overview Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                label: "Specialists",
                val: "8+",
                color: "text-blue-400",
              },
              {
                icon: Award,
                label: "Success Rate",
                val: "99%",
                color: "text-emerald-400",
              },
              {
                icon: Zap,
                label: "Delivery Speed",
                val: "2X",
                color: "text-purple-400",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-8 glass-card rounded-3xl text-center hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2 tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-20">
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary px-4 py-1"
            >
              Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Integrated Digital Solutions.
            </h2>
            <p className="text-slate-400 text-lg">
              We build everything from cloud-native platforms to spatial 3D
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Architecture",
                desc: "Enterprise-grade Next.js applications optimized for speed and SEO.",
                icon: Code,
                link: "/services",
                accent: "from-blue-500/20",
              },
              {
                title: "Spatial Computing",
                desc: "Interactive 3D environments and WebGL experiences using Three.js.",
                icon: Globe,
                link: "/services",
                accent: "from-purple-500/20",
              },
              {
                title: "Mobile Ecosystems",
                desc: "High-performance iOS and Android apps with seamless UX.",
                icon: Smartphone,
                link: "/services",
                accent: "from-emerald-500/20",
              },
              {
                title: "Cloud Infrastructure",
                desc: "Automated CI/CD pipelines and scalable AWS/Docker orchestration.",
                icon: Cloud,
                link: "/services",
                accent: "from-orange-500/20",
              },
              {
                title: "Generative UI/UX",
                desc: "Data-driven design systems that prioritize user psychology.",
                icon: Palette,
                link: "/services",
                accent: "from-pink-500/20",
              },
              {
                title: "3D Motion Design",
                desc: "Complex animations and visual storytelling for digital products.",
                icon: Cube,
                link: "/services",
                accent: "from-red-500/20",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden bg-white/5 border-white/5 hover:border-white/10 transition-all duration-500 rounded-3xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardContent className="p-10 relative z-10">
                  <service.icon className="h-10 w-10 text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    className="group/link inline-flex items-center text-sm font-semibold tracking-wider uppercase text-primary"
                  >
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll (Simplified) */}
      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-4 overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-12">
            Engineered with
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              "React",
              "Next.js",
              "Three.js",
              "TypeScript",
              "Node.js",
              "AWS",
              "Docker",
              "PostgreSQL",
              "Python",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xl md:text-3xl font-bold tracking-tighter hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight">
              What Our Partners Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The 3D implementation transformed our brand perception instantly. It's not just a website; it's an experience.",
                author: "Efrem Arega",
                role: "Founder, Sharon Charity",
                initials: "EA",
              },
              {
                text: "Technical excellence combined with a rare eye for aesthetics. They are our go-to for complex engineering.",
                author: "Sami",
                role: "CTO, Diamond School",
                initials: "SB",
              },
              {
                text: "Their agile approach allowed us to pivot quickly and launch a month ahead of schedule.",
                author: "Zebib Johnson",
                role: "Founder, StartupXYZ",
                initials: "ZJ",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-10 rounded-[40px] glass-card relative group"
              >
                <div className="flex mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 italic mb-10 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.author}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto glass-card rounded-[60px] p-12 md:p-24 text-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              Ready to build the{" "}
              <span className="text-primary-gradient">Next Big Thing?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Whether you're a startup or an enterprise, we have the tools to
              bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-slate-200 px-10 py-8 text-xl rounded-full"
              >
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-10 py-8 text-xl rounded-full"
              >
                Schedule a Call
              </Button>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs uppercase tracking-widest">
                  Available for projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
