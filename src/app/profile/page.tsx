import type { Metadata } from 'next';
import { ProfileSummary } from "@/components/sections/ProfileSummary";

export const metadata: Metadata = {
    title: 'Profile',
    description: 'Professional profile and career timeline of John Kanyi.',
};
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsAndMemberships } from "@/components/sections/CertificationsAndMemberships";
import { PublicationsSection } from "@/components/sections/PublicationsSection";

export default function ProfilePage() {
    return (
        <>
            <ProfileSummary />
            <CareerTimeline />
            <EducationSection />
            <CertificationsAndMemberships />
            <PublicationsSection />
        </>
    );
}
