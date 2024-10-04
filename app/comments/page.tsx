import { Metadata } from 'next';

import CommentPolicy from "@/components/policy/comments";

export const metadata: Metadata = {
    title: 'Comment Policy',
}

export default function Page() {
  return (
    <CommentPolicy />
  );
}