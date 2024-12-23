import type { Metadata } from 'next';

import MyProfile from "@/components/profile/my";

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'View my profile',
}

export default function Profile() {
    return (
      <div>
        <MyProfile />
      </div>
    )
  }  