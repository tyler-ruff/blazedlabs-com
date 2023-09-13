import { Metadata } from 'next';

import PrivacyPolicy from "@/components/policy/privacy";

export const metadata: Metadata = {
    title: 'Privacy Policy',
}

export default function Page() {
  return (
    <PrivacyPolicy />
  );
}