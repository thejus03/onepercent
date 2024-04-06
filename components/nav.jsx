import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react'
const Nav = () => {
  const router = useRouter()
  const [loginData, setLoginData] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  async function signInWithLinkedIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc',
      options: {
        redirectTo: location.origin + "/"
      }
    })
  }
  async function signOutFromLinkedin() {
    await supabase.auth.signOut()
    setIsLoggedIn(false)
    router.push("/");
    router.refresh();
  }
  useEffect(() => {
    const getLoginData = async () => {
      const { data } = await supabase.auth.getSession();
      setLoginData(data)
      if (data.session.user.user_metadata.name.length > 0) {
        setIsLoggedIn(true)
        // when the user is logged in add it to the users table
        const response = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: data?.session.user.user_metadata.name,
            email: data?.session.user.user_metadata.email,
            image: data?.session.user.user_metadata.picture,
            id: data?.session.user.id,
          })
        })
      }
      getLoginData()
    }
  }, [isLoggedIn])
  return (
    <div>Nav</div>
  )
}

export default Nav