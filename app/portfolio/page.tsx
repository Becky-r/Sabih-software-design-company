"use client;";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// Local Images
import hotelBookingImg from "./Images/Kerawi International Hotel.png";
import storeManagementImg from "./Images/Store-management.png";
import superMarketImg from "./Images/super-market-management-system.png";
import restaurantManagementImg from "./Images/Restaurant Management.png";
import cuammEmrImg from "./Images/CUAMM EMR Dashboard.jpg";
import badDigitalImg from "./Images/Bad Ethiopia.png";
import blockfestImg from "./Images/Blockfest.png";
import digitalMenuImg from "./Images/Digital Menu.png";
import sharoneImg from "./Images/Sharon.png";
import restaurantAdminImg from "./Images/Restaurant admin.png";
import avocadoErpImg from "./Images/Avocado ERP.png";
import storeKeeperImg from "./Images/Store Keeper.png";
import hrManagementImg from "./Images/Hotel-management.png";
import liveAdminImg from "./Images/Live admin.png";
import Kitecredit from "./Images/Kite-Credit.png";
import streamflow from "./Images/stream-flow.png";
import EduFund from "./Images/Edu-fund.png";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Platform",
      description:
        "A modern hotel reservation platform with room browsing, booking management, customer reservations, and responsive user experience for hospitality businesses.",
      image: hotelBookingImg,
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      category: "Web Development",
      link: "https://hotel-booking-j675.vercel.app/",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Store Management System",
      description:
        "A complete inventory and sales management system for businesses with stock tracking, reporting, dashboard analytics, and streamlined operational workflows.",
      image: storeManagementImg,
      technologies: ["Next.js", "React", "Dashboard UI", "TypeScript"],
      category: "Business System",
      link: "https://v0-store-management-system-three.vercel.app/",
      github: "#",
      featured: true,
    },
    {
      id: 3,
      title: "BAD Digital Platform",
      description:
        "A professional digital platform built for business services, project management, and enterprise solutions with a modern web presence.",
      image: badDigitalImg,
      technologies: ["Next.js", "Business Platform", "Modern UI"],
      category: "Corporate Website",
      link: "https://bad.et",
      github: "#",
      featured: true,
    },

    // ERP & MANAGEMENT SYSTEMS GROUP
    {
      id: 4,
      title: "Restaurant Management System",
      description:
        "An all-in-one restaurant management platform for order processing, kitchen workflow, menu management, and customer service optimization.",
      image: restaurantManagementImg,
      technologies: ["Next.js", "React", "POS System"],
      category: "Restaurant System",
      link: "https://restaurant-management-s85x.vercel.app/",
      github: "#",
      featured: false,
    },
    {
      id: 5,
      title: "CUAMM Ethiopia EMR System",
      description:
        "A healthcare-focused Electronic Medical Record system supporting patient data management, hospital workflows, and digital healthcare operations.",
      image: cuammEmrImg,
      technologies: ["Healthcare System", "React", "Next.js"],
      category: "Healthcare Platform",
      link: "https://cuammethiopia-emr.org/",
      github: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Super Market Management System",
      description:
        "A smart supermarket management platform with product tracking, customer handling, sales reporting, and efficient business process automation.",
      image: superMarketImg,
      technologies: ["React", "Next.js", "Tailwind CSS"],
      category: "Business System",
      link: "https://supper-market.vercel.app/",
      github: "#",
      featured: false,
    },
    {
      id: 7,
      title: "University Blockchain Week Hub",
      description:
        "A comprehensive event platform for BlockFest Ethiopia 2026, managing a chain-agnostic, hybrid Web3 conference with hackathon tracks, mentorship scheduling, and ecosystem partner integration.",
      image: blockfestImg,
      technologies: ["Next.js", "Web3", "Event Platform", "Dashboard UI"],
      category: "Event Platform",
      link: "https://blockfest.bad.et/",
      github: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Digital Menu System",
      description:
        "A professional QR-code-based digital menu solution for restaurants. Features include multi-language support (English, Italian, Amharic), real-time inventory tracking, group ordering with unified billing, and Telebirr payment integration.",
      image: digitalMenuImg,
      technologies: ["React", "PWA", "Payment Gateway", "Multi-language"],
      category: "FoodTech SaaS",
      link: "https://digital-menu-d1ei.vercel.app/",
      github: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Sharon Children's Ministry Platform",
      description:
        "A faith-centered web platform for Sharon Children's Service, showcasing ministry programs, Sunday School resources, a Christian book collection, and a photo gallery to engage families and volunteers.",
      image: sharoneImg,
      technologies: ["Next.js", "Content Management", "Media Gallery"],
      category: "Non-Profit / Faith",
      link: "https://sharone-42xb.vercel.app/",
      github: "#",
      featured: false,
    },
    {
      id: 10,
      title: "RestaurantOS Admin Dashboard",
      description:
        "A secure, centralized admin dashboard for restaurant operations. Provides role-based access, demo login credentials for evaluation, and would integrate order management, analytics, and staff oversight.",
      image: restaurantAdminImg,
      technologies: ["Next.js", "Authentication", "Admin Dashboard"],
      category: "Business Operations",
      link: "https://restaurant-admin-one-theta.vercel.app/",
      github: "#",
      featured: false,
    },

    {
      id: 11,
      title: "Avocado Business ERP System",
      description:
        "A comprehensive Enterprise Resource Planning system for businesses, offering integrated dashboard views, operational analytics, and streamlined business process management.",
      image: avocadoErpImg,
      technologies: ["ERP", "Dashboard", "Analytics", "Business Management"],
      category: "Enterprise System",
      link: "https://avocado-web-erp.vercel.app/dashboard",
      github: "#",
      featured: false,
    },
    {
      id: 12,
      title: "StoreKeeper Pro",
      description:
        "A professional retail management system with real-time sales tracking, inventory alerts, low stock notifications, and expiring item monitoring for efficient store operations.",
      image: storeKeeperImg,
      technologies: ["Inventory Management", "POS", "Analytics Dashboard"],
      category: "Retail System",
      link: "https://store-keeper-best.vercel.app/",
      github: "#",
      featured: false,
    },
    {
      id: 13,
      title: "HotelHR Management System",
      description:
        "A specialized human resources management system designed for the hospitality industry, handling employee records, scheduling, payroll, and staff performance tracking.",
      image: hrManagementImg,
      technologies: ["HR System", "Employee Management", "React"],
      category: "HR Platform",
      link: "https://hr-management-zeta-five.vercel.app/",
      github: "#",
      featured: false,
    },
    {
      id: 14,
      title: "Stream Admin Analytics Dashboard",
      description:
        "A real-time streaming analytics dashboard providing live viewer counts, peak audience tracking, geographic distribution maps, engagement metrics, and comprehensive stream performance data.",
      image: liveAdminImg,
      technologies: ["Real-time Analytics", "Dashboard", "Live Streaming"],
      category: "Analytics Platform",
      link: "https://live-admin-ashy.vercel.app/",
      github: "#",
      featured: false,
    },
       {
      id: 15,
      title: "KiteCredit - AI Agent Lending Protocol",
      description:
        "AI-powered lending protocol on Kite blockchain. Earn yield, build credit, borrow smart.",
      image: Kitecredit,
      technologies: ["Blockchain", "DeFi", "AI", "Lending Protocol"],
      category: "FinTech / DeFi",
      link: "https://frontend-beryl-iota-43.vercel.app/",
      github: "#",
      featured: false,
    },
        {
      id: 16,
      title: "StreamFlow Analytics Platform",
      description:
        "Advanced analytics platform for real-time data streaming, performance monitoring, and comprehensive metrics visualization.",
      image: streamflow,
      technologies: ["Real-time Analytics", "Data Streaming", "Dashboard"],
      category: "Analytics Platform",
      link: "https://stream-flow-v2.vercel.app/",
      github: "#",
      featured: false,
    },
         {
      id: 17,
      title: "EduFund Education Platform",
      description:
        "Educational funding and showcase platform connecting students, educators, and sponsors for academic opportunities and achievements.",
      image: EduFund,
      technologies: ["Education", "Funding Platform", "Showcase"],
      category: "EdTech",
      link: "https://edushowcase12.vercel.app/",
      github: "#",
      featured: false,
    },
  ];
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Portfolio{" "}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Showcasing our best work and successful project deliveries
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Our most impactful and innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Case Study: E-Commerce Platform
              </h2>
              <p className="text-lg text-gray-600">
                Deep dive into our most successful project
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="E-Commerce Platform"
                      width={400}
                      height={300}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                    <p className="text-gray-600 mb-6">
                      Our client needed a scalable e-commerce platform that
                      could handle high traffic volumes during peak seasons
                      while providing a seamless user experience across all
                      devices.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                    <p className="text-gray-600 mb-6">
                      We built a modern, responsive platform using React and
                      Next.js with a robust backend infrastructure that can
                      scale automatically based on demand.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          300%
                        </div>
                        <div className="text-sm text-gray-600">
                          Increase in Sales
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          50%
                        </div>
                        <div className="text-sm text-gray-600">
                          Faster Load Times
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Other Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Projects
            </h2>
            <p className="text-lg text-gray-600">
              Additional work showcasing our diverse capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            proven expertise
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
