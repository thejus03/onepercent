'use server'
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

if (!supabaseKey || !supabaseUrl) {
    throw new Error("key or url is missng from env variables!");
}

export async function addUser(user_id, name, email, profile_image) {
    let { error } = await supabase.from("user").insert({
        id: user_id,
        email: email,
        name: name,
        image: profile_image
    })
    if (error) {
        console.log(error)
        return false
    }
    return true
}
export async function checkUser(user_id) {
    let { data, error } = await supabase.from("user").select().match({ id: user_id })
    if (data.length > 0) return true
    return false
}