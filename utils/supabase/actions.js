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

// FOR chatbot
export async function getChats(user_id) {
  let { data, error } = await supabase.from("chats").select().match({ id: user_id })
  if (data.length > 0) {
    return data
  }
  return
}

// to save a chat, will need to call getChats and then append the message array
export async function saveChat(message_array, user_id) {
  // remove the system message
  let clean_message_array = message_array.slice(1)
  const fetchedChatsData = await getChats(user_id)
  if (fetchedChats.length > 0) {
    // the previous messages
    let fetchedChatsArray = fetchedChats[0].messages
    fetchedChatsArray.push(clean_message_array)
    let { error } = supabase.from("chats").update({ messages: fetchedChatsArray }).match({ user_id: user_id })
  }
  // there are no chats previously
  let { error } = supabase.from("chats").insert({ messages: message_array })
}