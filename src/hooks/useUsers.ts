import { useEffect, useState } from 'react'
import { getUsers } from '../api'
import {useSelector} from "react-redux";

const useUsers = () => {
  const userProfile = useSelector(state => state.auth.userProfile)
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log("fetch users")
    getUsers(userProfile).then(res => {
      setUsers(res)
    })
  }, [])

  return users
}

export default useUsers