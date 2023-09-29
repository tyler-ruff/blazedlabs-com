import { Metadata } from 'next';

import TermsOfService from "@/components/policy/terms";

export const metadata: Metadata = {
    title: 'Terms and Conditions',
}

export default function Page() {
  return (
    <TermsOfService />
  );
}