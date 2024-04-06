import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react'
const Nav = () => {
    const router = useRouter()
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
        }
    }, [])
    return (
        <div>Nav</div>
    )
}

export default Nav