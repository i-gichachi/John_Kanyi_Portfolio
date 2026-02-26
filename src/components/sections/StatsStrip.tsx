"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/StatCard";
import { staggerContainer, staggerItem } from "@/lib/animations";
import stats from "@/data/stats";

export default function StatsStrip() {
    return (
        <section className="w-full bg-navy py-8 lg:py-10 px-6 lg:px-12 xl:px-20">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {stats.map((stat: any, index: number) => (
                    <motion.div key={index} variants={staggerItem}>
                        <StatCard
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            label={stat.label}
                            dark={false}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
