import firebase from 'firebase/app';
import 'firebase/firestore';

interface User {
    birthdate: string;
    created: string;
    gender: 'male' | 'female'; // Gender can only be 'male' or 'female'
    lastLogin: firebase.firestore.Timestamp; // Assuming you are using Firebase Firestore
    lookingFor: 'male' | 'female'; // Looking for can only be 'male' or 'female'
    name: string;
    uid: string;
  }
