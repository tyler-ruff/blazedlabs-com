import { Metadata } from 'next';

import SMSTermsOfService from '@/components/policy/sms';

export const metadata: Metadata = {
    title: 'SMS Terms and Conditions',
}

export default function Page() {
  return (
    <SMSTermsOfService />
  );
}