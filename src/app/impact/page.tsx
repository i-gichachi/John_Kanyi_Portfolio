import type { Metadata } from 'next';
import ImpactIdentityRow from "@/components/sections/ImpactIdentityRow";

export const metadata: Metadata = {
    title: 'Impact',
    description: 'Explore the quantifiable impact and case studies of programmes managed by John Kanyi.',
};
import ImpactMetricsStrip from "@/components/sections/ImpactMetricsStrip";
import ImpactCaseStudies from "@/components/sections/ImpactCaseStudies";
import ImpactTestimonials from "@/components/sections/ImpactTestimonials";

export default function ImpactPage() {
    return (
        <>
            <ImpactIdentityRow />
            <ImpactMetricsStrip />
            <ImpactCaseStudies />
            <ImpactTestimonials />
        </>
    );
}
