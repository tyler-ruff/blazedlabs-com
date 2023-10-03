import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from '@/config/firebase';

const firebaseApp = initializeApp(firebaseConfig);
const realtime = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');


export { 
    firebaseApp,
    db,
    realtime,
    auth,
    provider
};