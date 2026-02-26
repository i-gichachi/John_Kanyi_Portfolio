"use client";

import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import heroData from "@/data/hero";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Profile", href: "/profile" },
        { name: "Expertise", href: "/expertise" },
        { name: "Impact", href: "/impact" },
        { name: "Advisory", href: "/advisory" },
    ];

    const tagline = heroData?.tagline || "I secure complex funding and build sustainable programmes across sub-Saharan Africa. Specialising in USAID, CDC, and European institutional grants.";

    return (
        <footer className="relative bg-navy overflow-hidden px-[16px] lg:px-[120px] pt-[32px] pb-[16px] lg:pt-[48px] lg:pb-[32px]">
            {/* Watermark Text */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 font-cormorant text-white opacity-3 text-[4rem] lg:text-[10rem] font-semibold text-center pointer-events-none whitespace-nowrap z-0 select-none">
                JOHN KANYI
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto">
                {/* Main Grid */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-[48px]"
                >

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="font-cormorant text-white text-2xl font-semibold flex items-center">
                            John Kanyi<span className="text-gold">.</span>
                        </Link>

                        <div className="font-inter text-white text-sm mt-[8px]">
                            Senior Grants and Business Development Leader
                        </div>

                        <p className="font-inter text-white/50 text-xs leading-relaxed mt-[12px] max-w-[260px]">
                            {tagline}
                        </p>

                        <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-[6px] mt-[16px]">
                            {["GPC", "PMP", "CFCM", "CPA", "PMD"].map((cert) => (
                                <span key={cert} className="bg-transparent border border-white/30 rounded-full px-[6px] py-[3px] font-inter text-white/70 text-xs">
                                    {cert}
                                </span>
                            ))}
                        </div>

                        <a
                            href="https://www.linkedin.com/in/john-kanyi-mba/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[16px] inline-block hover:opacity-100 opacity-80 transition-opacity"
                        >
                            <Linkedin size={20} className="text-white" />
                        </a>
                    </div>

                    {/* CENTRE COLUMN */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="font-inter text-white/40 text-xs uppercase tracking-widest mb-[20px]">
                            NAVIGATION
                        </h4>

                        <nav className="flex flex-col gap-[12px] items-center lg:items-start w-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex flex-row items-center justify-center lg:justify-start gap-[8px] group w-full lg:w-auto"
                                >
                                    <div className="hidden lg:block w-[0px] h-[1px] bg-gold transition-all duration-200 group-hover:w-[12px]" />
                                    <span className="font-inter text-white/70 text-sm transition-opacity duration-200 group-hover:text-white">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="font-inter text-white/40 text-xs uppercase tracking-widest mb-[20px]">
                            GET IN TOUCH
                        </h4>

                        <div className="flex flex-col gap-[12px] items-center lg:items-start w-full">
                            <a href="mailto:kanyitoday@gmail.com" className="flex flex-row items-start gap-[10px] group text-center lg:text-left">
                                <Mail size={16} className="text-white/80 group-hover:text-white transition-colors flex-shrink-0 mt-[1px]" />
                                <span className="font-inter text-white/70 text-sm transition-opacity duration-200 group-hover:text-white">
                                    kanyitoday@gmail.com
                                </span>
                            </a>

                            <a href="tel:+254717744563" className="flex flex-row items-start gap-[10px] group text-center lg:text-left">
                                <Phone size={16} className="text-white/80 group-hover:text-white transition-colors flex-shrink-0 mt-[1px]" />
                                <span className="font-inter text-white/70 text-sm transition-opacity duration-200 group-hover:text-white">
                                    +254 717 744 563
                                </span>
                            </a>

                            <a href="https://linkedin.com/in/john-kanyi-mba" target="_blank" rel="noopener noreferrer" className="flex flex-row items-start gap-[10px] group text-center lg:text-left">
                                <Linkedin size={16} className="text-white/80 group-hover:text-white transition-colors flex-shrink-0 mt-[1px]" />
                                <span className="font-inter text-white/70 text-sm transition-opacity duration-200 group-hover:text-white">
                                    linkedin.com/in/john-kanyi-mba
                                </span>
                            </a>

                            <div className="flex flex-row items-start gap-[10px] group text-center lg:text-left">
                                <MapPin size={16} className="text-white/80 group-hover:text-white transition-colors flex-shrink-0 mt-[1px]" />
                                <span className="font-inter text-white/70 text-sm">
                                    Nairobi, Kenya
                                </span>
                            </div>
                        </div>

                        <div className="mt-[24px]">
                            <Button
                                href="mailto:kanyitoday@gmail.com"
                                variant="primary"
                                label="Book a Consultation"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* GOLD DIVIDER */}
                <div className="w-full h-[1px] bg-gold/15 mt-[48px]" />

                {/* BOTTOM COPYRIGHT STRIP */}
                <div className="flex justify-center w-full">
                    <p className="font-inter text-white/40 text-xs text-center w-full py-6">
                        Copyright 2026 John Kanyi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
