import AdvisoryIdentityRow from "@/components/sections/AdvisoryIdentityRow";
import AdvisoryServicesGrid from "@/components/sections/AdvisoryServicesGrid";
import AdvisoryEngagementModels from "@/components/sections/AdvisoryEngagementModels";
import AdvisoryWhyJohn from "@/components/sections/AdvisoryWhyJohn";

export default function AdvisoryPage() {
    return (
        <>
            <AdvisoryIdentityRow />
            <AdvisoryServicesGrid />
            <AdvisoryEngagementModels />
            <AdvisoryWhyJohn />
        </>
    );
}
