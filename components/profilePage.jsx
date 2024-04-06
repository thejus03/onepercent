import { fetchUserDetails } from "@/utils/supabase/actions"
const ProfileComponents = async ({ user_id }) => {
  const userDetails = await fetchUserDetails(user_id)
  console.log("userDetailss:", userDetails)
  const user_name = userDetails?.user.user_metadata.name
  return (
    <div className="flex items-center justify-center align-middle mb-8 text-center">
      <img src={userDetails?.user.user_metadata.picture} className="rounded-full overflow-hidden mr-2" width={100} height={100}></img>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white drop-shadow-md">{user_name}</h1>
    </div>)
}

export default ProfileComponents