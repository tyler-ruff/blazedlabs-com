'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LoadingPage from '@/components/loading';

import { generateRandomHex, getInitials } from "@/lib/functions";

import { getStorage,  
         getDownloadURL, 
         uploadBytesResumable 
} from "firebase/storage";
import { getUserProfile } from '@/lib/hooks/users';
import { Profile } from '@/lib/types/user';

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
  const [ profile, setUserProfile ] = useState<Profile | null>( null );
  const [ loading, setLoading ] = useState( true );

  const LoadingSpinner = () => {
    return (
      <div className="text-center dark:bg-gray-800">
        <LoadingPage />
      </div>
    )
  }

  //const database = getDatabase();

  /*
  const getSettings = async( user: User ) => {
    const settingsRef = ref(realtime, `settings/${user.uid}`);
    onValue(settingsRef, (snapshot) => {
      //remove(settingsRef);
        const newSettings = {
          uid: user.uid,
          avatar: `/api/og/avatar?title=${getInitials(user.displayName || 'US')}`,
          displayName: user.displayName,
          theme: generateRandomHex(),
          location: "Anonymous",
          social: {},
          bio: "",
          lastOnline: user.metadata.lastSignInTime
        } as Settings;
        set(settingsRef, newSettings).then(() => {
          setUserSettings(newSettings);
        });

        /*
        if(!snapshot.exists()){
          
        } else {
          const data = snapshot.val() as Settings;
          setUserSettings(data);
        }
        
    });
  };
  */
  useEffect( () => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged( auth, ( user ) => {
      if ( user ) {
        // User is signed in
        setUser( user );
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
      <AuthContext.Provider value={{ user }}>
        {loading ? <div className="py-20"><LoadingSpinner /></div> : children}
      </AuthContext.Provider>
  );
}