import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from '@/config/firebase';

const firebaseApp = initializeApp(firebaseConfig);
const realtime = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp);

export { 
    firebaseApp,
    db,
    realtime
};