import { Metadata } from "next";
import { redirect } from 'next/navigation';

import Login from "@/components/login";
import { url } from "@/config/app";

export async function generateMetadata(): Promise<Metadata>{
  const loggedIn = (await fetch(new URL('/api/login', url), {
    method: "GET"
  }));
  const data = (await loggedIn.json());
  if(data.isLogged === "true"){
    redirect('/');
  }
  return {
    title: "Login",
    description: "Login to Blazed Labs."
  }
}

export default function LoginPage() {
  return (
    <div className="max-w-lg relative mx-auto py-10">
      <Login />
    </div>
  );
}
