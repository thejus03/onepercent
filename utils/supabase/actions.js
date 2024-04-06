'use server'
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

if (!supabaseKey || !supabaseUrl) {
  throw new Error("key or url is missng from env variables!");
}

export async function fetchUserDetails(user_id) {
  const { data, error } = await supabase.auth.admin.getUserById(user_id);
  if (error) {
    console.log("error fetching user details:", error);
    return;
  }
  return data;
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

export async function universalSearch(query) {
  if (query.length === 0) return
  const tags = await getAllTags()
  if (tags.includes(query)) {
    const { data: networkData, error: networkError } = await supabase
      .from('network')
      .select('html_id,title,description,tags')
    const filteredNetworkData = networkData.filter(data => data?.tags?.includes(query))
    const networkDataWithTag = filteredNetworkData?.map(item => ({ ...item, tag: 'network' }));
    return networkDataWithTag

  }
  const { data: networkData, error: networkError } = await supabase
    .from('network')
    .select('html_id,title,description')
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(6)

  if (networkError) {
    console.error('Error fetching network data:', networkError.message);
    return [];
  }

  const { data: serviceData, error: serviceError } = await supabase
    .from('service')
    .select('html_id,title,description')
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(6)
  if (serviceError) {
    console.error('Error fetching service data:', serviceError.message);
    return [];
  }

  // Combine the rows/results from both tables
  const networkDataWithTag = networkData.map(item => ({ ...item, tag: 'network' }));
  const serviceDataWithTag = serviceData.map(item => ({ ...item, tag: 'service' }));

  const combinedData = [...networkDataWithTag, ...serviceDataWithTag];

  return combinedData;
}

// FOR chatbot
export async function getChats(user_id) {
  let { data, error } = await supabase.from("chats").select().match({ id: user_id })
  if (data.length > 0) {
    return data
  }
}

// to save a chat, will need to call getChats and then append the message array
export async function saveChat(message_array, user_id) {
  // remove the system message
  const fetchedChatsData = await getChats(user_id)
  if (fetchedChatsData.length > 0) {
    let clean_message_array = message_array.slice(1)
    // the previous messages
    let fetchedChatsArray = fetchedChats[0].messages
    fetchedChatsArray.push(clean_message_array)
    let { error } = supabase.from("chats").update({ messages: fetchedChatsArray }).match({ user_id: user_id })
  }
  else {
    // there are no chats previously
    let { error } = supabase.from("chats").insert({ messages: message_array, user_id: user_id })
  }
}