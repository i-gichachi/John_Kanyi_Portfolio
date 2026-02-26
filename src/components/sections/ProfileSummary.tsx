"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Linkedin, CheckCircle, Download } from "lucide-react";
import about from "@/data/about";

export const ProfileSummary = () => {
    return (
        <section className="bg-softblue py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-row items-center gap-3 mb-[20px]"
                >
                    <div className="w-[40px] h-[1px] bg-gold" />
                    <span className="font-body text-gold uppercase tracking-widest text-xs font-semibold">
                        PROFESSIONAL PROFILE
                    </span>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                    className="bg-white rounded-2xl border border-bordergrey shadow-xl relative overflow-hidden transition duration-300"
                >
                    {/* ZONE 1 IDENTITY STRIP */}
                    <div className="bg-navy rounded-t-2xl p-5 sm:p-6 lg:p-8 relative overflow-hidden">
                        <div className="absolute -top-4 right-8 pointer-events-none">
                            <div className="font-cormorant text-white/5 text-[9rem] font-semibold leading-none">17</div>
                        </div>
                        <div className="flex flex-row items-center gap-3 mb-[12px]">
                            <div className="w-[32px] h-[1px] bg-gold" />
                            <div className="font-body text-white/60 uppercase tracking-widest text-xs font-medium">
                                PROFESSIONAL PROFILE
                            </div>
                        </div>
                        <h2 className="font-cormorant text-white text-2xl lg:text-4xl font-semibold leading-snug max-w-[600px]">
                            Senior Grants and Business Development Leader
                        </h2>
                    </div>

                    {/* ZONE 2 SUMMARY CONTENT */}
                    <div className="bg-white p-5 sm:p-6 lg:p-10">
                        <p className="font-body text-charcoal text-[15px] sm:text-base leading-loose">
                            A results-driven Senior Grants and Business Development Leader with over <span className="font-bold text-navy">17 years</span> of experience securing and managing large-scale donor-funded programmes across sub-Saharan Africa. Proven track record of building and managing regional funding pipelines exceeding <span className="font-bold text-navy">$250 million</span>, achieving a <span className="font-bold text-navy">65%</span> win rate on major bids, and securing over <span className="font-bold text-navy">$100 million</span> annually from USG agencies, the EU, WHO and private donors. Expert in full grant lifecycle management, donor compliance, partner capacity building and remote cross-cultural programme leadership. Holds dual Master's degrees, a <span className="font-bold text-navy">GPC</span>, <span className="font-bold text-navy">CPA</span>, <span className="font-bold text-navy">PMP</span>, <span className="font-bold text-navy">CFCM</span> and <span className="font-bold text-navy">PMD</span>, combining deep technical expertise with institutional credibility across the international development sector.
                        </p>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] sm:gap-[10px] mt-[24px]"
                        >
                            {about.highlights.map((highlight: { metric: string; description: string }, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="flex flex-row items-start gap-[8px]"
                                >
                                    <CheckCircle className="text-navy w-[15px] h-[15px] flex-shrink-0 mt-[1px]" />
                                    <span className="font-body text-charcoal text-sm leading-relaxed">
                                        <span className="font-bold text-navy">{highlight.metric}</span> {highlight.description}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ZONE 3 CTA STRIP */}
                    <div className="bg-softblue px-5 py-5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-b-2xl flex justify-center lg:justify-end items-center">
                        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                            <a
                                href="/documents/John Kanyi - CV.docx.pdf"
                                download
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-white font-body text-sm font-bold tracking-wide uppercase"
                                style={{ boxShadow: '0 4px 20px rgba(196,154,60,0.35)' }}
                            >
                                <Download className="w-[14px] h-[14px] text-white" />
                                DOWNLOAD CV
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
