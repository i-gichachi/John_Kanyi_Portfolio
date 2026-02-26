"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import testimonialsData from "@/data/testimonials";

export default function TestimonialsSection() {
    const testimonials = (testimonialsData || []).filter((t: any) => t.id === 1 || t.id === 3);

    const displayTestimonials = testimonials.length > 0 ? testimonials : [
        {
            id: 1,
            quote: "John's strategic insight and comprehensive understanding of donor requirements were instrumental in our success. His ability to navigate complex funding landscapes is unmatched.",
            name: "Dr. David Hamm",
            role: "Chief of Party",
            organisation: "Global Health Initiatives"
        },
        {
            id: 3,
            quote: "Working with John transformed our approach to business development. His pipeline management techniques directly resulted in a significant increase in our win rate.",
            name: "Mary Nyale",
            role: "Regional Director",
            organisation: "African Development NGO"
        }
    ];

    return (
        <section className="bg-softblue py-8 lg:py-12">
            <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[24px]">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        title="What Colleagues Say"
                        align="center"
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[32px] mt-[32px] lg:mt-[48px]"
                >
                    {displayTestimonials.map((testimonial: any, index: number) => (
                        <motion.div
                            key={testimonial.id}
                            variants={staggerItem}
                            className="bg-white rounded-xl p-[24px] lg:p-[40px] border border-bordergrey shadow-[0_4px_24px_rgba(0,0,0,0.07)] relative overflow-hidden hover:-translate-y-[4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 flex flex-col justify-between"
                        >
                            {/* Watermark Quote */}
                            <div className="absolute top-[-8px] left-[16px] font-cormorant text-navy text-[7rem] lg:text-[10rem] font-semibold leading-[0.8] opacity-20 pointer-events-none select-none z-0">
                                &ldquo;
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <p className="font-inter text-charcoal text-sm lg:text-base italic leading-loose pt-[40px]">
                                    "{testimonial.quote || testimonial.text}"
                                </p>

                                <div className="mt-auto">
                                    <div className="w-[48px] h-[1px] bg-gold mt-[24px] mb-[20px]" />

                                    <div className="flex justify-between items-end w-full">
                                        <div className="flex flex-col">
                                            {testimonial.logo && (
                                                <div className="relative h-[24px] w-[80px] mb-3">
                                                    <Image src={testimonial.logo} alt={testimonial.organisation} fill className="object-contain object-left" />
                                                </div>
                                            )}
                                            <span className="font-cormorant text-navy text-lg lg:text-xl font-semibold">
                                                {testimonial.name || testimonial.author}
                                            </span>
                                            <span className="font-inter text-muted text-xs mt-[4px]">
                                                {testimonial.role}
                                            </span>
                                            <span className="font-inter text-muted-grey text-xs font-semibold mt-[2px]">
                                                {testimonial.organisation}
                                            </span>
                                        </div>

                                        <div className="flex flex-row gap-1 relative top-[-4px]">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} className="fill-gold text-gold" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
