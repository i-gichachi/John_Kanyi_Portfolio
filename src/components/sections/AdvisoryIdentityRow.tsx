"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function AdvisoryIdentityRow() {
    return (
        <section className="bg-softblue pt-10 pb-4 lg:pt-16 lg:pb-6">
            <div className="max-w-screen-lg mx-auto px-6 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-row items-center justify-center gap-3 mb-[12px]"
                    >
                        <div className="w-[40px] h-[1px] bg-navy opacity-20"></div>
                        <span className="font-body text-navy opacity-40 uppercase tracking-widest text-xs font-medium">
                            ADVISORY SERVICES
                        </span>
                        <div className="w-[40px] h-[1px] bg-navy opacity-20"></div>
                    </motion.div>

                    <motion.div variants={staggerItem}>
                        <h1 className="font-cormorant text-navy text-3xl lg:text-5xl font-semibold leading-tight text-center mt-[12px]">
                            Strategic Counsel. Delivered.
                        </h1>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
