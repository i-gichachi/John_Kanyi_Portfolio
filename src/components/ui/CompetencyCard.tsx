"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CompetencyCardProps {
    id: number;
    title: string;
    description: string;
    pillar?: string;
    className?: string;
}

export const CompetencyCard = ({
    id,
    title,
    description,
    pillar,
    className,
}: CompetencyCardProps) => {
    const formattedId = id.toString().padStart(2, "0");

    return (
        <motion.div
            variants={staggerItem}
            className={cn(
                "bg-white border border-bordergrey rounded-[8px] p-[28px] shadow-sm",
                "border-l-4 border-l-transparent hover:border-l-gold",
                "transition-all duration-200 hover:-translate-y-1",
                className
            )}
        >
            <div className="font-playfair text-gold text-2xl font-bold">
                {formattedId}
            </div>
            <h3 className="font-playfair text-navy text-lg font-bold mt-[8px]">
                {title}
            </h3>
            <div className="w-[40px] h-[2px] bg-gold mt-[8px] mb-[12px]" />
            <p className="font-inter text-charcoal text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};
