import { Metadata } from 'next';

import AccessibilityStatement from "@/components/policy/accessibility";

export const metadata: Metadata = {
    title: 'Accessibility Statement',
}

export default function Page() {
  return (
    <AccessibilityStatement />
  );
}