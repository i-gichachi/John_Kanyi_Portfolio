"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="fixed right-[5px] bottom-[5px] z-[99] w-[44px] h-[44px] rounded-full bg-navy border border-gold flex items-center justify-center group hover:bg-gold hover:border-gold transition-colors duration-300"
                    aria-label="Back to Top"
                >
                    <ChevronUp
                        size={20}
                        className="text-gold group-hover:text-white transition-colors duration-300"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
