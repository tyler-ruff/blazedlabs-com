'use client'

import { useRouter } from 'next/navigation';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import { HiUser } from "react-icons/hi";

import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

import { useAuthContext } from "@/context/AuthContext";

export default function ProfileNav(){
    const router = useRouter();
    const { user, profile } = useAuthContext() as { user: any, profile: any };
    
    const logout = async(auth: any) => {
        await signOut(auth);
        await fetch("/api/logout", {
          method: "POST",
        }).then(() => {
          router.push('/');
        });
    }
    return profile && (
    <Navbar fluid rounded className="border-b">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white select-none">
            Nav Menu
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ?
            (<Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="Avatar" img={profile.avatar} rounded/>}
              placement="bottom-end"
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user.displayName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item href="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item href="/profile/settings">
                Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => logout(auth)}>
                Sign out
              </Dropdown.Item>
            </Dropdown>) : (
            <Dropdown
              arrowIcon={false}
              inline
              label={<HiUser className="w-6 h-6" />}
              placement="bottom-end">
              <Dropdown.Header>
              <span className="block text-sm">
                Not logged in.
              </span>
            </Dropdown.Header>
              <Dropdown.Item href="/login">
                Login
              </Dropdown.Item>
              <Dropdown.Item href="/register">
                Sign Up
              </Dropdown.Item>
            </Dropdown>
            )}
        </div>
      </Navbar>
    )
}