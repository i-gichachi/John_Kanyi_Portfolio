"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

export default function TrustStrip() {
    const logos = [
        { src: "/logos/HJFMRI_logo.jpg", name: "HJFMRI", alt: "HJFMRI" },
        { src: "/logos/Farm_Africa_logo.jpg", name: "Farm Africa", alt: "Farm Africa" },
        { src: "/logos/landolakesid_logo.jpg", name: "Land O'Lakes", alt: "Land O'Lakes International Development" },
        { src: "/logos/Fintrac_Inc_logo.jpg", name: "Fintrac Inc.", alt: "Fintrac Inc" },
        { src: "/logos/Vegpro_Group_logo.png", name: "Vegpro Group", alt: "Vegpro Group" },
        { src: "/logos/global-communities-formelry-chf-international-logo.jpg", name: "Global Communities", alt: "Global Communities" },
        { src: "/logos/counterpart_international_logo.jpg", name: "Counterpart International", alt: "Counterpart International" },
        { src: "/logos/St.John_Community_logo.png", name: "St. John's Community Centre", alt: "St. Johns Community Centre" },
        { src: "/logos/Sobat_Development_Agency_logo.jpg", name: "Sobat Development Agency", alt: "Sobat Development Agency" },
        { src: "/logos/South_Sudan_Disabled_Persons_Association_logo.jpg", name: "SSDPA", alt: "South Sudan Disabled Persons Association" },
    ];

    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="bg-white py-4 lg:py-6 w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-[16px] lg:px-[24px]">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="font-inter text-muted uppercase tracking-widest text-[10px] sm:text-xs text-center mb-[20px] lg:mb-[32px]"
                >
                    Organisations I Have Served
                </motion.div>

                <div
                    className="marquee-wrapper relative overflow-hidden w-full py-[8px] lg:py-[16px]"
                    style={{
                        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
                    }}
                >
                    <div className="animate-marquee flex flex-row items-center w-fit gap-0">
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.name}-${index}`}
                                className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0 w-[180px] sm:w-[240px] lg:w-[280px] px-[8px] sm:px-[16px]"
                            >
                                <div className="relative h-[48px] sm:h-[56px] lg:h-[72px] w-full flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={200}
                                        height={60}
                                        className="transition-transform duration-300 group-hover:scale-110 object-contain block"
                                        style={{ maxHeight: "100%", width: "auto" }}
                                    />
                                </div>
                                <span className="block text-center text-navy font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-3 text-xs sm:text-sm font-inter whitespace-nowrap">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
