import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

import { firebaseConfig } from '@/config/firebase';

const firebaseApp = initializeApp(firebaseConfig);
const realtime = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export const isAuthenticated = () => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
};

export { 
    firebaseApp,
    db,
    realtime,
    storage,
    auth,
    provider
};