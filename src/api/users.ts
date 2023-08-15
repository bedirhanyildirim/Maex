import { doc, getDoc, getDocs, query, where, orderBy } from "firebase/firestore"
import { usersCollection, db } from "../firebase/firebase.config"

/*
User {
  birthdate: "1996-12-20"
  created: "2023-08-13T22:49:49.233Z"
  gender:"male"
  lastLogin: timestamp
  lookingFor:"female"
  name: "Bedirhan"
  uid: "9vOUhi5x4HUZgMucNDmZvmAwvjH2"
}
*/

const getUsers = async (user) => {
  const users = []
  //const q = query(usersCollection, where('uid', '!=', user.uid), where('gender', '==', 'user.looking'))
  // lookingfor == gender
  const q = query(usersCollection, orderBy('lastLogin', 'desc'))
  const docSnap = await getDocs(q)
  const docSnapNotMe = docSnap.docs.filter(u => u.data().uid !== user.uid)
  docSnapNotMe.forEach((doc) => {
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
  getUsers,
  getMyProfile
}