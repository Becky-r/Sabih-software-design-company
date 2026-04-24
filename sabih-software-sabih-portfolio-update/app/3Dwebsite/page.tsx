"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "@react-three/drei";

const ThreeDWebsitePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground p-8 md:py-24 selection:bg-primary/30 relative overflow-hidden">
            {/* Ambient Animated Blobs for extra depth */}
            <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 tracking-tight">
                    Discover the Power of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        3D Websites
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-slate-400 leading-relaxed">
                    3D websites bring interactive, immersive, and visually
                    stunning experiences to users. From product showcases to
                    creative portfolios, 3D elevates your digital presence.
                </p>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            title: "Immersive Design",
                            desc: "Engage users with realistic and interactive visuals.",
                        },
                        {
                            title: "Interactive Experience",
                            desc: "Navigate products or scenes in real-time with mouse and touch support.",
                        },
                        {
                            title: "Creative Freedom",
                            desc: "Design without limits – animations, depth, and spatial storytelling.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group"
                        >
                            <h2 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                                {item.title}
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3D Demo */}
                <div className="mb-24">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Live 3D Demo
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Interact with the 3D object below – drag to rotate
                            and scroll to zoom.
                        </p>
                    </div>
                    <div className="h-[500px] w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden mb-16 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-50 pointer-events-none" />
                        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight
                                position={[5, 5, 5]}
                                intensity={1.5}
                                color="#818cf8"
                            />
                            <pointLight
                                position={[-5, -5, -5]}
                                intensity={1}
                                color="#c084fc"
                            />
                            <OrbitControls
                                enableZoom={true}
                                autoRotate
                                autoRotateSpeed={2}
                            />
                            <Box args={[2, 2, 2]}>
                                <meshStandardMaterial
                                    color="#6366f1"
                                    roughness={0.2}
                                    metalness={0.8}
                                />
                            </Box>
                        </Canvas>
                    </div>
                </div>

                {/* Why Choose 3D */}
                <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-50 pointer-events-none" />
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                            Why Choose 3D Websites?
                        </h2>
                        <ul className="text-left text-slate-300 space-y-4 text-lg">
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                                Next-level user engagement and retention
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-purple-500" />
                                Stand out in crowded digital markets
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                                Perfect for product visualization and
                                storytelling
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-purple-500" />
                                Compatible with modern browsers and responsive
                                on all devices
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeDWebsitePage;
