import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ children }) {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace={true} state={{
      return_url: location.pathname
    }} />
  }

  return children
}