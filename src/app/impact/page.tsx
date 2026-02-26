import ImpactIdentityRow from "@/components/sections/ImpactIdentityRow";
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
