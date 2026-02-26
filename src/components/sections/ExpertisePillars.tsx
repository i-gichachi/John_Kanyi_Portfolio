"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import competenciesData from "@/data/competencies";

export default function ExpertisePillars() {
    const pillars = [
        {
            number: "01",
            title: "Funding and Business Development",
            description: "Intelligence-led pipeline management and competitive proposal strategy that consistently converts opportunities into awards.",
            competencies: (competenciesData || []).filter((c: any) => c.pillar === "Funding and Business Development"),
            anchorHref: "/expertise#funding-pillar",
        },
        {
            number: "02",
            title: "Grants and Programme Management",
            description: "End-to-end grant lifecycle management with zero audit findings across $75M+ in active portfolios across sub-Saharan Africa.",
            competencies: (competenciesData || []).filter((c: any) => c.pillar === "Grants and Programme Management"),
            anchorHref: "/expertise#grants-pillar",
        },
        {
            number: "03",
            title: "Capacity and Leadership",
            description: "Transforming local implementing partners into high-performing grant-ready organisations across 15+ African countries over 17 years.",
            competencies: (competenciesData || []).filter((c: any) => c.pillar === "Capacity and Leadership"),
            anchorHref: "/expertise#capacity-pillar",
        },
    ];

    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[24px]">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        title="Areas of Expertise"
                        subtitle="Three pillars that define my professional value across 17 years of international development."
                        align="center"
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[28px] mt-[32px] lg:mt-[48px]"
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-white rounded-xl p-[24px] lg:p-[40px] shadow-md border border-bordergrey relative overflow-hidden group hover:shadow-[0_8px_48px_rgba(0,0,0,0.14)] hover:-translate-y-[4px] transition-all duration-300"
                        >
                            {/* Navy left border on hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Decorative Number */}
                            <div
                                className="absolute top-[-16px] right-[16px] font-cormorant text-navy text-[6rem] lg:text-[8rem] font-semibold opacity-5 leading-none pointer-events-none"
                            >
                                {pillar.number}
                            </div>

                            <div className="relative z-10 w-full">
                                <div className="w-[32px] h-[2px] bg-gold mb-[16px]" />

                                <h3 className="font-cormorant text-navy text-xl lg:text-2xl font-semibold leading-snug">
                                    {pillar.title}
                                </h3>

                                <p className="font-inter text-muted text-sm leading-relaxed mt-[8px] mb-[20px]">
                                    {pillar.description}
                                </p>

                                <div className="w-full h-[1px] bg-bordergrey" />

                                <div className="mt-[16px] flex flex-col">
                                    {pillar.competencies.map((comp: any, cIndex: number) => (
                                        <div
                                            key={cIndex}
                                            className="flex flex-row items-center gap-[10px] py-[8px] border-b border-bordergrey last:border-b-0 hover:bg-softblue hover:rounded-[6px] hover:px-[8px] transition-all duration-200 group/item cursor-default"
                                        >
                                            <ChevronRight className="w-[14px] h-[14px] text-navy flex-shrink-0" />
                                            <span className="font-inter text-charcoal text-sm font-medium group-hover/item:text-navy transition-colors duration-200">
                                                {comp.title || comp.name || comp}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-[16px] flex justify-end">
                                    <Link href={pillar.anchorHref}>
                                        <motion.div
                                            className="flex flex-row items-center gap-1 cursor-pointer group/link"
                                            whileHover="hover"
                                        >
                                            <span className="font-inter text-navy text-xs font-semibold">Explore</span>
                                            <motion.div
                                                variants={{
                                                    hover: { x: 3 }
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowRight className="w-[14px] h-[14px] text-navy" />
                                            </motion.div>
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-[48px] flex justify-center"
                >
                    <Button
                        href="/expertise"
                        variant="primary"
                        label="Explore Full Expertise"
                    />
                </motion.div>
            </div>
        </section>
    );
}
