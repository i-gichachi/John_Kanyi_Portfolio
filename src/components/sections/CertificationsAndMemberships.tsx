"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import certifications from "@/data/certifications";
import memberships from "@/data/memberships";
import { useState } from "react";

const CertificationLogo = ({ src, acronym }: { src?: string; acronym: string }) => {
    const [hasError, setHasError] = useState(false);

    if (!src || hasError) {
        return (
            <div className="font-cormorant text-navy text-sm font-semibold flex items-center justify-center w-full h-full">
                {acronym}
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={acronym}
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            onError={() => setHasError(true)}
        />
    );
};

export const CertificationsAndMemberships = () => {
    const [hoveredCert, setHoveredCert] = useState<number | null>(null);

    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* LEFT COLUMN - CERTIFICATIONS */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <SectionTitle title="Professional Certifications" align="left" />

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            className="mt-[40px] flex flex-col"
                        >
                            {certifications.map((cert: any, index: number) => {
                                const isLast = index === certifications.length - 1;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                transition: { delay: index * 0.08, duration: 0.5, ease: "easeOut" }
                                            }
                                        }}
                                        onMouseEnter={() => setHoveredCert(cert.id)}
                                        onMouseLeave={() => setHoveredCert(null)}
                                        className={`w-full py-4 ${isLast ? '' : 'border-b border-bordergrey'} relative transition-all duration-200 cursor-default ${hoveredCert === cert.id ? 'bg-softblue rounded-lg px-3' : ''
                                            }`}
                                        style={hoveredCert === cert.id ? { borderLeft: '3px solid #1B2A4A' } : {}}
                                    >
                                        <div className="flex flex-row items-center gap-4">
                                            <div className="w-[52px] h-[52px] flex-shrink-0 bg-white border border-bordergrey rounded-lg flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden">
                                                <CertificationLogo
                                                    src={cert.logo}
                                                    acronym={cert.acronym || cert.title?.split(' ')[0] || ''}
                                                />
                                            </div>

                                            <div className="flex-col flex-1">
                                                <div className="font-cormorant text-navy text-base font-semibold">
                                                    {cert.title}
                                                </div>
                                                <div className="font-body text-muted-grey text-xs mt-[2px]">
                                                    {cert.issuer}
                                                </div>
                                            </div>

                                            <div className="hidden sm:block font-body text-muted-grey text-xs text-right">
                                                {cert.location || cert.country}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN - MEMBERSHIPS */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                    >
                        <SectionTitle title="Professional Memberships" align="left" />

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            className="flex flex-col gap-4 mt-[40px]"
                        >
                            {memberships.map((membership: any, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" }
                                        }
                                    }}
                                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                                    className="bg-softblue/10 border border-bordergrey/60 rounded-xl p-5 lg:p-6 shadow-sm transition duration-300 relative overflow-hidden hover:border-l-4 hover:border-l-navy hover:shadow-md hover:bg-white group"
                                >
                                    <div className="flex flex-row justify-between items-start gap-4">
                                        <div className="w-[36px] h-[36px] rounded-full border border-bordergrey bg-softblue flex items-center justify-center flex-shrink-0">
                                            <span className="font-cormorant text-navy text-sm font-semibold">
                                                {(membership.organisation || membership.organization || "?").charAt(0)}
                                            </span>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <div className="font-cormorant text-navy text-lg font-semibold leading-snug group-hover:text-navy/90">
                                                {membership.organisation || membership.organization}
                                            </div>
                                            <div className="font-body text-muted-grey text-xs font-medium uppercase tracking-wide mt-[4px]">
                                                {membership.status || membership.role || membership.designation || membership.type}
                                            </div>
                                            {(membership.note || membership.publicationNote) && (
                                                <div className="flex flex-row items-start gap-4 mt-[12px] pt-[12px] border-t border-bordergrey/50">
                                                    <BookOpen className="text-navy opacity-60 w-[14px] h-[14px] flex-shrink-0 mt-[2px]" />
                                                    <div className="font-body text-charcoal text-xs italic leading-relaxed">
                                                        {membership.note || membership.publicationNote}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
