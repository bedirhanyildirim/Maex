import { Timestamp } from 'firebase/firestore'

export type TFirebaseUser = {
  birthdate: string;
  created: string;
  gender: 'male' | 'female';
  lastLogin: Timestamp;
  lookingFor: string[];
  name: string;
  uid: string;
}