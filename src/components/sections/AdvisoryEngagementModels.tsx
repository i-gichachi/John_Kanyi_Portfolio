"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const engagementModels = [
    {
        number: "01",
        name: "Project Engagement",
        description: "A focused time-bound engagement designed to solve a specific challenge. I come in, diagnose the situation, deliver a defined scope of work and leave your organisation with tangible outputs and improved capability.",
        details: [
            { label: "Duration", value: "Typically 4 to 12 weeks" },
            { label: "Deliverable", value: "Defined scope with clear measurable outputs" },
            { label: "Best For", value: "Specific challenges needing focused expert intervention." }
        ],
        enquirySubject: "Project Engagement Enquiry",
    },
    {
        number: "02",
        name: "Retained Advisory",
        description: "An ongoing monthly partnership that gives your organisation consistent access to senior grants and business development expertise without the cost of a full-time hire. Strategic counsel available when you need it most.",
        details: [
            { label: "Duration", value: "Ongoing monthly engagement" },
            { label: "Deliverable", value: "Strategic counsel and on-demand support" },
            { label: "Best For", value: "Organisations needing continuous grants leadership capacity." }
        ],
        enquirySubject: "Retained Advisory Enquiry",
    },
    {
        number: "03",
        name: "Workshop and Training",
        description: "Customised intensive training designed to build your team's internal capability in grants management, proposal development, compliance or programme leadership. Delivered on-site or virtually across Africa.",
        details: [
            { label: "Duration", value: "One to three days on-site or virtual" },
            { label: "Deliverable", value: "Customised training materials and action plan" },
            { label: "Best For", value: "Teams needing to build internal grants management capability." }
        ],
        enquirySubject: "Workshop and Training Enquiry",
    }
];

export default function AdvisoryEngagementModels() {
    const [hoveredModel, setHoveredModel] = useState<number | null>(null);

    return (
        <section className="bg-softblue py-10 lg:py-16">
            <div className="max-w-screen-lg mx-auto px-6">
                <SectionTitle title="How We Work Together" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 items-stretch"
                >
                    {engagementModels.map((model, index) => {
                        const isHovered = hoveredModel === index;

                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border rounded-xl p-6 lg:p-8 flex flex-col h-full"
                                style={{
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    borderColor: isHovered ? "#1B2A4A" : "#DDE1E7",
                                    transition: "border-color 0.25s ease"
                                }}
                                onMouseEnter={() => setHoveredModel(index)}
                                onMouseLeave={() => setHoveredModel(null)}
                            >
                                <div className="font-cormorant text-navy opacity-[0.08] text-[5rem] font-semibold leading-none mb-2">
                                    {model.number}
                                </div>
                                <h3 className="font-cormorant text-navy text-xl font-semibold leading-snug">
                                    {model.name}
                                </h3>

                                <div className="h-[1px] bg-bordergrey mt-3 mb-4"></div>

                                <p className="font-body text-charcoal text-sm leading-relaxed flex-1">
                                    {model.description}
                                </p>

                                <div className="mt-4">
                                    {model.details.map((detail, dIndex) => (
                                        <div
                                            key={dIndex}
                                            className={`flex flex-row justify-between items-baseline py-3 ${dIndex !== model.details.length - 1 ? "border-b border-bordergrey" : ""
                                                }`}
                                        >
                                            <span className="font-body text-navy opacity-40 text-xs uppercase tracking-wide flex-shrink-0 mr-3">
                                                {detail.label}
                                            </span>
                                            <span className="font-body text-charcoal text-xs text-right">
                                                {detail.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-bordergrey">
                                    <a
                                        href={`mailto:kanyitoday@gmail.com?subject=${encodeURIComponent(model.enquirySubject)}`}
                                        className="inline-flex items-center gap-2 font-body text-navy text-xs font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-charcoal"
                                    >
                                        ENQUIRE NOW
                                        <ArrowRight size={12} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
