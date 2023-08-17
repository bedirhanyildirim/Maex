import UserCard from '../components/userCard'
import useUsersByPreferences from '../hooks/useUsersByPreferences'

export default function Home() {

  const users = useUsersByPreferences()

  return (
    <div className="w-full">
      <div className="mt-4">
        {
          users.map(u => <UserCard user={u} key={u.uid} displayPreferences={false} displayLastSeen={false} />)
        }
      </div>
    </div>
  )
}