"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { fadeLeft } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
    role: string;
    company: string;
    logo?: string;
    location: string;
    startDate?: string;
    endDate: string;
    current?: boolean;
    responsibilities?: string[];
    isEducation?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    className?: string;
    defaultExpanded?: boolean;
    maxVisible?: number;
    achievementTag?: string;
}

export const TimelineItem = ({
    role,
    company,
    logo,
    location,
    startDate,
    endDate,
    current = false,
    responsibilities = [],
    isEducation = false,
    isFirst = false,
    isLast = false,
    className,
    defaultExpanded = false,
    maxVisible = 3,
    achievementTag,
}: TimelineItemProps) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const [isHovered, setIsHovered] = useState(false);
    const dateRange = startDate ? `${startDate} to ${endDate}` : endDate;

    return (
        <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={cn("flex flex-row", className)}
        >
            {/* Left Column - Robust Timeline Spine */}
            <div className="w-[32px] sm:w-[48px] flex flex-col items-center flex-shrink-0 relative">
                {/* Top Half Line */}
                {!isFirst && (
                    <div className="absolute top-0 w-[2px] bg-gold/40 left-1/2 -translate-x-1/2 h-[32px] sm:h-[40px] z-0" />
                )}

                {/* Timeline Dot */}
                <div className="mt-[32px] sm:mt-[40px] w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-full flex items-center justify-center relative z-10 bg-white border-[3px] border-gold shadow-sm" />

                {/* Bottom Half Line */}
                {!isLast && (
                    <div className="absolute top-[46px] sm:top-[56px] bottom-0 w-[2px] bg-gold/40 left-1/2 -translate-x-1/2 z-0" />
                )}
            </div>

            {/* Right Column */}
            <div className="pl-[8px] sm:pl-[12px] pb-[40px] sm:pb-[56px] flex-1 min-w-0">
                <div
                    className="bg-white border border-bordergrey/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition duration-300 relative group overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ borderLeft: isHovered ? '3px solid #1B2A4A' : '3px solid transparent', transition: 'border-left 0.3s ease' }}
                >
                    <div className="flex flex-row items-start justify-between gap-4 sm:gap-6">
                        <div className="flex-1">
                            <h3 className="font-cormorant text-navy text-xl sm:text-2xl font-bold leading-snug group-hover:text-gold transition duration-300">
                                {role}
                            </h3>
                            <div className="font-body text-charcoal text-sm font-semibold mt-[4px] uppercase tracking-wider">
                                {company}
                            </div>

                            {achievementTag && (
                                <div className="flex flex-row items-center gap-2 mt-[4px]">
                                    <div className="w-[5px] h-[5px] bg-navy opacity-40 rounded-full flex-shrink-0" />
                                    <span className="font-body text-navy/70 text-xs font-medium">
                                        {achievementTag}
                                    </span>
                                </div>
                            )}

                            <div className="flex flex-row items-center flex-wrap gap-2 sm:gap-3 mt-[8px]">
                                <span className="font-body text-muted-grey text-xs font-medium">
                                    {location}
                                </span>
                                <span className="hidden sm:inline font-body text-muted-grey text-xs">•</span>
                                <span className="font-body text-muted-grey text-xs font-medium">
                                    {dateRange}
                                </span>
                                {current && (
                                    <span className="bg-navy text-white font-body text-[10px] sm:text-xs font-semibold px-[8px] py-[2px] rounded-full uppercase tracking-wider ml-1">
                                        Ongoing
                                    </span>
                                )}
                            </div>
                        </div>
                        {logo && (
                            <div className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] bg-white rounded-lg flex-shrink-0 border border-bordergrey/60 p-1.5 shadow-sm overflow-hidden flex items-center justify-center transition duration-300 group-hover:border-gold/50 group-hover:shadow-md">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={logo} alt={`${company} logo`} className="w-full h-full object-contain" />
                            </div>
                        )}
                    </div>

                    {!isEducation && responsibilities.length > 0 && (
                        <div className="mt-[20px] pt-[20px] border-t border-bordergrey/40">
                            <ul className="flex flex-col gap-[8px]">
                                {responsibilities.slice(0, maxVisible).map((req, index) => (
                                    <li key={index} className="flex flex-row">
                                        <span className="mr-[8px] flex-shrink-0 text-charcoal" style={{ color: '#787878' }}>-</span>
                                        <span className="font-body text-charcoal text-sm leading-relaxed">
                                            {req}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <AnimatePresence>
                                {isExpanded && responsibilities.length > maxVisible && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="flex flex-col gap-[8px] mt-[8px]">
                                            {responsibilities.slice(maxVisible).map((req, index) => (
                                                <li key={index + maxVisible} className="flex flex-row">
                                                    <span className="mr-[8px] flex-shrink-0 text-charcoal" style={{ color: '#787878' }}>-</span>
                                                    <span className="font-body text-charcoal text-sm leading-relaxed">
                                                        {req}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {responsibilities.length > maxVisible && (
                                <div
                                    className="cursor-pointer flex flex-row items-center gap-[6px] mt-[16px] w-fit hover:opacity-80 transition duration-200"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    <span className="font-body text-navy text-xs font-semibold uppercase tracking-wide">
                                        {isExpanded ? "Show less" : "View all responsibilities"}
                                    </span>
                                    {isExpanded ? (
                                        <ChevronUp className="text-navy w-[14px] h-[14px]" />
                                    ) : (
                                        <ChevronDown className="text-navy w-[14px] h-[14px]" />
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
