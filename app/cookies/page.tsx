import { Metadata } from 'next';

import CookiePolicy from "@/components/policy/cookies";

export const metadata: Metadata = {
    title: 'Cookie Policy',
}

export default function Page() {
  return (
    <CookiePolicy />
  );
}