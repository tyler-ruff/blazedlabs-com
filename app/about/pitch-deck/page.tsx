import { Metadata } from 'next';

import PitchDeck from '@/components/about/pitch';

export const metadata: Metadata = {
    title: 'Blazed One Pitch Deck',
}

export default function PitchDeckPage(){
    return (
        <PitchDeck />
    );
}