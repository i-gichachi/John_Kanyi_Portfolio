"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    name: string;
    role: string;
    organisation: string;
    quote: string;
    className?: string;
}

export const TestimonialCard = ({
    name,
    role,
    organisation,
    quote,
    className,
}: TestimonialCardProps) => {
    return (
        <motion.div
            variants={staggerItem}
            className={cn(
                "bg-white border border-bordergrey rounded-[8px] p-[28px] shadow-sm",
                "transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
                className
            )}
        >
            <div className="font-playfair text-gold text-5xl leading-none -mb-[8px]">
                &ldquo;
            </div>
            <p className="font-inter text-charcoal text-sm italic leading-relaxed">
                {quote}
            </p>
            <div className="w-[40px] h-[2px] bg-gold my-[16px]" />
            <div className="font-playfair text-navy text-base font-bold">
                {name}
            </div>
            <div className="font-inter text-muted-grey text-xs mt-[4px]">
                {role}
            </div>
            <div className="font-inter text-gold text-xs font-semibold mt-[2px]">
                {organisation}
            </div>
        </motion.div>
    );
};
