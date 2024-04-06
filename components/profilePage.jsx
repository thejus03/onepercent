import { fetchUserDetails } from "@/utils/supabase/actions"
const ProfileComponents = async ({ user_id }) => {
  const userDetails = await fetchUserDetails(user_id)
  const user_name = userDetails?.user.user_metadata.name
  return (
    <div className="flex flex-col items-center justify-center align-middle mb-8 mt-5 text-center">
      <img className='rounded-full' src={userDetails?.user.user_metadata.picture} width={100} height={100}></img>
      <h1 className="text-4xl lg:text-5xl font-semibold">{user_name}</h1>
    </div>)
}

export default ProfileComponents