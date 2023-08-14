import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { useDispatch } from 'react-redux'
import { setUser, setUserProfile } from '../stores/auth'

export default function Profile() {

  const dispatch = useDispatch()

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}))
      dispatch(setUserProfile({}))
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="w-full p-4">
      <Link to="/">Home</Link>
      <div>Profile Page!</div>
      <div className="mt-20">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  )
}