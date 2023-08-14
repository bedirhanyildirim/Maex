import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setUserProfile } from '../stores/auth'
import { FiSmile, FiCheck, FiAward, FiSearch, FiStar, FiSend } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Profile() {

  const dispatch = useDispatch()
  const userProfile = useSelector(state => state.auth.userProfile)

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}))
      dispatch(setUserProfile({}))
    }).catch((error) => {
      console.log(error)
    })
  }

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed = (
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())
    );

    return isBirthdayPassed ? yearsDiff : yearsDiff - 1
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-full border border-indigo-500 border-8">
          <FiSmile size={120} />
        </div>
        <div className="my-4 flex items-center gap-2">
          <h2 className="text-xl">
            {userProfile.name}, {calculateAge(userProfile.birthdate)}
          </h2>
          <div className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center">
            <FiCheck size={16} color="#ffffff" />
          </div>
        </div>
      </div>
      <div className="w-full flex my-4 gap-2">
        <div className="w-1/2 flex items-center justify-center text-center">
          <Link className="block w-full text-sm font-semibold bg-gray-200 px-4 py-2 rounded">
            Share my Profile
          </Link>
        </div>
        <div className="w-1/2 flex items-center justify-center text-center">
          <Link className="block w-full text-sm font-semibold bg-gray-200 px-4 py-2 rounded">
            Edit my Profile
          </Link>
        </div>
      </div>
      <div className="w-full flex my-4 gap-2">
        <div className="w-1/4 flex flex-col gap-2 items-center justify-center text-center bg-gray-200 aspect-square rounded">
          <FiStar size={24} />
          <span className="block capitalize text-lg">
            {userProfile.gender}
          </span>
        </div>
        <div className="w-1/4 flex flex-col gap-2 items-center justify-center text-center bg-gray-200 aspect-square rounded">
          <FiSearch size={24} />
          <span className="block capitalize text-lg">
            {userProfile.lookingFor}
          </span>
        </div>
        <div className="w-1/4 flex flex-col gap-2 items-center justify-center text-center bg-gray-200 aspect-square rounded">
          <FiAward size={24} />
          <span className="block capitalize text-lg">
            100
          </span>
        </div>
        <div className="w-1/4 flex flex-col gap-2 items-center justify-center text-center bg-gray-200 aspect-square rounded">
          <FiSend size={24} />
          <span className="block capitalize text-lg">
            1000
          </span>
        </div>
      </div>
      <div className="mt-4">
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