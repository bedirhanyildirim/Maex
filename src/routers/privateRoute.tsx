import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ children }) {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const isProfileCompleted = useSelector(state => state.auth.isProfileCompleted)
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/auth/signin" replace={true} state={{
      return_url: location.pathname
    }} />
  }

  if (isLoggedIn && !isProfileCompleted && location.pathname !== '/complete-profile') {
    return <Navigate to="/complete-profile" />
  }

  if (isLoggedIn && isProfileCompleted && (location.pathname === '/auth/signin' || location.pathname === '/auth/signup' || location.pathname === '/complete-profile')) {
    return <Navigate to="/" />
  }

  return children
}