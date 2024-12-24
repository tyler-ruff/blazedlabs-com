import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

import ViewProfile from "@/components/profile/view";
import { getInitials } from '@/lib/functions';
import { url } from '@/config/app';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const fetchURL = new URL(`/api/profile?uid=${id}`, url);
  const profile = await fetch(fetchURL).then(
    (result) => result.json()
  );

  if(!profile){
    redirect('/404');
  }

  const initials = getInitials(profile.displayName);
  
  return {
    title: `${profile.displayName} | View Profile`,
    description: `Public user profile of ${profile.displayName}.`,
    openGraph: {
      title: `${profile.displayName}'s Profile`,
      type: "profile",
      url: new URL(`/profile/${id}`, url),
      images: [
        { url: profile.avatar },
        { url: [new URL(`/api/og/avatar?title=${initials}`, url)] }
      ]
    }
  }
}

export default function Profile({
  params,
}: {
  params: {
    id: string
  }
}) {
    return (
      <div>
        <ViewProfile uid={params.id} />
      </div>
    )
  }  