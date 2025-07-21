import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Add your Firebase config here
  // For now, using mock config for development
  apiKey: "demo-api-key",
  authDomain: "adintel-demo.firebaseapp.com",
  projectId: "adintel-demo",
  storageBucket: "adintel-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);