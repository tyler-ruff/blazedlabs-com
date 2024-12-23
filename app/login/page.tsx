import { Metadata } from "next";

import Login from "@/components/login";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to Blazed Labs.'
}

export default function LoginPage() {
  return (
    <div className="max-w-lg relative mx-auto py-10">
      <Login />
    </div>
  );
}
