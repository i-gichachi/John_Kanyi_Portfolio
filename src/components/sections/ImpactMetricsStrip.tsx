"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const impactMetrics = [
    { value: "$100M+", label: "Secured Annually" },
    { value: "65%", label: "Win Rate on Major Bids" },
    { value: "$250M+", label: "Regional Pipeline" },
    { value: "200,000", label: "Farmers Reached" },
    { value: "Zero", label: "Major Audit Findings" },
];

function AnimatedValue({ valueString, inView }: { valueString: string, inView: boolean }) {
    const [displayValue, setDisplayValue] = useState(valueString === "Zero" ? "Zero" : "0");

    useEffect(() => {
        if (!inView || valueString === "Zero") return;

        let target = 0;
        let prefix = "";
        let suffix = "";
        let isCommaSeparated = false;

        if (valueString === "$100M+") {
            target = 100;
            prefix = "$";
            suffix = "M+";
        } else if (valueString === "65%") {
            target = 65;
            suffix = "%";
        } else if (valueString === "$250M+") {
            target = 250;
            prefix = "$";
            suffix = "M+";
        } else if (valueString === "200,000") {
            target = 200000;
            isCommaSeparated = true;
        }

        const duration = 1500; // 1.5 seconds
        const fps = 60;
        const frames = (duration / 1000) * fps;
        const increment = target / frames;
        let current = 0;

        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }

            let formatted = Math.floor(current).toString();
            if (isCommaSeparated) {
                formatted = Math.floor(current).toLocaleString();
            }

            setDisplayValue(`${prefix}${formatted}${suffix}`);
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [inView, valueString]);

    if (valueString === "Zero") {
        return (
            <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.0 }}
            >
                {valueString}
            </motion.span>
        );
    }

    return <span>{displayValue}</span>;
}

export default function ImpactMetricsStrip() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-80px" });

    return (
        <section className="bg-softblue py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <motion.div
                    ref={containerRef}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0"
                >
                    {impactMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className={index === 4 ? "col-span-2 lg:col-span-1 flex justify-center" : ""}
                        >
                            <div className="flex flex-col items-center text-center sm:px-0 lg:px-6 relative w-full">
                                {index < 4 && (
                                    <div className="absolute w-[1px] h-[40px] bg-bordergrey right-0 top-1/2 -translate-y-1/2 hidden lg:block" />
                                )}
                                <div className="font-cormorant text-navy text-3xl lg:text-4xl font-semibold leading-none">
                                    <AnimatedValue valueString={metric.value} inView={isInView} />
                                </div>
                                <div className="w-[24px] h-[1px] bg-gold mx-auto mt-[8px] mb-[8px]" />
                                <div className="font-inter text-mutedgrey text-xs uppercase tracking-wide text-center">
                                    {metric.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
