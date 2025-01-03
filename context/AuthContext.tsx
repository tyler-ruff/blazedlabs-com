'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LoadingPage from '@/components/loading';

// Create the authentication context
export const AuthContext = createContext( {} );

// Custom hook to access the authentication context
export const useAuthContext = () => useContext( AuthContext );

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider( { children }: AuthContextProviderProps ): JSX.Element {
  // Set up state to track the authenticated user and loading status
  const [ user, setUser ] = useState<User | null>( null );
  const [ profile, setProfile ] = useState<any | null>(null);
  const [ loading, setLoading ] = useState( true );

  const LoadingSpinner = () => {
    return (
      <div className="text-center dark:bg-gray-800">
        <LoadingPage />
      </div>
    )
  }

  useEffect( () => {
    async function getProfile(user: any){
      try{
        const res = await fetch(`/api/profile?uid=${user.uid}`);
        const data = await res.json();
        setProfile(data);
      } catch (error){
        setProfile(null);
      }
    }
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged( auth, ( user ) => {
      if ( user ) {
        // User is signed in
        setUser( user );
        getProfile( user );
      } else {
        // User is signed out
        setUser( null );
      }
      // Set loading to false once authentication state is determined
      setLoading( false );
    } );

    // Unsubscribe from the authentication state changes when the component is unmounted
    return () => unsubscribe();
  }, [] );

  // Provide the authentication context to child components
  return (
      <AuthContext.Provider value={{ user, profile }}>
        {loading ? <div className="py-20"><LoadingSpinner /></div> : children}
      </AuthContext.Provider>
  );
}