"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useState } from "react";

const capabilities = [
    {
        name: "Grants and Business Development",
        description: "Securing and managing donor-funded programmes across the full award lifecycle.",
        years: "17"
    },
    {
        name: "Compliance and Risk Management",
        description: "Zero audit findings across every portfolio managed.",
        years: "12"
    },
    {
        name: "Capacity Building",
        description: "Strengthened 200+ local organisations across sub-Saharan Africa.",
        years: "15"
    },
    {
        name: "Remote Programme Leadership",
        description: "Led complex multi-country programmes across 15 African countries entirely remotely.",
        years: "10"
    }
];

export default function AdvisoryWhyJohn() {
    const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

    return (
        <section className="bg-white py-10 lg:py-16">
            <div className="max-w-screen-lg mx-auto px-6">
                <SectionTitle title="The Difference" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    {/* LEFT COLUMN */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col"
                    >
                        <h3 className="font-cormorant text-navy text-2xl lg:text-3xl font-semibold leading-snug">
                            Most consultants bring frameworks. I bring 17 years of knowing exactly what donors want and how to deliver it.
                        </h3>

                        <div className="h-[1px] bg-bordergrey w-[64px] mt-5 mb-5"></div>

                        <p className="font-body text-charcoal text-sm leading-relaxed">
                            Every advisory engagement I take on is grounded in the same discipline that built a $250M pipeline, sustained a 65% win rate and delivered zero audit findings across some of the most demanding donor environments in global health. This is not theoretical. This is applied expertise built across 17 years and 15 African countries.
                        </p>

                        <div className="flex flex-col gap-3 mt-6">
                            <div className="flex flex-row items-start gap-4">
                                <div className="w-[6px] h-[6px] bg-navy rounded-sm flex-shrink-0 mt-[6px]"></div>
                                <p className="font-body text-charcoal text-sm leading-relaxed">
                                    GPC, CPA, PMP, CFCM and PMD certified. Five credentials that cover every dimension of grants, compliance and programme leadership.
                                </p>
                            </div>
                            <div className="flex flex-row items-start gap-4">
                                <div className="w-[6px] h-[6px] bg-navy rounded-sm flex-shrink-0 mt-[6px]"></div>
                                <p className="font-body text-charcoal text-sm leading-relaxed">
                                    Published researcher in grants management and emotional intelligence with peer-reviewed work in international journals.
                                </p>
                            </div>
                            <div className="flex flex-row items-start gap-4">
                                <div className="w-[6px] h-[6px] bg-navy rounded-sm flex-shrink-0 mt-[6px]"></div>
                                <p className="font-body text-charcoal text-sm leading-relaxed">
                                    Dual Master's degrees combining international business management with project management for a genuinely cross-disciplinary advisory capability.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col gap-4"
                    >
                        {capabilities.map((capability, index) => {
                            const isHovered = hoveredCapability === index;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                >
                                    <div
                                        className="bg-softblue border rounded-xl p-5 transition-all duration-200"
                                        style={{
                                            borderColor: isHovered ? "#1B2A4A" : "#DDE1E7",
                                            transition: "border-color 0.2s ease"
                                        }}
                                        onMouseEnter={() => setHoveredCapability(index)}
                                        onMouseLeave={() => setHoveredCapability(null)}
                                    >
                                        <div className="flex flex-row justify-between items-start gap-4">
                                            <div className="flex flex-col flex-1">
                                                <h4 className="font-cormorant text-navy text-base font-semibold">
                                                    {capability.name}
                                                </h4>
                                                <p className="font-body text-muted text-xs leading-relaxed mt-1">
                                                    {capability.description}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="w-[36px] h-[36px] bg-white border border-bordergrey rounded-full flex items-center justify-center">
                                                    <span className="font-cormorant text-navy text-sm font-semibold">
                                                        {capability.years}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
