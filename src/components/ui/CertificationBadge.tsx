"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CertificationBadgeProps {
    acronym: string;
    fullName: string;
    issuingBody: string;
    country?: string;
    className?: string;
}

export const CertificationBadge = ({
    acronym,
    fullName,
    issuingBody,
    country,
    className,
}: CertificationBadgeProps) => {
    return (
        <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={cn(
                "bg-white border border-bordergrey rounded-[8px] p-[20px] shadow-sm",
                "border-b-4 border-b-gold",
                "transition-colors duration-200 hover:border-gold",
                className
            )}
        >
            <div className="font-playfair text-navy text-2xl font-bold transition-colors duration-200 hover:text-gold">
                {acronym}
            </div>
            <div className="font-inter text-charcoal text-sm font-semibold mt-[8px]">
                {fullName}
            </div>
            <div className="font-inter text-muted-grey text-xs mt-[4px] flex items-center flex-wrap">
                <span>{issuingBody}</span>
                {country && (
                    <span className="mt-[2px]">
                        <span className="text-gold mx-1 font-bold">•</span>
                        {country}
                    </span>
                )}
            </div>
        </motion.div>
    );
};
