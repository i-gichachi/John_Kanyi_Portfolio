"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Metric {
    value: string;
    label: string;
}

interface CaseStudyCardProps {
    id: number;
    title: string;
    organization: string;
    slug: string;
    executiveSummary: string;
    featuredMetrics: Metric[];
    className?: string;
}

export const CaseStudyCard = ({
    id,
    title,
    organization,
    slug,
    executiveSummary,
    featuredMetrics,
    className,
}: CaseStudyCardProps) => {
    return (
        <motion.div
            variants={staggerItem}
            className={cn(
                "bg-white border border-bordergrey rounded-[8px] p-[28px] shadow-sm",
                "border-t-4 border-t-navy hover:border-t-gold",
                "transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
                "flex flex-col h-full",
                className
            )}
        >
            <div className="font-inter text-gold text-xs font-semibold tracking-wide uppercase">
                {organization}
            </div>
            <h3 className="font-playfair text-navy text-lg font-bold leading-snug mt-[8px] line-clamp-2">
                {title}
            </h3>
            <p className="font-inter text-muted-grey text-sm leading-relaxed mt-[12px] line-clamp-3">
                {executiveSummary}
            </p>

            <div className="flex flex-row gap-6 mt-[16px]">
                {featuredMetrics.map((metric, index) => (
                    <div key={index} className="flex flex-col">
                        <span className="font-playfair text-gold text-lg font-bold">
                            {metric.value}
                        </span>
                        <span className="font-inter text-muted-grey text-xs">
                            {metric.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-[20px]">
                <Link href={`/impact#${slug}`} className="group flex flex-row items-center font-inter text-gold text-sm font-semibold w-fit">
                    Read Full Case Study
                    <motion.span
                        className="ml-2 flex items-center"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight size={16} className="text-gold" />
                    </motion.span>
                </Link>
            </div>
        </motion.div>
    );
};
