import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase/firebase.config'
import { setLoader } from '../stores/loader'
import { setUserProfile } from '../stores/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function CompleteProfile() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [lookingFor, setLookingFor] = useState('');

  const userInfo = useSelector(state => state.auth.user)

  const handleProfileUpdate = async (e) => {
    e.preventDefault()

    try {
      dispatch(setLoader(true))
      const date = new Date()
      const dateISO = date.toISOString()

      const newUser = {
        uid: userInfo.uid,
        name: name,
        birthdate: birthdate,
        gender: gender,
        lookingFor: lookingFor,
        created: dateISO
      }

      await setDoc(doc(db, 'users', userInfo.uid), newUser)
      dispatch(setUserProfile(newUser))
      console.log('başarılı')
    } catch (e) {
      console.log(`an error occurred: ${e}`)
    } finally {
      dispatch(setLoader(false))
      navigate('/')
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Complete Your Profile</h1>
        <form onSubmit={handleProfileUpdate}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium mb-1">
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium mb-1">
              Gender
            </label>
            <select
              id="gender"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="lookingFor" className="block text-sm font-medium mb-1">
              Looking for
            </label>
            <select
              id="lookingFor"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              required
            >
              <option value="">Looking for</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both</option>
            </select>
          </div>
          <input
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            value="Create Profile"
          />
        </form>
      </div>
    </div>
  );
}