import { doc, getDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import { usersCollection, db } from '../firebase/firebase.config'

const getAllUsersByLastActivity = async (user) => {
  const users = []
  const q = query(usersCollection, orderBy('lastLogin', 'desc'))
  const docSnap = await getDocs(q)
  const docSnapNotMe = docSnap.docs.filter(u => u.data().uid !== user.uid)
  docSnapNotMe.forEach((doc) => {
    users.push(doc.data())
  })
  return users
}

const getUsersByPreferences = async (user) => {
  const users = []
  const q = query(
    usersCollection,
    where('uid', '!=', user.uid),
    where('gender', '==', user.lookingFor),
    where('lookingFor', '==', user.gender)
  );
  const docSnap = await getDocs(q)
  docSnap.forEach((doc) => {
    users.push(doc.data())
  })
  return users
}

const getMyProfile = async (uid) => {
  let profile = {}
  const q = doc(db, 'users', uid)
  const snap = await getDoc(q)

  if (snap.exists()) {
    profile = snap.data()
  }

  return profile
}

export {
  getAllUsersByLastActivity,
  getUsersByPreferences,
  getMyProfile
}