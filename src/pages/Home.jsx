import React from 'react';
import CinematicHero from '../components/CinematicHero';
import EngineeredCapabilities from '../components/EngineeredCapabilities';
import Philosophy from '../components/Philosophy';
import OriginStoryboard from '../components/OriginStoryboard';
import FirstMissionOverview from '../components/FirstMissionOverview';
import GlobalCTA from '../components/GlobalCTA';
import SEO from '../components/SEO';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <SEO title="Home" />
            <CinematicHero />
            <EngineeredCapabilities />
            <Philosophy />
            <OriginStoryboard />
            <FirstMissionOverview />
            <GlobalCTA />
        </div>
    );
}
