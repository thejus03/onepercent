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
    }
  }, [])
  return (
    <div>Nav</div>
  )
}

export default Nav