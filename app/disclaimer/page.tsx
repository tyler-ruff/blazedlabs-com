import { Metadata } from 'next';

import DisclaimerPolicy from "@/components/policy/disclaimer";

export const metadata: Metadata = {
    title: 'Disclaimer',
}

export default function Page() {
  return (
    <DisclaimerPolicy />
  );
}