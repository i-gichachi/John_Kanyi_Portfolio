"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import education from "@/data/education";
import { useState } from "react";

const EducationLogo = ({ src, alt }: { src?: string; alt: string }) => {
    const [hasError, setHasError] = useState(false);

    if (!src || hasError) {
        return (
            <div className="h-10 flex items-center justify-start">
                <GraduationCap className="text-navy w-6 h-6 opacity-60" />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            onError={() => setHasError(true)}
        />
    );
};

export const EducationSection = () => {
    return (
        <section className="bg-softblue py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <SectionTitle
                        title="Education"
                        align="center"
                        subtitle="Academic foundations that underpin 17 years of professional excellence in international development and grants management."
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px] mt-[48px]"
                >
                    {education.map((item: any, index: number) => {
                        const yearMatch = item.endDate?.match(/\d{4}/);
                        const isOngoing = item.current || item.ongoing || item.endDate?.toLowerCase().includes("ongoing") || item.endDate?.toLowerCase().includes("present");
                        const watermarkYear = isOngoing ? "Now" : (yearMatch ? yearMatch[0] : "");

                        const degreeLower = (item.degree || item.title || "").toLowerCase();
                        const isHighDegree = degreeLower.includes("phd") || degreeLower.includes("master") || degreeLower.includes("bachelor");
                        const topBorderClass = isHighDegree ? "border-t-navy" : "border-t-[#DDE1E7]";

                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className={`bg-white rounded-2xl border border-bordergrey/60 border-t-4 ${topBorderClass} p-6 lg:p-8 shadow-sm hover:shadow-lg relative overflow-hidden transition duration-300 h-full flex flex-col group`}
                            >
                                <div className="absolute top-[-10px] right-[12px] font-cormorant text-navy opacity-[0.02] text-[5rem] lg:text-[6rem] font-semibold leading-none pointer-events-none group-hover:opacity-[0.05] transition duration-300">
                                    {watermarkYear}
                                </div>

                                <div className="h-[52px] flex flex-row items-center mb-[24px]">
                                    <EducationLogo src={item.logo} alt={item.institution} />
                                </div>

                                <h3 className="font-cormorant text-navy text-xl font-semibold leading-snug">
                                    {item.degree || item.title}
                                </h3>

                                <div className="w-[32px] h-[1px] bg-bordergrey my-[8px]" />

                                <div className="font-cormorant text-navy text-base font-semibold mt-[4px]">
                                    {item.institution}
                                </div>

                                <div className="flex flex-row items-center justify-between mt-[8px]">
                                    <span className="font-body text-muted-grey text-xs">
                                        {item.location}
                                    </span>
                                    <span className="font-body text-muted-grey text-xs">
                                        {item.startDate ? `${item.startDate} - ${item.endDate}` : item.endDate}
                                    </span>
                                </div>

                                {isOngoing && (
                                    <div className="mt-auto pt-[16px]">
                                        <span className="border border-navy text-navy bg-transparent rounded-full px-[10px] py-[3px] font-body text-xs font-medium uppercase tracking-wider">
                                            In Progress
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
