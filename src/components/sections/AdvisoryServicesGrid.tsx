"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import services from "@/data/services";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function AdvisoryServicesGrid() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    return (
        <section className="bg-white py-10 lg:py-16">
            <div className="max-w-screen-lg mx-auto px-6">
                <SectionTitle title="Advisory Services" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-stretch">
                        {(services.length % 2 !== 0 ? services.slice(0, services.length - 1) : services).map((service, index) => {
                            const isHovered = hoveredService === service.id;

                            let pillText = "";
                            if (service.timeframe?.toLowerCase().includes("module")) {
                                pillText = "Workshop";
                            } else if (service.timeframe?.toLowerCase().includes("assignment")) {
                                pillText = "Project-Based";
                            }

                            const subject = `Enquiry: ${service.title}`;
                            const mailtoHref = `mailto:kanyitoday@gmail.com?subject=${encodeURIComponent(subject)}`;

                            return (
                                <motion.div
                                    key={service.id || index}
                                    variants={staggerItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.25, delay: Math.min(index * 0.08, 0.4) }}
                                    className="bg-white border rounded-xl overflow-hidden flex flex-col relative transition-colors duration-250 h-full"
                                    style={{
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                        borderColor: isHovered ? "#1B2A4A" : "#DDE1E7",
                                        transition: "border-color 0.25s ease"
                                    }}
                                    onMouseEnter={() => setHoveredService(service.id)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    {/* CARD HEADER ZONE */}
                                    <div className="bg-navy px-6 py-5 lg:px-8 lg:py-6 relative overflow-hidden flex items-center min-h-[120px]">
                                        <div className="absolute -bottom-4 right-3 pointer-events-none">
                                            <span className="font-cormorant text-white opacity-5 text-[5rem] lg:text-[8rem] font-semibold leading-none">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="font-cormorant text-white text-lg lg:text-xl font-semibold leading-snug w-full relative z-10 pr-12">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* CARD CONTENT ZONE */}
                                    <div className="bg-white px-6 py-5 lg:px-8 lg:py-6 flex-1 flex flex-col">
                                        <p className="font-body text-charcoal text-sm leading-relaxed flex-1 min-h-[160px]">
                                            {service.summary}
                                        </p>

                                        <div className="h-[1px] bg-bordergrey mt-5 mb-4"></div>

                                        <div className="min-h-[110px]">
                                            <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                BEST FOR
                                            </div>
                                            <p className="font-body text-charcoal text-sm leading-relaxed">
                                                {service.bestFor}
                                            </p>
                                        </div>

                                        <div className="min-h-[90px] mt-2">
                                            <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                COVERS
                                            </div>
                                            <p className="font-body text-charcoal text-sm leading-relaxed">
                                                {service.covers}
                                            </p>
                                        </div>

                                        <div className="min-h-[60px] mt-2">
                                            <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                TIMEFRAME
                                            </div>
                                            <p className="font-body text-charcoal text-sm">
                                                {service.timeframe}
                                            </p>
                                        </div>

                                        <div className="min-h-[60px] mt-2">
                                            <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                INVESTMENT
                                            </div>
                                            <p className="font-body text-navy text-sm font-semibold">
                                                {service.investment}
                                            </p>
                                        </div>

                                        {/* CARD FOOTER */}
                                        <div className="mt-4 pt-4 border-t border-bordergrey flex flex-row justify-between items-center gap-4">
                                            {pillText ? (
                                                <span className="bg-softblue border border-bordergrey rounded-full px-3 py-1 font-body text-navy opacity-60 text-xs font-medium">
                                                    {pillText}
                                                </span>
                                            ) : (
                                                <div></div>
                                            )}
                                            <a
                                                href={mailtoHref}
                                                className="inline-flex items-center gap-2 bg-navy text-white font-body text-xs font-semibold uppercase tracking-wide rounded-full px-5 py-2.5 transition-all duration-200 hover:opacity-90"
                                            >
                                                ENQUIRE
                                                <Mail size={12} className="text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    {services.length % 2 !== 0 && (
                        <div className="mt-6 flex justify-center w-full">
                            <div className="w-full lg:w-[calc(50%-12px)] flex flex-col items-stretch">
                                {(() => {
                                    const service = services[services.length - 1];
                                    const index = services.length - 1;
                                    const isHovered = hoveredService === service.id;

                                    let pillText = "";
                                    if (service.timeframe?.toLowerCase().includes("module")) {
                                        pillText = "Workshop";
                                    } else if (service.timeframe?.toLowerCase().includes("assignment")) {
                                        pillText = "Project-Based";
                                    }

                                    const subject = `Enquiry: ${service.title}`;
                                    const mailtoHref = `mailto:kanyitoday@gmail.com?subject=${encodeURIComponent(subject)}`;

                                    return (
                                        <motion.div
                                            key={service.id || index}
                                            variants={staggerItem}
                                            whileHover={{ y: -4 }}
                                            transition={{ duration: 0.25, delay: Math.min(index * 0.08, 0.4) }}
                                            className="bg-white border rounded-xl overflow-hidden flex flex-col relative transition-colors duration-250 h-full"
                                            style={{
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                                borderColor: isHovered ? "#1B2A4A" : "#DDE1E7",
                                                transition: "border-color 0.25s ease"
                                            }}
                                            onMouseEnter={() => setHoveredService(service.id)}
                                            onMouseLeave={() => setHoveredService(null)}
                                        >
                                            {/* CARD HEADER ZONE */}
                                            <div className="bg-navy px-6 py-5 lg:px-8 lg:py-6 relative overflow-hidden flex items-center min-h-[120px]">
                                                <div className="absolute -bottom-4 right-3 pointer-events-none">
                                                    <span className="font-cormorant text-white opacity-5 text-[5rem] lg:text-[8rem] font-semibold leading-none">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                </div>
                                                <h3 className="font-cormorant text-white text-lg lg:text-xl font-semibold leading-snug w-full relative z-10 pr-12">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* CARD CONTENT ZONE */}
                                            <div className="bg-white px-6 py-5 lg:px-8 lg:py-6 flex-1 flex flex-col">
                                                <p className="font-body text-charcoal text-sm leading-relaxed flex-1 min-h-[160px]">
                                                    {service.summary}
                                                </p>

                                                <div className="h-[1px] bg-bordergrey mt-5 mb-4"></div>

                                                <div className="min-h-[110px]">
                                                    <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                        BEST FOR
                                                    </div>
                                                    <p className="font-body text-charcoal text-sm leading-relaxed">
                                                        {service.bestFor}
                                                    </p>
                                                </div>

                                                <div className="min-h-[90px] mt-2">
                                                    <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                        COVERS
                                                    </div>
                                                    <p className="font-body text-charcoal text-sm leading-relaxed">
                                                        {service.covers}
                                                    </p>
                                                </div>

                                                <div className="min-h-[60px] mt-2">
                                                    <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                        TIMEFRAME
                                                    </div>
                                                    <p className="font-body text-charcoal text-sm">
                                                        {service.timeframe}
                                                    </p>
                                                </div>

                                                <div className="min-h-[60px] mt-2">
                                                    <div className="font-body text-navy opacity-40 text-xs uppercase tracking-widest mb-1.5">
                                                        INVESTMENT
                                                    </div>
                                                    <p className="font-body text-navy text-sm font-semibold">
                                                        {service.investment}
                                                    </p>
                                                </div>

                                                {/* CARD FOOTER */}
                                                <div className="mt-auto pt-4 border-t border-bordergrey flex flex-row justify-between items-center gap-4">
                                                    {pillText ? (
                                                        <span className="bg-softblue border border-bordergrey rounded-full px-3 py-1 font-body text-navy opacity-60 text-xs font-medium">
                                                            {pillText}
                                                        </span>
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                    <a
                                                        href={mailtoHref}
                                                        className="inline-flex items-center gap-2 bg-navy text-white font-body text-xs font-semibold uppercase tracking-wide rounded-full px-5 py-2.5 transition-all duration-200 hover:opacity-90"
                                                    >
                                                        ENQUIRE
                                                        <Mail size={12} className="text-white" />
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })()}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
