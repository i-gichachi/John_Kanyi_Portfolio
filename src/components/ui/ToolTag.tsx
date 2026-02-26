"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ToolTagProps {
    name: string;
    category?: string;
    className?: string;
}

export const ToolTag = ({
    name,
    category,
    className,
}: ToolTagProps) => {
    return (
        <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={cn(
                "inline-flex items-center bg-white border border-bordergrey rounded-full px-[8px] py-[4px] font-inter text-charcoal text-sm",
                "transition-colors duration-200 hover:bg-softblue hover:border-gold",
                className
            )}
        >
            {category && (
                <>
                    <span className="text-xs text-muted-grey">{category}</span>
                    <span className="text-gold mx-1 text-xs">•</span>
                </>
            )}
            <span>{name}</span>
        </motion.span>
    );
};
