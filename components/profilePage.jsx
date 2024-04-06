import { fetchUserDetails } from "@/utils/supabase/actions"
const ProfileComponents = async ({ user_id }) => {
  const userDetails = await fetchUserDetails(user_id)
  const user_name = userDetails?.user.user_metadata.name
  return (
    <div className="flex flex-col items-center justify-center align-middle mb-8 mt-2 text-center w-full bg-white p-5 rounded-md">
      <img src={userDetails?.user.user_metadata.picture} className="rounded-full overflow-hidden mr-2" width={100} height={100}></img>
      <h1 className="text-3xl text-gray-950 font-semibold">{user_name}</h1>
    </div>)
}

export default ProfileComponents