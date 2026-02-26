"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import servicesData from "@/data/services";

export default function AdvisorySnapshot() {
    // Filter services 1, 3, 5
    const services = (servicesData || []).filter((s: any) => s.id === 1 || s.id === 3 || s.id === 5);

    const displayServices = services.length > 0 ? services : [
        { id: 1, title: "Grants Management & Compliance" },
        { id: 3, title: "Donor Intelligence & Positioning" },
        { id: 5, title: "Consortium Building & Management" }
    ];

    const getServiceDetails = (id: number, index: number) => {
        const numberStr = `0${index + 1}`;
        let hook = "";
        let engagement = "";

        if (id === 1) {
            hook = "Helping non-profits and NGOs win the right funding and deliver it with full donor compliance. Built on $100M+ secured annually and 17 years of portfolio management across sub-Saharan Africa.";
            engagement = "3-Day Intensive Module";
        } else if (id === 3) {
            hook = "Connecting your organisation to the donors most likely to invest in your mission through intelligence-led funding strategy. Anchored in a $250M+ pipeline and a 65% win rate on major competitive bids.";
            engagement = "On Assignment Basis";
        } else if (id === 5) {
            hook = "Building strategically aligned consortia and managing the full proposal process from partner selection to final award. Proven on complex multi-country bids at the highest levels of international development funding.";
            engagement = "On Assignment Basis";
        } else {
            // fallback
            hook = "Strategic advisory tailored to your organisational needs.";
            engagement = "Consulting";
        }

        return { numberStr, hook, engagement };
    };

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
                        title="How I Can Help"
                        subtitle="Tailored consulting and advisory services for non-profits, NGOs and development organisations across Africa."
                        align="center"
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] lg:gap-[24px] mt-[32px] lg:mt-[48px]"
                >
                    {displayServices.map((service: any, index: number) => {
                        const { numberStr, hook, engagement } = getServiceDetails(service.id, index);

                        return (
                            <motion.div
                                key={service.id}
                                variants={staggerItem}
                                className="bg-white rounded-xl p-[24px] lg:p-[36px] border border-bordergrey shadow-[0_4px_24px_rgba(0,0,0,0.07)] relative overflow-hidden h-full flex flex-col group hover:border-gold hover:shadow-[0_8px_40px_rgba(0,0,0,0.13)] hover:-translate-y-[4px] transition-all duration-200"
                            >
                                {/* Watermark Number */}
                                <div className="absolute top-[-12px] right-[16px] font-cormorant text-navy text-[5rem] lg:text-[7rem] font-semibold opacity-8 leading-none pointer-events-none user-select-none">
                                    {numberStr}
                                </div>

                                <div className="relative z-10 flex flex-col flex-grow">
                                    <div className="w-[32px] h-[2px] bg-gold mb-[16px]" />

                                    <h3 className="font-cormorant text-navy text-lg lg:text-xl font-semibold leading-snug">
                                        {service.title || service.name}
                                    </h3>

                                    <div className="w-full h-[1px] bg-bordergrey my-[16px]" />

                                    <p className="font-inter text-charcoal text-sm leading-relaxed flex-grow">
                                        {hook}
                                    </p>

                                    <div className="flex flex-row justify-between items-center mt-[24px] pt-[20px] border-t border-bordergrey">
                                        <span className="font-inter text-muted text-xs">
                                            {engagement}
                                        </span>

                                        <Link href="/advisory" className="flex flex-row items-center gap-[4px] group/link">
                                            <span className="font-inter text-navy text-xs font-semibold">Learn More</span>
                                            <motion.div
                                                whileHover={{ x: 3 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowRight className="w-[14px] h-[14px] text-navy" />
                                            </motion.div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
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
                        href="/advisory"
                        variant="secondary"
                        label="View All Advisory Services"
                    />
                </motion.div>
            </div>
        </section>
    );
}
