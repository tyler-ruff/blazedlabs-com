'use client'

import { useEffect, useState } from 'react';
import { Avatar, Dropdown, Navbar, Modal } from 'flowbite-react';
import { HiUser } from "react-icons/hi";
import { useAuthContext } from "@/context/AuthContext";

import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import LoginForm from '@/components/login/form';

export default function CommentsMenu() {
  const { user, profile } = useAuthContext() as { user: any, profile: any };

  //const [profileData, setProfileData] = useState<any | null>(null);
  const [openModal, setOpenModal] = useState<string | undefined>();
	const [loadingComment, setLoadingComment] = useState<boolean>(true);
	const [commentError, setCommentError] = useState<string | null>(null);

  useEffect(() => {
    setLoadingComment(false);
    /*
    const fetchDocument = async () => {
      try{
        const userProfile: any = getUserProfile(user.uid).then((data) => {
          setProfileData(data);
          setLoadingComment(false);
        });
      } catch(e: any){
        setCommentError(e.message);
      }
    }
    fetchDocument();
    */
  }, []);

  const LoginModal = () => {
    useEffect( () => {
      // Subscribe to the authentication state changes
      const unsubscribe = onAuthStateChanged( auth, ( user ) => {
        if ( user ) {
          // User is signed in
          setOpenModal(undefined);
        } 
      } );
  
      // Unsubscribe from the authentication state changes when the component is unmounted
      return () => unsubscribe();
    }, [] );

    return (
      <Modal 
        role="dialog"
        aria-describedby="Login modal"
        aria-labelledby="Login to Blazed Labs"
        show={openModal === 'form-elements'} 
        size="md" 
        popup 
        onClose={() => setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
      </Modal>
    )
  }

  const logout = async(auth: any) => {
    await signOut(auth);
    await fetch("/api/logout", {
      method: "POST",
    });
  }

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white select-none">
            Comments
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ?
            profile && (<Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="My User Avatar" img={profile.avatar} rounded/>}
              placement="bottom-end"
            ><Dropdown.Header>
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
            <Dropdown.Item onClick={() => setOpenModal('form-elements')}>
              Login
            </Dropdown.Item>
            <Dropdown.Item href="/register">
              Sign Up
            </Dropdown.Item>
            </Dropdown>
            )}
        </div>
      </Navbar>
      <LoginModal />
    </>
  )
}


