"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeUp, staggerContainer, staggerItem, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function AboutSnapshot() {

    const metrics: Array<{ label: string; element: React.ReactNode }> = [
        { label: "Secured Annually", element: <CountUp end={100} prefix="$" suffix="M+" duration={2.5} enableScrollSpy scrollSpyOnce /> },
        { label: "Win Rate on Major Bids", element: <CountUp end={65} suffix="%" duration={2.5} enableScrollSpy scrollSpyOnce /> },
        { label: "Regional Pipeline Managed", element: <CountUp end={250} prefix="$" suffix="M+" duration={2.5} enableScrollSpy scrollSpyOnce /> },
        { label: "Smallholder Farmers Reached", element: <CountUp end={200000} separator="," duration={2.5} enableScrollSpy scrollSpyOnce /> },
        { label: "Organisations Strengthened", element: <CountUp end={200} suffix="+" duration={2.5} enableScrollSpy scrollSpyOnce /> },
        { label: "Major Audit Findings", element: "Zero" },
    ];

    return (
        <section className="bg-softblue py-8 lg:py-12">
            <div className="max-w-[960px] mx-auto px-[16px] lg:px-[24px]">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <SectionTitle
                        title="About John Kanyi"
                        align="center"
                    />
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-inter text-charcoal text-base lg:text-lg leading-loose text-center max-w-[800px] mx-auto mt-[24px]"
                >
                    Across 17 years and 15 African countries, I have sat at the table where funding decisions worth hundreds of millions of dollars are made and consistently delivered the results that keep organisations coming back. The <span className="font-bold text-navy">$43 million</span> award secured in six weeks. The <span className="font-bold text-navy">$34.8 million</span> in agricultural sales generated for <span className="font-bold text-navy">200,000 farmers</span> who had never had that kind of market access before. The <span className="font-bold text-navy">$250 million</span> pipeline built from nothing into one of the most productive business development operations HJFMRI has run on the continent.
                </motion.p>

                <motion.div
                    variants={fadeIn || { hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-[80px] h-[1px] bg-gold mx-auto my-[40px]"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[20px] w-full"
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-white rounded-xl p-[16px] lg:p-[28px] border border-bordergrey shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-gold hover:-translate-y-[4px] transition-all duration-200"
                        >
                            <div className="font-cormorant text-navy text-3xl lg:text-4xl font-semibold text-center leading-none">
                                {metric.element}
                            </div>
                            <div className="w-[30px] h-[2px] bg-gold mx-auto my-[8px]" />
                            <div className="font-inter text-muted text-xs uppercase tracking-wide text-center">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mt-[40px]"
                >
                    <Button
                        href="/profile"
                        variant="primary"
                        label="Read Full Profile"
                    />
                </motion.div>
            </div>
        </section>
    );
}
