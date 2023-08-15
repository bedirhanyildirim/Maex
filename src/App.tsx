import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import routers from './routers'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase/firebase.config'
import { setUser, setUserProfile } from "./stores/auth"
import { useEffect, useState } from 'react'
import { setLoader } from './stores/loader'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)
  const userInfo = useSelector(state => state.auth.user)
  const userProfile = useSelector(state => state.auth.userProfile)

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
          const date = new Date()
          const dateISO = date.toISOString()

          await setDoc(doc(db, 'users', user.uid), {lastLogin: dateISO}, {merge: true})
          profileData = await getDoc(profileSnap)
          dispatch(setUserProfile(profileData.data()))
        } else {
          dispatch(setUserProfile({}))
          navigate('/complete-profile')
        }
        setIsAuth(true)
      } else {
        dispatch(setUser({}))
      }
      dispatch(setLoader(false))
    })
  }, [])

  // if already logged in user tries to go login or signup pages
  /*useEffect(() => {
    if (location.pathname === '/auth/signin' || location.pathname === '/auth/signup' || location.pathname === '/complete-profile') {
      navigate(location.state?.return_url || -1)
    }
    checkCompletedProfile()
  }, [isAuth, location.pathname])

  const checkCompletedProfile = () => {
    if (Object.keys(userInfo).length > 0 && Object.keys(userProfile).length !== 0 && location.pathname !== '/complete-profile') {
      console.log('missing user info')
      navigate('/complete-profile')
    }
  }*/

  return useRoutes(routers)
}
