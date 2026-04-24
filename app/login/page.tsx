"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Mail, EyeOff, Eye, ShieldCheck, ArrowRight } from "lucide-react";

// Dynamically import the 3D scene to prevent SSR hydration errors
const LoginScene3D = dynamic(() => import("@/components/three/LoginScene3D"), {
    ssr: false,
});

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen flex flex-col md:flex-row bg-background overflow-hidden selection:bg-primary/30">
            {/* 3D Background - Left Side */}
            <div className="absolute inset-0 z-0 md:relative w-full md:w-1/2 h-screen flex items-center justify-center">
                <LoginScene3D />

                {/* Ambient Animated Blobs for extra depth */}
                <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob pointer-events-none" />
                <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000 pointer-events-none" />
            </div>

            {/* Main Content Container - Right Side */}
            <div className="relative z-10 w-full min-h-screen md:min-h-0 md:w-1/2 flex flex-col items-center justify-center px-4 py-10 md:py-0">
                <div className="w-full max-w-md">
                    {/* Plain Form Container */}
                    <div className="relative w-full bg-black/20 backdrop-blur-lg border border-white/10 rounded-[2rem] p-6 sm:p-8 md:bg-transparent md:backdrop-blur-none md:border-transparent md:p-0 md:rounded-none">
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="text-center mb-10">
                                <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                    <ShieldCheck className="h-10 w-10 text-indigo-400" />
                                </div>
                                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                                    Welcome Back
                                </h1>
                                <p className="text-slate-400 text-sm">
                                    Securely access your client portal and
                                    project files.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="space-y-6">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-300 ml-1 uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <div className="relative group/input">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                                        <input
                                            type="email"
                                            placeholder="hello@example.com"
                                            className="w-full bg-black/20 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-300 ml-1 uppercase tracking-wider">
                                        Password
                                    </label>
                                    <div className="relative group/input">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="••••••••••••"
                                            className="w-full bg-black/20 border border-white/10 rounded-2xl pl-12 pr-12 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all tracking-wider"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-white transition-colors focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="remember"
                                            className="border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                                        />
                                        <label
                                            htmlFor="remember"
                                            className="text-sm text-slate-300 cursor-pointer select-none hover:text-white transition-colors"
                                        >
                                            Remember device
                                        </label>
                                    </div>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <Button className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(79,70,229,0.4)] mt-4">
                                    Sign In
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>

                            {/* Footer Links */}
                            <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                <p className="text-sm text-slate-400">
                                    Don't have an account?{" "}
                                    <Link
                                        href="/contact"
                                        className="text-white font-medium hover:text-indigo-400 transition-colors"
                                    >
                                        Request access
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outside Support Link */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            Need technical support? Contact{" "}
                            <a
                                href="mailto:support@sabihsoftware.com"
                                className="text-slate-300 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all"
                            >
                                support@sabihsoftware.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
