"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import testimonials from "@/data/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ImpactTestimonials() {
    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <SectionTitle title="What Colleagues Say" align="left" />
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[32px] mt-8 lg:mt-12"
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
    const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

    return (
        <motion.div
            variants={staggerItem}
            className="h-full"
            onMouseEnter={() => setHoveredTestimonial(index)}
            onMouseLeave={() => setHoveredTestimonial(null)}
        >
            <div
                className="bg-white border border-bordergrey rounded-xl p-[24px] lg:p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative overflow-hidden h-full flex flex-col transition-all duration-300"
                style={{
                    borderLeft: hoveredTestimonial === index ? "3px solid #1B2A4A" : "3px solid transparent",
                    transition: "border-left 0.3s ease"
                }}
            >
                <div className="absolute top-[-8px] left-[8px] pointer-events-none">
                    <span className="font-cormorant text-navy opacity-[0.06] text-[8rem] font-semibold leading-none">
                        "
                    </span>
                </div>
                <div className="font-inter text-charcoal text-sm leading-relaxed italic pt-[40px] flex-1">
                    {testimonial.quote}
                </div>
                <div className="w-[48px] h-[1px] bg-bordergrey mt-4 mb-4" />
                <div className="flex flex-col">
                    {testimonial.logo && (
                        <div className="relative h-[24px] w-[80px] mb-3">
                            <Image src={testimonial.logo} alt={testimonial.organisation} fill className="object-contain object-left" />
                        </div>
                    )}
                    <div className="font-cormorant text-navy text-lg font-semibold">{testimonial.name}</div>
                    <div className="font-inter text-mutedgrey text-xs mt-[2px]">{testimonial.role}</div>
                    <div className="font-inter text-navy opacity-60 text-xs font-medium mt-[2px]">{testimonial.organisation}</div>
                </div>
                <div className="flex flex-row gap-1 mt-3 justify-end">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-navy fill-current opacity-30" size={12} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
