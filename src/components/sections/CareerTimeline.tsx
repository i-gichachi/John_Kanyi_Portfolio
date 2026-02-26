"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";
import experience from "@/data/experience";

export const CareerTimeline = () => {
    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle
                        title="Career History"
                        align="left"
                        subtitle="17 years of progressive leadership across international development and humanitarian programmes across sub-Saharan Africa and beyond."
                    />
                </motion.div>

                <div className="relative mt-[40px]">
                    <div className="flex flex-col">
                        {experience.map((item: any, index: number) => {
                            const ongoing = item.current || index === 0;

                            let achievementTag = undefined;
                            if (index === 0) achievementTag = "$100M+ secured annually across 15 African countries";
                            else if (index === 1) achievementTag = "40+ competitive bids submitted over five years";
                            else if (index === 2) achievementTag = "$21.1M in trade deals facilitated for 200+ partners";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: Math.min(index * 0.08, 0.5)
                                    }}
                                    className="relative"
                                >
                                    <TimelineItem
                                        role={item.role}
                                        company={item.company}
                                        logo={item.logo}
                                        location={item.location}
                                        startDate={item.startDate}
                                        endDate={item.endDate}
                                        current={ongoing}
                                        responsibilities={item.responsibilities}
                                        achievementTag={achievementTag}
                                        isFirst={index === 0}
                                        isLast={index === experience.length - 1}
                                        maxVisible={3}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
