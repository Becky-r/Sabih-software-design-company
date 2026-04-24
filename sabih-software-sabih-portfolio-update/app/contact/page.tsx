import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageSquare,
    Users,
    Zap,
    Send,
    Sparkles,
    Globe,
    HelpCircle,
} from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background selection:bg-primary/30 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Animated Blobs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mt-20">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-float">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium tracking-wider uppercase text-blue-200/80">
                                Let's Connect
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                            Get In
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                                Touch
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Ready to accelerate your digital transformation?
                            Let's discuss how our engineering team can bring
                            your vision to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Grid */}
            <section className="py-24 relative z-10 -mt-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
                        {/* Contact Form (Left) */}
                        <div className="lg:col-span-7">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        Send us a Message
                                    </h2>
                                    <p className="text-slate-400">
                                        Fill out the form below and our team
                                        will get back to you within 24 hours.
                                    </p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+251 (___) ___-____"
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">
                                                Project Type
                                            </label>
                                            <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none">
                                                <option
                                                    value=""
                                                    className="bg-slate-900"
                                                >
                                                    Select a service
                                                </option>
                                                <option
                                                    value="web"
                                                    className="bg-slate-900"
                                                >
                                                    Web Development
                                                </option>
                                                <option
                                                    value="mobile"
                                                    className="bg-slate-900"
                                                >
                                                    Mobile App Development
                                                </option>
                                                <option
                                                    value="design"
                                                    className="bg-slate-900"
                                                >
                                                    UI/UX Design
                                                </option>
                                                <option
                                                    value="cloud"
                                                    className="bg-slate-900"
                                                >
                                                    DevOps & Cloud
                                                </option>
                                                <option
                                                    value="3d-anim"
                                                    className="bg-slate-900"
                                                >
                                                    3D Animation
                                                </option>
                                                <option
                                                    value="3d-web"
                                                    className="bg-slate-900"
                                                >
                                                    3D Website
                                                </option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">
                                                Budget Range
                                            </label>
                                            <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none">
                                                <option
                                                    value=""
                                                    className="bg-slate-900"
                                                >
                                                    Select budget range
                                                </option>
                                                <option
                                                    value="small"
                                                    className="bg-slate-900"
                                                >
                                                    $5,000 - $15,000
                                                </option>
                                                <option
                                                    value="medium"
                                                    className="bg-slate-900"
                                                >
                                                    $15,000 - $50,000
                                                </option>
                                                <option
                                                    value="large"
                                                    className="bg-slate-900"
                                                >
                                                    $50,000 - $100,000
                                                </option>
                                                <option
                                                    value="enterprise"
                                                    className="bg-slate-900"
                                                >
                                                    $100,000+
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 ml-1">
                                            Project Description
                                        </label>
                                        <textarea
                                            placeholder="Tell us about your project, goals, and requirements..."
                                            rows={5}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(99,102,241,0.3)] mt-4">
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information (Right) */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                    <MapPin className="h-6 w-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Our Headquarters
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        123 Elelta Building
                                        <br />
                                        Yetebaberut, CA 94105
                                        <br />
                                        Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                            <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                    <Phone className="h-6 w-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Phone
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        +251 96 198 4228
                                        <br />
                                        +251 70 171 8771
                                        <br />
                                        <span className="text-sm text-emerald-400/80 mt-1 block">
                                            Mon-Fri 9AM-6PM EAT
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                    <Mail className="h-6 w-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Email
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        hello@sabihsoftware.com
                                        <br />
                                        support@sabihsoftware.com
                                        <br />
                                        <span className="text-sm text-purple-400/80 mt-1 block">
                                            We respond within 24 hours
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                    <Clock className="h-6 w-6 text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Business Hours
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Monday - Friday: 9:00 AM - 6:00 PM
                                        <br />
                                        Saturday: 10:00 AM - 4:00 PM
                                        <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 flex flex-col items-center justify-center group">
                        {/* Decorative Map BG Simulation */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                                backgroundSize: "32px 32px",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0" />

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30 shadow-[0_0_30px_rgba(99,102,241,0.3)] animate-bounce">
                                <MapPin className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Visit Our Headquarters
                            </h3>
                            <p className="text-slate-400 mb-4 max-w-md mx-auto">
                                123 Elelta Building, Yetebaberut, Addis Ababa
                            </p>
                            <Button
                                variant="outline"
                                className="bg-white/5 hover:bg-white/10 text-white border-white/10 rounded-full px-6"
                            >
                                <Globe className="w-4 h-4 mr-2" />
                                Open in Maps
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative bg-white/[0.02] border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/50 text-primary px-4 py-1"
                        >
                            The Sabih Advantage
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                            Why Choose Sabih?
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            What makes us different from traditional development
                            agencies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                <MessageSquare className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Clear Communication
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Regular updates, transparent sprint processes,
                                and direct access to your core development team.
                            </p>
                        </div>

                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <Users className="h-8 w-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Elite Engineering
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                A curated team of top-tier developers, 3D
                                artists, and cloud architects with proven track
                                records.
                            </p>
                        </div>

                        <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Zap className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Rapid Velocity
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Strict agile development methodologies ensure
                                blazing fast turnaround times without
                                compromising code quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white flex items-center justify-center gap-4">
                                <HelpCircle className="h-10 w-10 text-primary opacity-50" />
                                FAQs
                            </h2>
                            <p className="text-lg text-slate-400">
                                Quick answers to the most common questions about
                                working with us.
                            </p>
                        </div>

                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-4"
                        >
                            {[
                                {
                                    id: "item-1",
                                    q: "How long does a typical project take?",
                                    a: "Project timelines vary significantly based on complexity and scope. Simple promotional websites typically take 4-6 weeks, while complex full-stack applications or 3D experiences can take 3-6 months. We provide detailed roadmap timelines during our initial technical consultation.",
                                },
                                {
                                    id: "item-2",
                                    q: "Do you provide ongoing support and maintenance?",
                                    a: "Yes, absolutely. We offer comprehensive support, SLA, and maintenance packages to ensure your application stays secure, dependencies are updated, and infrastructure scales seamlessly long after launch.",
                                },
                                {
                                    id: "item-3",
                                    q: "Can you augment or work alongside our existing engineering team?",
                                    a: "We are highly experienced in collaborative environments. We can integrate seamlessly with your existing CI/CD pipelines, daily standups, and codebase, acting as an elite extension of your in-house capabilities.",
                                },
                            ].map((faq) => (
                                <AccordionItem
                                    key={faq.id}
                                    value={faq.id}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 data-[state=open]:bg-white/10 transition-colors duration-300"
                                >
                                    <AccordionTrigger className="text-lg font-bold text-white hover:no-underline py-6">
                                        <div className="flex items-center gap-4 text-left">
                                            <span className="text-primary font-black">
                                                Q.
                                            </span>
                                            {faq.q}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-400 leading-relaxed pb-6 pl-[2.25rem]">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}
