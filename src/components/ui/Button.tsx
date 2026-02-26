"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
    className?: string;
    disabled?: boolean;
}

const MotionLink = (motion as any).create ? (motion as any).create(Link) : motion(Link as any);

export const Button = ({
    label,
    href,
    onClick,
    variant = "primary",
    fullWidth = false,
    className,
    disabled = false,
}: ButtonProps) => {
    const baseClasses = cn(
        "inline-flex justify-center items-center font-inter font-semibold text-sm rounded-[6px] px-[16px] py-[10px] transition duration-200",
        variant === "primary"
            ? "bg-gold text-white hover:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed"
            : "bg-transparent border-[2px] border-gold text-gold hover:bg-gold hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
        fullWidth ? "w-full text-center" : "",
        className
    );

    const motionProps = {
        whileHover: disabled ? undefined : { y: -2 },
        whileTap: disabled ? undefined : { y: 0 },
        transition: { duration: 0.2 },
    };

    if (href) {
        if (href.startsWith("mailto:") || href.startsWith("tel:")) {
            return (
                <motion.a href={href} className={baseClasses} {...motionProps}>
                    {label}
                </motion.a>
            );
        }

        if (href.startsWith("http://") || href.startsWith("https://")) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                    {...motionProps}
                >
                    {label}
                </motion.a>
            );
        }

        return (
            <MotionLink href={href} className={baseClasses} {...motionProps}>
                {label}
            </MotionLink>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={baseClasses}
            {...motionProps}
        >
            {label}
        </motion.button>
    );
};
