// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBke4hrpLL5mZ8lMfTlgvhFFXoTLVnOmK8',
  authDomain: 'react-js-pokemon.firebaseapp.com',
  projectId: 'react-js-pokemon',
  storageBucket: 'react-js-pokemon.appspot.com',
  messagingSenderId: '487013898164',
  appId: '1:487013898164:web:656fd95acc0090f36104e1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
