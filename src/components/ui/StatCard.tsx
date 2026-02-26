"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StatCardProps {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    duration?: number;
    dark?: boolean;
    className?: string;
}

export const StatCard = ({
    value,
    prefix = "",
    suffix = "",
    label,
    duration = 2.5,
    dark = false,
    className,
}: StatCardProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={cn(
                "p-[24px] rounded-[8px] shadow-sm transition-all duration-200 hover:border-gold hover:-translate-y-1",
                dark
                    ? "bg-navy border-[1px] border-gold"
                    : "bg-white border border-bordergrey",
                className
            )}
        >
            <div
                ref={ref}
                className="font-playfair text-gold text-3xl md:text-4xl font-bold flex items-center"
            >
                {prefix}
                {inView ? (
                    <CountUp
                        start={0}
                        end={value}
                        duration={duration}
                        separator=","
                        decimal="."
                    />
                ) : (
                    "0"
                )}
                {suffix}
            </div>
            <div
                className={cn(
                    "font-inter text-sm mt-2",
                    dark ? "text-white" : "text-charcoal"
                )}
            >
                {label}
            </div>
        </motion.div>
    );
};
