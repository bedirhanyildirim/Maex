import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-full h-16 flex justify-center items-center border border-b">
        <Link to="/">
          <span className="text-xl font-semibold tracking-widest underline decoration-indigo-500 decoration-wavy decoration-2 underline-offset-2">
            maex
          </span>
        </Link>
    </div>
  )
}