import type { Metadata } from 'next';
import AdvisoryIdentityRow from "@/components/sections/AdvisoryIdentityRow";

export const metadata: Metadata = {
    title: 'Advisory Services',
    description: 'Advisory services and engagement models offered by John Kanyi through Thinkatonne Advisory.',
};
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
