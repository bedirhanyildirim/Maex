import useUsers from '../hooks/useUsers'
import UserCard from "../components/userCard";

export default function Home() {

  const users = useUsers()

  return (
    <div className="w-full">
      <div className="mt-4">
        {
          users.map(u => <UserCard user={u} key={u.uid} />)
        }
      </div>
    </div>
  )
}