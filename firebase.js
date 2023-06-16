import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDqIZmwB8Ux6Xs1GaiYQJpWLOsGd1S8aXI',
  authDomain: 'if-diploma.firebaseapp.com',
  projectId: 'if-diploma',
  storageBucket: 'if-diploma.appspot.com',
  messagingSenderId: '471670070707',
  appId: '1:471670070707:web:bb50e449b619dc54783fc6',
  measurementId: 'G-Z7NFX97B1F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
