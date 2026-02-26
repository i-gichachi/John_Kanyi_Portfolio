"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ChevronDown, ChevronUp } from "lucide-react";
import caseStudies from "@/data/caseStudies";

export default function ImpactCaseStudies() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8 w-full"
        >
            {caseStudies.map((study, index) => {
                const bgClass = index === 0 || index === 2 || index === 4 ? "bg-softblue" : "bg-white";
                return (
                    <section key={study.id} id={study.slug} className={`${bgClass} py-8 lg:py-12 w-full`}>
                        <div className="max-w-screen-lg mx-auto px-6">
                            <CaseStudyCard study={study} index={index} />
                        </div>
                    </section>
                );
            })}
        </motion.div>
    );
}

function CaseStudyCard({ study, index }: { study: any; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [logoError, setLogoError] = useState(false);

    return (
        <motion.div
            variants={staggerItem}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={!isExpanded ? { boxShadow: "0 16px 64px rgba(0,0,0,0.13)", transition: { duration: 0.3 } } : {}}
            className="bg-white border border-bordergrey rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.09)] transition-shadow duration-300"
        >
            {/* ZONE 1 COLLAPSED HEADER STRIP */}
            <div className="bg-navy p-[24px] lg:p-[32px] relative overflow-hidden">
                <div className="absolute font-cormorant text-white opacity-[0.04] text-[10rem] font-semibold leading-none bottom-[-20px] right-[20px] pointer-events-none">
                    {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="flex flex-row justify-between items-start gap-6 relative z-10">
                    <div className="flex flex-col">
                        <div className="font-inter text-white opacity-40 text-xs uppercase tracking-widest mb-[10px]">
                            CASE STUDY {(index + 1).toString().padStart(2, "0")} OF 05
                        </div>
                        <h3 className="font-cormorant text-white text-xl lg:text-3xl font-semibold leading-snug max-w-[680px]">
                            {study.title}
                        </h3>
                        <div className="flex flex-row items-center gap-3 mt-[16px]">
                            <span className="font-inter text-white opacity-60 text-sm font-medium">{study.organization}</span>
                            <div className="w-[4px] h-[4px] bg-white opacity-30 rounded-full" />
                            <span className="font-inter text-white opacity-40 text-sm">{study.donor}</span>
                            <div className="w-[4px] h-[4px] bg-white opacity-30 rounded-full" />
                            <span className="font-inter text-white opacity-40 text-sm">{study.location}</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col items-end gap-3 shrink-0">
                        <div className="h-[36px] flex items-center justify-end">
                            {logoError ? (
                                <span className="font-inter text-white opacity-50 text-xs uppercase tracking-wide">
                                    {study.organization}
                                </span>
                            ) : (
                                <Image
                                    src={study.logo}
                                    alt={study.organization}
                                    width={120}
                                    height={36}
                                    className="object-contain w-auto h-[36px]"
                                    onError={() => setLogoError(true)}
                                />
                            )}
                        </div>
                        <div className="border border-white border-opacity-20 rounded-full px-3 py-1">
                            <span className="font-inter text-white opacity-60 text-xs">{study.programmeValue} Programme</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ZONE 2 COLLAPSED CONTENT BODY */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 p-[24px] lg:p-[32px] border-r-0 lg:border-r border-bordergrey flex flex-col">
                    <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[12px]">
                        EXECUTIVE SUMMARY
                    </div>
                    <div className="font-inter text-charcoal text-base leading-relaxed">
                        {study.executiveSummary}
                    </div>

                    <div className="mt-[24px] pt-[20px] border-t border-bordergrey flex flex-row flex-wrap gap-2">
                        {study.coreCompetencies?.map((comp: string, cIndex: number) => (
                            <span
                                key={`comp-${cIndex}`}
                                className="bg-softblue border border-bordergrey rounded-full px-3 py-1 font-inter text-navy opacity-70 text-xs"
                            >
                                {comp}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-1 bg-softblue p-[24px] lg:p-[32px] h-full">
                    <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[20px]">
                        KEY RESULTS
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        {study.featuredMetrics?.map((metric: any, mIndex: number) => (
                            <div key={mIndex} className="flex flex-col">
                                <div className="font-cormorant text-navy text-4xl font-semibold leading-none">
                                    {metric.value}
                                </div>
                                <div className="w-[24px] h-[1px] bg-navy opacity-20 mt-[6px] mb-[6px]" />
                                <div className="font-inter text-mutedgrey text-xs leading-relaxed">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-[1px] bg-bordergrey mt-[24px] mb-[20px]" />

                    <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[6px]">
                        ORGANISATION
                    </div>
                    <div className="font-inter text-charcoal text-sm font-medium">
                        {study.organization}
                    </div>

                    <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mt-[16px] mb-[6px]">
                        PROGRAMME VALUE
                    </div>
                    <div className="font-inter text-navy text-sm font-semibold">
                        {study.programmeValue}
                    </div>

                    <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mt-[16px] mb-[6px]">
                        DONOR
                    </div>
                    <div className="font-inter text-charcoal text-sm">
                        {study.donor}
                    </div>

                    <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mt-[16px] mb-[6px]">
                        LOCATION
                    </div>
                    <div className="font-inter text-charcoal text-sm">
                        {study.location}
                    </div>
                </div>
            </div>

            {/* ZONE 3 COLLAPSED CTA STRIP */}
            {!isExpanded && (
                <div className="border-t border-bordergrey p-[20px] lg:p-[24px] flex justify-end items-center">
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="inline-flex items-center gap-2 bg-navy text-white font-inter text-sm font-semibold uppercase tracking-wide rounded-full px-6 py-3 transition-all duration-200 hover:bg-opacity-90"
                    >
                        READ FULL CASE STUDY
                        <ChevronDown size={14} className="text-white" />
                    </button>
                </div>
            )}

            {/* EXPANDED CONTENT DESIGN */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="border-t-[2px] border-bordergrey"
                    >
                        {/* SECTION: CONTEXT */}
                        <div className="p-[24px] lg:p-[32px] bg-white">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[12px]">
                                CONTEXT
                            </div>
                            <div className="font-inter text-charcoal text-sm leading-relaxed">
                                {study.context}
                            </div>
                        </div>

                        {/* SECTION: THE CHALLENGE */}
                        <div className="p-[24px] lg:p-[32px] bg-softblue">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[12px]">
                                THE CHALLENGE
                            </div>
                            <div className="font-inter text-charcoal text-sm leading-relaxed">
                                {study.challenge}
                            </div>
                        </div>

                        {/* SECTION: STRATEGIC APPROACH */}
                        <div className="p-[24px] lg:p-[32px] bg-white">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[20px]">
                                STRATEGIC APPROACH
                            </div>
                            <div>
                                {study.strategicApproach?.map((phase: any, pIndex: number) => (
                                    <div key={pIndex} className="mb-[24px] last:mb-0">
                                        <div className="font-inter text-navy text-sm font-semibold mb-[8px]">
                                            {phase.phase}
                                        </div>
                                        <div className="font-inter text-charcoal text-sm leading-relaxed">
                                            {phase.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTION: QUANTIFIABLE OUTCOMES */}
                        <div className="p-[24px] lg:p-[32px] bg-softblue">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[16px]">
                                QUANTIFIABLE OUTCOMES
                            </div>
                            <div>
                                {study.quantifiableOutcomes?.map((outcome: string, oIndex: number) => (
                                    <div key={oIndex} className="flex flex-row items-start gap-3 mb-[10px]">
                                        <div className="w-[5px] h-[5px] bg-navy opacity-30 rounded-sm shrink-0 mt-[7px]" />
                                        <div className="font-inter text-charcoal text-sm leading-relaxed">
                                            {outcome}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTION: QUALITATIVE ACHIEVEMENTS */}
                        <div className="p-[24px] lg:p-[32px] bg-white">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[16px]">
                                QUALITATIVE ACHIEVEMENTS
                            </div>
                            <div>
                                {study.qualitativeAchievements?.map((achievement: string, aIndex: number) => (
                                    <div key={aIndex} className="flex flex-row items-start gap-3 mb-[10px]">
                                        <div className="w-[5px] h-[5px] bg-navy opacity-30 rounded-sm shrink-0 mt-[7px]" />
                                        <div className="font-inter text-charcoal text-sm leading-relaxed">
                                            {achievement}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTION: KEY TAKEAWAY */}
                        <div className="p-[24px] lg:p-[32px] bg-softblue">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[12px]">
                                KEY TAKEAWAY
                            </div>
                            <div className="font-cormorant text-navy opacity-[0.08] text-[6rem] leading-none mb-[-16px]">
                                "
                            </div>
                            <div className="font-inter text-charcoal text-sm leading-relaxed italic">
                                {study.keyTakeaway}
                            </div>
                        </div>

                        {/* SECTION: CONCLUSION */}
                        <div className="p-[24px] lg:p-[32px] bg-white">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[12px]">
                                CONCLUSION
                            </div>
                            <div className="font-inter text-charcoal text-sm leading-relaxed">
                                {study.conclusion}
                            </div>
                        </div>

                        {/* SECTION: TECHNICAL PROFICIENCIES */}
                        <div className="p-[24px] lg:p-[32px] bg-softblue">
                            <div className="font-inter text-navy opacity-40 text-xs uppercase tracking-widest mb-[20px]">
                                TECHNICAL PROFICIENCIES
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {study.technicalProficiencies?.map((prof: any, ptIndex: number) => (
                                    <div key={ptIndex} className="bg-white border border-bordergrey rounded-xl p-5">
                                        <div className="font-cormorant text-navy text-base font-semibold mb-[6px]">
                                            {prof.tool}
                                        </div>
                                        <div className="font-inter text-mutedgrey text-xs leading-relaxed">
                                            {prof.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* EXPANDED COLLAPSE BUTTON */}
                        <div className="border-t border-bordergrey p-[20px] lg:p-[24px] flex justify-end">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="inline-flex items-center gap-2 bg-softblue text-navy font-inter text-sm font-semibold uppercase tracking-wide border border-bordergrey rounded-full px-6 py-3 transition-all duration-200 hover:border-navy"
                            >
                                SHOW LESS
                                <ChevronUp size={14} className="text-navy" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

