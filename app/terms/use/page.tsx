import { Metadata } from 'next';

import AcceptableUsePolicy from '@/components/policy/use';

export const metadata: Metadata = {
    title: 'Acceptable Use Policy',
}

export default function Page() {
  return (
    <AcceptableUsePolicy />
  );
}