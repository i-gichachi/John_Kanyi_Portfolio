"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricBadgeProps {
    value: string;
    label?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const MetricBadge = ({
    value,
    label,
    size = "md",
    className,
}: MetricBadgeProps) => {
    const sizeClasses = {
        sm: "px-[4px] py-[2px] text-xs",
        md: "px-[8px] py-[4px] text-sm",
        lg: "px-[12px] py-[6px] text-base",
    };

    const baseClasses = cn(
        "bg-gold text-white font-inter font-semibold rounded-[4px]",
        label
            ? "flex flex-col items-center justify-center text-center"
            : "inline-flex items-center justify-center",
        sizeClasses[size],
        className
    );

    const animationProps = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, ease: "easeOut" as const },
    };

    if (label) {
        return (
            <motion.div className={baseClasses} {...animationProps}>
                <span className="font-bold text-white">{value}</span>
                <div className="text-white opacity-80 text-xs mt-1">{label}</div>
            </motion.div>
        );
    }

    return (
        <motion.span className={baseClasses} {...animationProps}>
            <span className="font-bold text-white">{value}</span>
        </motion.span>
    );
};
