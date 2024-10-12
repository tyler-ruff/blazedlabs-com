import { Metadata } from 'next';

import DMCAPolicy from "@/components/policy/dmca";

export const metadata: Metadata = {
    title: 'Disclaimer',
}

export default function Page() {
  return (
    <DMCAPolicy />
  );
}