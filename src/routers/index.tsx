import Home from '../pages/Home'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CompleteProfile from '../pages/CompleteProfile'
import Messages from '../pages/Messages'
import GuestUser from '../layouts/GuestUser'
import SignedIn from '../layouts/SignedIn'
import PrivateRoute from './privateRoute'
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <SignedIn />,
    children: [
      {
        path: '',
        element: <Home />,
        auth: true
      },
      {
        path: 'profile',
        element: <Profile />,
        auth: true
      },
      {
        path: 'complete-profile',
        element: <CompleteProfile />,
        auth: true
      },
      {
        path: 'messages',
        element: <Messages />,
        auth: true
      }
    ]
  },
  {
    path: '/',
    element: <GuestUser />,
    children: [
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

const authCheck = routes => routes.map(route => {
  if (route?.auth) {
    route.element = <PrivateRoute>{ route.element }</PrivateRoute>
  }
  if (route?.children) {
    route.children = authCheck(route.children)
  }
  return route
})

export default authCheck(routes)