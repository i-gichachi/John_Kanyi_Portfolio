"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Monitor, FileText, Users } from "lucide-react";

const toolGroups = [
    {
        name: "Financial Management",
        icon: Monitor,
        description: "Managing donor funds across portfolios exceeding $100M annually with full compliance and zero material audit findings",
        tools: ["QuickBooks", "Microsoft Excel", "ERP Systems", "GMS Software", "Financial Systems"],
    },
    {
        name: "Document and Project Management",
        icon: FileText,
        description: "Producing winning proposals, donor reports and programme documentation to the highest institutional standards across 17 years",
        tools: ["Microsoft Word", "Microsoft PowerPoint", "Adobe Acrobat", "Google Workspace", "Project Software"],
    },
    {
        name: "Collaboration and Communication",
        icon: Users,
        description: "Coordinating across six country offices, remote teams and international donor stakeholders with clarity and precision",
        tools: ["SharePoint", "Microsoft Teams", "Zoom", "Slack"],
    }
];

export const ToolsSection = () => {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

    return (
        <section className="bg-white py-8 lg:py-12 w-full">
            <div className="max-w-screen-lg mx-auto px-6">
                <SectionTitle title="Tools and Software" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col gap-[20px] lg:gap-[32px] mt-[32px] lg:mt-[48px]"
                >
                    {toolGroups.map((group, index) => {
                        const IconComp = group.icon;

                        return (
                            <motion.div
                                key={group.name}
                                variants={staggerItem}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                            >
                                <div
                                    onMouseEnter={() => setHoveredCategory(index)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                    style={{
                                        borderColor: hoveredCategory === index ? "#1B2A4A" : "#DDE1E7",
                                        transition: "border-color 0.25s ease"
                                    }}
                                    className="bg-white border border-bordergrey rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row"
                                >
                                    {/* LEFT ZONE */}
                                    <div className="bg-navy p-[24px] lg:p-[32px] flex flex-col justify-between w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
                                        <div>
                                            <IconComp size={20} className="text-white opacity-60 mb-4" />
                                            <h3 className="font-cormorant text-white text-lg lg:text-xl font-semibold leading-snug">
                                                {group.name}
                                            </h3>
                                            <div className="w-[32px] h-[1px] bg-white opacity-20 mt-[12px] mb-[12px]" />
                                            <p className="font-inter text-white opacity-50 text-xs leading-relaxed">
                                                {group.description}
                                            </p>
                                            <div className="block lg:hidden mt-[12px]">
                                                <span className="font-inter text-white opacity-30 text-xs">
                                                    {group.tools.length} tools
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-5 hidden lg:block">
                                            <span className="font-inter text-white opacity-30 text-xs">
                                                {group.tools.length} tools
                                            </span>
                                        </div>
                                    </div>

                                    {/* RIGHT ZONE */}
                                    <div className="bg-white p-[24px] lg:p-[32px] flex-1 flex flex-col justify-center">
                                        <div className="flex flex-wrap gap-3">
                                            {group.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    style={{
                                                        borderColor: hoveredCategory === index ? "rgba(27,42,74,0.3)" : "#DDE1E7",
                                                        transition: "border-color 0.25s ease"
                                                    }}
                                                    className="bg-white border border-bordergrey rounded-full px-5 py-2.5 font-inter text-charcoal text-sm inline-flex items-center cursor-default transition-all duration-200"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ToolsSection;
