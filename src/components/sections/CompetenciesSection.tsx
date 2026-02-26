"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import competencies from "@/data/competencies";

const pillarGroups = [
    {
        id: 1,
        number: "01",
        title: "Funding and Business Development",
        anchorId: "funding-pillar",
        bgColor: "bg-softblue",
    },
    {
        id: 2,
        number: "02",
        title: "Grants and Programme Management",
        anchorId: "grants-pillar",
        bgColor: "bg-white",
    },
    {
        id: 3,
        number: "03",
        title: "Capacity and Leadership",
        anchorId: "capacity-pillar",
        bgColor: "bg-softblue",
    },
];

export const CompetenciesSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    let competencyCounter = 0;

    const renderCard = (comp: any) => {
        competencyCounter += 1;
        const paddedNumber = String(competencyCounter).padStart(2, '0');

        return (
            <motion.div
                key={comp.id}
                variants={staggerItem}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="h-full"
            >
                <div
                    onMouseEnter={() => setHoveredCard(comp.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                        borderColor: hoveredCard === comp.id ? "#1B2A4A" : "#DDE1E7",
                        transition: "border-color 0.25s ease"
                    }}
                    className="bg-white border rounded-xl p-[24px] lg:p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative overflow-hidden h-full flex flex-col transition-all duration-250"
                >
                    <div className="absolute top-[-8px] right-[10px] pointer-events-none font-cormorant text-navy opacity-[0.04] text-[5rem] lg:text-[7rem] font-semibold leading-none">
                        {paddedNumber}
                    </div>

                    <div className="w-[8px] h-[8px] bg-navy opacity-25 rounded-sm mb-[20px] shrink-0" />

                    <h3 className="font-cormorant text-navy text-lg lg:text-xl font-semibold leading-snug">
                        {comp.title}
                    </h3>

                    <div className="h-[1px] bg-bordergrey mt-[12px] mb-[16px]" />

                    <p className="font-inter text-charcoal text-sm leading-relaxed flex-1">
                        {comp.description}
                    </p>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="w-full">
            {/* PAGE IDENTITY ROW */}
            <div className="bg-softblue pt-8 pb-4 lg:pt-12 lg:pb-6 w-full">
                <div className="max-w-screen-lg mx-auto px-6 text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={staggerItem} className="flex flex-row items-center justify-center gap-3 mb-[12px]">
                            <div className="w-[40px] h-[1px] bg-navy opacity-20" />
                            <span className="font-inter text-navy opacity-40 uppercase tracking-widest text-xs font-medium">
                                AREAS OF EXPERTISE
                            </span>
                            <div className="w-[40px] h-[1px] bg-navy opacity-20" />
                        </motion.div>

                        <motion.div variants={staggerItem}>
                            <h1 className="font-cormorant text-navy text-3xl lg:text-5xl font-semibold leading-tight text-center mt-[12px]">
                                Nine Disciplines. One Direction.
                            </h1>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* PILLAR SECTIONS */}
            {pillarGroups.map((pillar) => {
                const filteredCompetencies = competencies.filter(c => c.pillar === pillar.title);
                const isOdd = filteredCompetencies.length % 2 !== 0;

                return (
                    <section
                        key={pillar.id}
                        id={pillar.anchorId}
                        className={`${pillar.bgColor} py-8 lg:py-12 w-full`}
                    >
                        <div className="max-w-screen-lg mx-auto px-6">
                            {/* PILLAR HEADER */}
                            <motion.div
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="flex flex-row items-center gap-3 mb-[8px]">
                                    <div className="w-[24px] h-[1px] bg-navy opacity-30" />
                                    <span className="font-inter text-muted-grey text-xs font-semibold uppercase tracking-widest">
                                        {pillar.number}
                                    </span>
                                </div>
                                <h2 className="font-cormorant text-navy text-2xl lg:text-3xl font-semibold leading-snug mt-[4px]">
                                    {pillar.title}
                                </h2>
                                <div className="w-full h-[1px] bg-bordergrey mt-[20px] mb-[40px]" />
                            </motion.div>

                            {/* COMPETENCY CARDS */}
                            {isOdd ? (
                                <>
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-80px" }}
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[32px]"
                                    >
                                        {filteredCompetencies.slice(0, 2).map((comp) => renderCard(comp))}
                                    </motion.div>
                                    <div className="mt-8 flex justify-center">
                                        <div className="w-full lg:w-[calc(50%-16px)]">
                                            <motion.div
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-80px" }}
                                            >
                                                {filteredCompetencies.slice(2).map((comp) => renderCard(comp))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-80px" }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[32px]"
                                >
                                    {filteredCompetencies.map((comp) => renderCard(comp))}
                                </motion.div>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default CompetenciesSection;
