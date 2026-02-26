"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import caseStudiesData from "@/data/caseStudies";

export default function FeaturedCaseStudies() {
    const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

    // Filter case studies with id 1 and 2
    const caseStudies = (caseStudiesData || []).filter((cs: any) => cs.id === 1 || cs.id === 2);

    // Fallback data if not available
    const displayStudies = caseStudies.length > 0 ? caseStudies : [
        {
            id: 1,
            slug: "hjfmri-funding",
            client: "HJFMRI",
            title: "Securing $150M+ for Global Health Initiatives in Sub-Saharan Africa",
            executiveSummary: "Strategic direction of proposal development leading to major funding wins. Successfully established consortia and navigated complex donor requirements.",
            coreCompetencies: ["Proposal Strategy", "Consortium Building", "Budgeting"],
            metrics: [{ value: "$150M", label: "Secured" }, { value: "3", label: "Countries" }, { value: "5 Yrs", label: "Duration" }]
        },
        {
            id: 2,
            slug: "fintrac-growth",
            client: "Fintrac Inc.",
            title: "Scaling Agricultural Development Programmes through USAID Funding",
            executiveSummary: "Led the business development efforts that resulted in multiple agricultural programme awards. Strengthened local partner capacity for compliance.",
            coreCompetencies: ["USAID Compliance", "Capacity Building", "Agriculture"],
            metrics: [{ value: "$85M", label: "Awarded" }, { value: "12", label: "Partners" }, { value: "100k", label: "Farmers" }]
        }
    ];

    return (
        <section className="bg-lightgrey py-8 lg:py-12">
            <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[24px]">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        title="Selected Impact"
                        subtitle="High-value programmes and funding wins delivered across sub-Saharan Africa."
                        align="center"
                    />
                </motion.div>

                <div className="flex flex-col gap-[20px] lg:gap-[28px] mt-[32px] lg:mt-[48px]">
                    {displayStudies.map((study: any, index: number) => {
                        const logoSrc = study.logo || (study.id === 1 ? "/logos/HJFMRI_logo.jpg" : "/logos/Fintrac_Inc_logo.jpg");
                        const indexLabel = `Case Study 0${index + 1} of 05`;
                        const metrics = study.metrics?.slice(0, 3) || [];
                        const competencies = study.coreCompetencies?.slice(0, 3) || [];
                        const excerpt = study.executiveSummary?.split('. ').slice(0, 2).join('. ') + (study.executiveSummary?.split('. ').length > 2 ? '.' : '');

                        return (
                            <motion.div
                                key={study.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index === 0 ? 0 : 0.15 }}
                                className="bg-white rounded-xl overflow-hidden border border-bordergrey shadow-[0_4px_32px_rgba(0,0,0,0.08)] hover:border-navy hover:shadow-[0_8px_48px_rgba(0,0,0,0.14)] transition-all duration-300 flex flex-col lg:flex-row w-full group/card"
                            >
                                {/* LEFT ZONE */}
                                <div className="w-full lg:w-[28%] bg-navy p-[20px] lg:p-[36px] flex flex-row lg:flex-col justify-between items-center lg:items-start h-[160px] lg:h-auto">
                                    <div className="flex flex-col h-full justify-between items-start w-1/3 lg:w-full">
                                        <div className="relative h-[36px] w-[120px] lg:w-full flex items-center">
                                            {!logoErrors[study.id] ? (
                                                <Image
                                                    src={logoSrc}
                                                    alt={study.organization || study.client || ""}
                                                    fill
                                                    className="object-contain object-left lg:object-left"
                                                    onError={() => setLogoErrors((prev) => ({ ...prev, [study.id]: true }))}
                                                />
                                            ) : (
                                                <div className="font-inter text-white/70 text-sm font-semibold uppercase tracking-wide">
                                                    {study.organization || study.client}
                                                </div>
                                            )}
                                        </div>
                                        <div className="hidden lg:block mt-[16px]">
                                            <span className="font-inter text-gold text-xs uppercase tracking-widest">{indexLabel}</span>
                                            <div className="w-[40px] h-[1px] bg-gold/40 mt-[12px] mb-[20px]" />
                                        </div>
                                    </div>

                                    {/* Mobile horizontal metrics, desktop vertical */}
                                    <div className="flex flex-row lg:flex-col gap-[16px] w-2/3 lg:w-full justify-end lg:justify-start items-center lg:items-start">
                                        <div className="lg:hidden flex font-inter text-gold text-xs uppercase tracking-widest mr-auto">
                                            {indexLabel}
                                        </div>
                                        {metrics.map((m: any, mIdx: number) => (
                                            <div key={mIdx} className="flex flex-col items-end lg:items-start">
                                                <span className="font-cormorant text-gold text-2xl lg:text-3xl font-semibold leading-none">{m.value}</span>
                                                <span className="font-inter text-white/60 text-xs mt-[2px]">{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* MIDDLE ZONE */}
                                <div className="w-full lg:w-[52%] bg-white p-[20px] lg:p-[36px] flex flex-col justify-center">
                                    <span className="font-inter text-muted-grey text-xs uppercase tracking-widest">{study.organization || study.client}</span>
                                    <h3 className="font-cormorant text-navy text-xl lg:text-2xl font-semibold leading-snug mt-[8px]">
                                        {study.title}
                                    </h3>
                                    <div className="w-[48px] h-[2px] bg-gold mt-[12px] mb-[16px]" />
                                    <p className="font-inter text-charcoal text-sm leading-relaxed">
                                        {excerpt}
                                    </p>
                                    <div className="mt-[16px] flex flex-wrap gap-[8px]">
                                        {competencies.map((comp: string, cIdx: number) => (
                                            <span key={cIdx} className="bg-softblue rounded-full px-[12px] py-[4px] font-inter text-navy text-xs font-medium">
                                                {comp}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT ZONE */}
                                <div className="w-full lg:w-[20%] bg-softblue p-[20px] lg:p-[36px] h-[100px] lg:h-auto flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-[12px]">
                                    <Link href={`/impact#${study.slug}`} className="group relative z-10 flex flex-col items-center gap-[12px] lg:flex-col flex-row-reverse w-full lg:w-auto justify-between lg:justify-center h-full">
                                        {/* Mobile view needs Arrow Circle and 'Read Case Study' text on left? The prompt says "mobile the right zone displays as a full width horizontal strip with flex-row justify-between items-center instead of flex-col" */}
                                        <div className="w-[56px] h-[56px] rounded-full border-2 border-navy bg-white flex items-center justify-center cursor-pointer transition-all duration-200 group-hover:bg-navy order-2 lg:order-1">
                                            <ArrowRight className="w-[20px] h-[20px] text-navy group-hover:text-white transition-colors duration-200" />
                                        </div>

                                        <div className="flex flex-col items-start lg:items-center order-1 lg:order-2">
                                            <span className="font-inter text-navy text-xs font-semibold text-center mt-0 lg:mt-[12px]">
                                                Read Case Study
                                            </span>
                                            <span className="font-inter text-muted text-xs text-center mt-[4px]">
                                                {indexLabel}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-[40px] flex justify-center">
                    <Button
                        href="/impact"
                        variant="primary"
                        label="View All Case Studies"
                    />
                </div>
            </div>
        </section>
    );
}
