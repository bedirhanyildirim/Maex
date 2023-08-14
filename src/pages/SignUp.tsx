import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoader } from '../stores/loader'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

export default function SignUp() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(setLoader(true))
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(`an error occurred: ${e}`)
    } finally {
      dispatch(setLoader(false))
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center mb-10">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          />
        </form>
        <p className="mt-8 text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}