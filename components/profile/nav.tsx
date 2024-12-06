'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, Dropdown, Navbar, Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

import { HiUser } from "react-icons/hi";

import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

import { useAuthContext } from "@/context/AuthContext";
import { getUserProfile } from '@/lib/hooks/users';

export default function ProfileNav(){
    const router = useRouter();
    const { user } = useAuthContext() as { user: any };
    const [profile, setProfileData] = useState<any | null>(null);

    useEffect(() => {
        const fetchDocument = async () => {
          try{
            getUserProfile(user.uid).then((data) => {
              setProfileData(data);
              //setLoading(false);
            });
          } catch(e: any){
            //setError(true);
            console.log(e.message);
          }
        }
        fetchDocument();
    }, []);
    const logout = (auth: any) => {
        signOut(auth).then(() => {
            router.push('/login');
        })
    }
    return (
    <Navbar fluid rounded>
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
              label={<Avatar alt="Avatar" img={profile?.avatar} rounded/>}
              placement="bottom-end"
            ><Dropdown.Header>
              <span className="block text-sm">
                {user.displayName}
              </span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item href="/dash">
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item href="/settings">
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => logout(auth)}>
              Sign out
            </Dropdown.Item></Dropdown>) : (
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