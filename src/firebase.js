import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnDNExUxaOHJDkJCbU0x_KjxJCDbmPuuQ',
  authDomain: 'giant-1d6c6.firebaseapp.com',
  projectId: 'giant-1d6c6',
  storageBucket: 'giant-1d6c6.appspot.com',
  messagingSenderId: '419535352577',
  appId: '1:419535352577:web:1a338cd78eb42e52ec2100',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

export const auth = fb.auth()
export default fb