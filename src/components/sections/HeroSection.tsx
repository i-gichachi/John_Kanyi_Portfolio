"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeRight, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import heroData from "@/data/hero";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-navy flex flex-col lg:flex-row items-center overflow-hidden w-full">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-5 z-0"
                style={{
                    backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
                aria-hidden="true"
            />

            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center px-[16px] lg:px-[64px] pt-16 lg:pt-0 pb-8 lg:pb-12 z-10 order-2 lg:order-1">
                <motion.div
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col w-full"
                >
                    {/* First element: Role Title */}
                    <motion.div variants={staggerItem} transition={{ duration: 0.7, ease: "easeOut" }} className="flex items-center gap-3">
                        <div className="w-[40px] h-[1px] bg-gold" />
                        <span className="font-inter text-white text-xs font-semibold uppercase tracking-widest">
                            {heroData.roleTitle || "Senior Grants & Business Development Leader"}
                        </span>
                    </motion.div>

                    {/* Second element: Name */}
                    <motion.h1
                        variants={staggerItem}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="font-cormorant text-white text-[4rem] lg:text-[7rem] font-semibold leading-none mt-[16px]"
                    >
                        John Kanyi
                    </motion.h1>

                    {/* Third element: Divider */}
                    <motion.div variants={staggerItem} transition={{ duration: 0.7, ease: "easeOut" }} className="w-[60px] h-[1px] bg-gold mt-[24px] mb-[24px]" />

                    {/* Fourth element: Tagline */}
                    <motion.p
                        variants={staggerItem}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="font-inter text-white/70 text-sm lg:text-base leading-relaxed max-w-[460px]"
                    >
                        {heroData.tagline || "I secure complex funding and build sustainable programmes across sub-Saharan Africa. Specialising in USAID, CDC, and European institutional grants."}
                    </motion.p>

                    {/* Fifth element: Metrics Row */}
                    <motion.div variants={staggerItem} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-[32px] flex flex-col lg:flex-row lg:items-center gap-[16px] lg:gap-0">
                        {/* Metric 1 */}
                        <div className="flex flex-col lg:pl-0 lg:pr-[24px]">
                            <span className="font-cormorant text-gold text-3xl font-semibold leading-none">
                                <CountUp end={100} prefix="$" suffix="M+" duration={2.5} enableScrollSpy scrollSpyOnce />
                            </span>
                            <span className="font-inter text-white/60 text-xs uppercase tracking-wide mt-[4px]">Secured Annually</span>
                        </div>

                        {/* Mobile horizontal, Desktop vertical divider */}
                        <div className="w-[40px] h-[1px] bg-gold lg:w-[1px] lg:h-[40px] lg:bg-gold/30" />

                        {/* Metric 2 */}
                        <div className="flex flex-col lg:px-[24px]">
                            <span className="font-cormorant text-gold text-3xl font-semibold leading-none">
                                <CountUp end={65} suffix="%" duration={2.5} enableScrollSpy scrollSpyOnce />
                            </span>
                            <span className="font-inter text-white/60 text-xs uppercase tracking-wide mt-[4px]">Win Rate on Major Bids</span>
                        </div>

                        {/* Mobile horizontal, Desktop vertical divider */}
                        <div className="w-[40px] h-[1px] bg-gold lg:w-[1px] lg:h-[40px] lg:bg-gold/30" />

                        {/* Metric 3 */}
                        <div className="flex flex-col lg:pl-[24px] lg:pr-0">
                            <span className="font-cormorant text-gold text-3xl font-semibold leading-none">
                                <CountUp end={250} prefix="$" suffix="M+" duration={2.5} enableScrollSpy scrollSpyOnce />
                            </span>
                            <span className="font-inter text-white/60 text-xs uppercase tracking-wide mt-[4px]">Regional Pipeline</span>
                        </div>
                    </motion.div>

                    {/* Sixth element: Buttons */}
                    <motion.div variants={staggerItem} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-[36px] flex flex-col sm:flex-row gap-[16px]">
                        <Button
                            href="/impact"
                            label="Explore My Impact"
                            variant="primary"
                            className="w-full sm:w-auto text-center"
                        />
                        <Button
                            href="/advisory"
                            label="View Advisory Services"
                            variant="secondary"
                            className="w-full sm:w-auto text-center"
                        />
                    </motion.div>

                    {/* Seventh element: Certifications */}
                    <motion.div variants={staggerItem} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-[20px] flex flex-wrap gap-[8px]">
                        {["GPC", "PMP", "CFCM", "CPA", "PMD"].map((cert) => (
                            <span
                                key={cert}
                                className="bg-transparent border border-white/30 rounded-full px-[10px] py-[3px] font-inter text-white/80 text-xs font-medium"
                            >
                                {cert}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <motion.div
                className="w-full lg:w-[45%] flex items-center justify-center p-[16px] lg:p-[40px] pt-[80px] lg:pt-[40px] z-10 order-1 lg:order-2"
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <div className="relative rounded-xl overflow-hidden border border-white/20 max-w-[420px] w-full mx-auto">
                    <div className="w-full bg-navy min-h-[320px] lg:min-h-[500px] flex flex-col items-center justify-center">
                        <div className="font-cormorant text-white/50 text-6xl font-semibold border-[2px] border-white/20 w-[120px] h-[120px] rounded-full flex items-center justify-center">
                            JK
                        </div>
                        <span className="font-inter text-muted text-xs mt-[16px]">
                            Professional Photo Coming Soon
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
