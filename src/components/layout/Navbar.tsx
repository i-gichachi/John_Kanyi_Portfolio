"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Profile", href: "/profile" },
        { name: "Expertise", href: "/expertise" },
        { name: "Impact", href: "/impact" },
        { name: "Advisory", href: "/advisory" },
    ];

    return (
        <>
            <header
                className={`w-full sticky top-0 bg-navy h-[70px] z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-none"
                    }`}
            >
                <div className="w-full h-full px-6 flex items-center justify-between xl:px-[120px]">
                    {/* LEFT SIDE */}
                    <Link href="/" className="font-cormorant text-white text-[24px] font-semibold flex items-center z-50">
                        John Kanyi<span className="text-gold">.</span>
                    </Link>

                    {/* RIGHT SIDE DESKTOP */}
                    <nav className="hidden md:flex items-center gap-[36px]">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-inter text-sm transition-colors duration-200 py-1 border-b-[2px] ${isActive
                                            ? "text-gold border-gold"
                                            : "text-white hover:text-gold border-transparent"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <a
                            href="mailto:kanyitoday@gmail.com"
                            className="bg-gold text-white font-inter rounded-[6px] px-[10px] py-[8px] hover:brightness-90 transition-all text-sm"
                        >
                            Book a Consultation
                        </a>
                    </nav>

                    {/* MOBILE NAVIGATION TOGGLE */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gold focus:outline-none"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-navy z-40 flex flex-col justify-center items-center"
                    >
                        {/* The prompt mentions X icon in the top right corner. 
                            Since we toggled in the header, we can just let the header's X close it.
                            If we want another one, we can add it, but it's redundant. We'll add one just to be safe.
                        */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gold absolute top-[21px] right-6 p-1 z-50"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>

                        <nav className="flex flex-col items-center gap-[32px]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-cormorant text-white text-3xl font-semibold"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="mailto:kanyitoday@gmail.com"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-gold text-white font-inter rounded-[6px] px-[10px] py-[8px] hover:brightness-90 transition-all"
                            >
                                Book a Consultation
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
