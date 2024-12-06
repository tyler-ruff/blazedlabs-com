import { Metadata } from "next";

import Register from "@/components/register";

export const metadata: Metadata = {
  title: 'Register',
}

export default function RegisterPage() {
  return (
    <div>
      <Register />
    </div>
  );
}
