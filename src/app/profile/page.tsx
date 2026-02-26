import { ProfileSummary } from "@/components/sections/ProfileSummary";
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
