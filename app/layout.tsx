import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Sabih Software Design Company",
    description:
        "Leading software development company specializing in web development, mobile apps, UI/UX design, DevOps, 3D animation, and 3D websites.",
    keywords:
        "software development, web development, mobile apps, UI/UX design, DevOps, 3D animation, 3D websites",
    generator: "Sabih Software Design Company",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
