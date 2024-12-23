import type { Metadata } from 'next';

import Settings from '@/components/profile/settings';

export const metadata: Metadata = {
  title: 'User Settings',
  description: 'Edit your user settings.',
}
export default function SettingsPage() {
    return (
      <div>
        <Settings />
      </div>
    )
  }  