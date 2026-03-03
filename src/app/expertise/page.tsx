import type { Metadata } from 'next';
import CompetenciesSection from "@/components/sections/CompetenciesSection";

export const metadata: Metadata = {
    title: 'Expertise',
    description: 'Core competencies, skills, and tools utilised by John Kanyi for grants and business development.',
};
import ToolsSection from "@/components/sections/ToolsSection";

export default function ExpertisePage() {
    return (
        <>
            <CompetenciesSection />
            <ToolsSection />
        </>
    );
}
