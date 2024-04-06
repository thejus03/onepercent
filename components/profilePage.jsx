'use client'
import { fetchUserDetails } from "@/utils/supabase/actions"
import { useEffect, useState } from "react"
const ProfileComponents = ({ user_id }) => {
  const [user, setUser] = useState()
  let userDetails
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/getUser',{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({
          user_id: user_id
        })
      })
      const userDetails = await response.json()
      setUser(userDetails) 
    }
    fetchUser()
  },[])
  const user_name = user?.user.user_metadata.name
  return (
    <div className="flex flex-col items-center justify-center align-middle mb-8 mt-5 text-center">
      <img className='rounded-full' src={user?.user.user_metadata.picture} width={100} height={100}></img>
      <h1 className="text-4xl lg:text-5xl font-semibold">{user_name}</h1>
    </div>)
}

export default ProfileComponents