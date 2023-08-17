import { useNavigate, useRoutes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import routers from './routers'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase/firebase.config'
import { setUser, setUserProfile } from "./stores/auth"
import { useEffect } from 'react'
import { setLoader } from './stores/loader'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

export default function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  // if user is already logged in
  useEffect(() => {
    dispatch(setLoader(true))
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = {
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid
        }
        dispatch(setUser(userData))

        const profileSnap = doc(db, 'users', user.uid)
        let profileData = await getDoc(profileSnap)

        if (profileData.exists()) {
          const myTimestamp = Timestamp.fromDate(new Date());

          await setDoc(doc(db, 'users', user.uid), {lastLogin: myTimestamp}, {merge: true})
          profileData = await getDoc(profileSnap)
          dispatch(setUserProfile(profileData.data()))
          navigate('/')
        } else {
          dispatch(setUserProfile({}))
          navigate('/complete-profile')
        }
      } else {
        dispatch(setUser({}))
      }
      dispatch(setLoader(false))
    })
  }, [isLoggedIn])

  return useRoutes(routers)
}
