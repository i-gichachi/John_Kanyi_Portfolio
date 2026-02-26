"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    light?: boolean;
    className?: string;
}

export const SectionTitle = ({
    title,
    subtitle,
    align = "left",
    light = false,
    className,
}: SectionTitleProps) => {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={cn(
                "flex flex-col",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <h2
                className={cn(
                    "font-playfair font-bold text-2xl md:text-3xl",
                    light ? "text-white" : "text-navy"
                )}
            >
                {title}
            </h2>
            <div
                className={cn(
                    "h-[3px] w-[50px] bg-gold mt-4",
                    align === "center" ? "mx-auto" : "ml-0"
                )}
            />
        </motion.div>
    );
};
