"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    id: number;
    title: string;
    summary: string;
    bestFor: string;
    covers: string;
    timeframe: string;
    investment: string;
    enquiryEmail: string;
    className?: string;
}

export const ServiceCard = ({
    id,
    title,
    summary,
    bestFor,
    covers,
    timeframe,
    investment,
    enquiryEmail,
    className,
}: ServiceCardProps) => {
    return (
        <motion.div
            variants={staggerItem}
            className={cn(
                "bg-white border border-bordergrey rounded-[8px] p-[28px] shadow-sm flex flex-col h-full",
                "transition-all duration-200 hover:border-gold hover:-translate-y-1 hover:shadow-md",
                className
            )}
        >
            <div className="w-[32px] h-[32px] rounded-full bg-gold flex items-center justify-center font-inter text-white text-sm font-bold">
                {id}
            </div>

            <h3 className="font-playfair text-navy text-lg font-bold mt-[12px]">
                {title}
            </h3>

            <p className="font-inter text-charcoal text-sm leading-relaxed mt-[12px]">
                {summary}
            </p>

            <div className="w-full h-[1px] bg-bordergrey my-[16px]" />

            <div className="flex flex-col gap-[12px]">
                <div className="flex flex-row">
                    <span className="font-inter text-navy text-xs font-semibold uppercase tracking-wide min-w-[90px]">
                        Best For
                    </span>
                    <span className="font-inter text-charcoal text-xs leading-relaxed flex-1">
                        {bestFor}
                    </span>
                </div>

                <div className="flex flex-row">
                    <span className="font-inter text-navy text-xs font-semibold uppercase tracking-wide min-w-[90px]">
                        Covers
                    </span>
                    <span className="font-inter text-charcoal text-xs leading-relaxed flex-1">
                        {covers}
                    </span>
                </div>

                <div className="flex flex-row">
                    <span className="font-inter text-navy text-xs font-semibold uppercase tracking-wide min-w-[90px]">
                        Timeframe
                    </span>
                    <span className="font-inter text-charcoal text-xs leading-relaxed flex-1">
                        {timeframe}
                    </span>
                </div>

                <div className="flex flex-row">
                    <span className="font-inter text-navy text-xs font-semibold uppercase tracking-wide min-w-[90px]">
                        Investment
                    </span>
                    <span className="font-inter text-charcoal text-xs leading-relaxed flex-1">
                        {investment}
                    </span>
                </div>
            </div>

            <div className="mt-auto pt-[24px]">
                <Button
                    label="Enquire Now"
                    variant="primary"
                    fullWidth={true}
                    href={`mailto:${enquiryEmail}`}
                />
            </div>
        </motion.div>
    );
};
