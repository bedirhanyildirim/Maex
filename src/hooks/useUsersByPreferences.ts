import { useEffect, useState } from 'react'
import { getUsersByPreferences } from '../api'
import { useSelector } from 'react-redux'

const useUsersByPreferences = () => {
  const userProfile = useSelector(state => state.auth.userProfile)
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsersByPreferences(userProfile).then(res => {
      setUsers(res)
    })
  }, [])

  return users
}

export default useUsersByPreferences