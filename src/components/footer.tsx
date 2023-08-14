import { NavLink } from 'react-router-dom'
import { FiCompass, FiUser, FiMessageCircle } from 'react-icons/fi'

export default function Footer() {
  return (
    <div className="w-full h-16 flex justify-center items-center border border-t">
      <nav className="w-full h-full flex items-center justify-around">
        <NavLink to="/profile">
          {({isActive}) => <FiUser size={32} className={isActive ? 'fill-indigo-400' : ''} />}
        </NavLink>
        <NavLink end to="/">
          {({isActive}) => <FiCompass size={32} className={isActive ? 'fill-indigo-400' : ''} />}
        </NavLink>
        <NavLink to="/messages">
          {({isActive}) => <FiMessageCircle size={32} className={isActive ? 'fill-indigo-400' : ''} />}
        </NavLink>
      </nav>
    </div>
  )
}