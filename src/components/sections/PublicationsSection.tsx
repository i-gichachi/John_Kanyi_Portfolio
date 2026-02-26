"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExternalLink } from "lucide-react";

const publications = [
    {
        id: 1,
        year: 2023,
        journalShort: "IJBM",
        journalFull: "International Journal of Business and Management",
        type: "Peer Reviewed",
        title: "Capacity Building and Performance of Donor-Funded Projects in Nairobi City County, Kenya",
        authors: "John K. Kanyi and Rosemary James",
        volume: "Vol. 18, No. 2, 2023",
        publisher: "Canadian Center of Science and Education",
        doi: "10.5539/ijbm.v18n2p61",
        published: "February 4, 2023",
        summary: "Examined how technical, managerial and governance competence affect the performance of donor-funded projects in Nairobi County. All three competencies showed significant positive influence on project performance with an R-squared value of 0.853, indicating strong explanatory power.",
        links: [
            { label: "Read Full Article", href: "https://ccsenet.org/journal/index.php/ijbm/article/view/0/48340" },
            { label: "ResearchGate", href: "https://www.researchgate.net/publication/368262024" }
        ]
    },
    {
        id: 2,
        year: 2024,
        journalShort: "GPA",
        journalFull: "Journal of the Grant Professionals Association",
        type: "Strategy Paper",
        title: "Stakeholder Engagement and Emotional Intelligence",
        authors: "John Kanyi, CPA, PMP, CFCM, MBA, MSc",
        volume: "GPA Strategy Papers, Volume 11, Issue 2, Pages 39-46",
        publisher: "Grant Professionals Association",
        doi: null,
        published: "Fall 2024",
        summary: "Argues that grant managers must evolve into multifaceted project leaders and that emotional intelligence is a critical skill for navigating stakeholder engagement throughout the grant lifecycle. Connects stakeholder engagement with project management competencies as key drivers of grant project success.",
        links: [
            { label: "Read Full Paper", href: "https://cdn.ymaws.com/grantprofessionals.org/resource/resmgr/publications/journal/2024_gpa_journal_web_version.pdf" },
            { label: "ResearchGate", href: "https://www.researchgate.net/publication/389973676_Stakeholder_Engagement_and_Emotional_Intelligence" }
        ]
    }
];

export const PublicationsSection = () => {
    return (
        <section className="bg-softblue py-8 lg:py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle
                        title="Publications and Research"
                        align="left"
                        subtitle="Peer-reviewed research and professional strategy papers contributing to the fields of grants management and international development."
                    />
                </motion.div>

                <div className="flex flex-col gap-6 mt-[40px]">
                    {publications.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                            whileHover={{ y: -4, transition: { duration: 0.25 } }}
                            className="bg-white rounded-2xl border border-bordergrey shadow-[0_4px_32px_rgba(0,0,0,0.08)] overflow-hidden transition duration-300 hover:shadow-[0_8px_48px_rgba(0,0,0,0.12)] hover:border-gold flex flex-col lg:flex-row"
                        >
                            {/* LEFT ZONE */}
                            <div className="bg-navy p-6 lg:p-8 flex flex-col justify-between w-full h-auto min-h-[160px] lg:h-auto lg:w-64 flex-shrink-0">
                                <div>
                                    <span className="font-cormorant text-gold opacity-15 text-7xl leading-[0.8] block mb-[8px]">
                                        &ldquo;
                                    </span>
                                    <div className="font-cormorant text-gold text-4xl lg:text-5xl font-semibold leading-none">
                                        {item.year}
                                    </div>
                                    <div className="font-cormorant text-white/30 text-xl font-semibold mt-[4px]">
                                        {item.journalShort}
                                    </div>
                                </div>

                                <span className="border border-white/30 text-white/60 bg-transparent rounded-full px-[10px] py-[4px] font-body text-xs font-medium w-fit mt-[16px] lg:mt-auto lg:mt-0">
                                    {item.type}
                                </span>
                            </div>

                            {/* RIGHT ZONE */}
                            <div className="bg-white p-6 lg:p-8 flex flex-col flex-1">
                                <div className="font-body text-navy/60 uppercase tracking-widest text-xs font-semibold">
                                    {item.journalFull}
                                </div>
                                <h3 className="font-cormorant text-navy text-xl lg:text-2xl font-semibold leading-snug mt-[8px]">
                                    {item.title}
                                </h3>

                                <div className="w-[48px] h-[2px] bg-gold mt-[12px] mb-[16px]" />

                                <div className="font-body text-charcoal text-sm font-medium">
                                    {item.authors}
                                </div>
                                <div className="font-body text-muted-grey text-xs mt-[4px]">
                                    {item.volume} | {item.published}
                                </div>
                                <div className="font-body text-muted-grey text-xs mt-[2px]">
                                    {item.publisher}
                                </div>
                                {item.doi && (
                                    <div className="font-body text-muted-grey text-xs mt-[2px]">
                                        DOI: {item.doi}
                                    </div>
                                )}

                                <div className="h-[1px] bg-bordergrey mt-[16px] mb-[16px] w-full" />

                                <p className="font-body text-charcoal text-sm leading-relaxed">
                                    {item.summary}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    {item.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-row items-center gap-[6px] transition duration-200 group"
                                        >
                                            <span className="font-body text-navy text-xs font-semibold group-hover:text-charcoal transition duration-200">
                                                {link.label}
                                            </span>
                                            <ExternalLink className="text-navy w-[12px] h-[12px] group-hover:text-charcoal transition duration-200" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
