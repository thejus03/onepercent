import ProfileComponents from "@/components/profilePage"
import CatSection from "@/components/CatSection"
import ProfileCards from "@/components/profileCards"
import ProfilePosts from "@/components/profilePosts"
const ProfilePage = ({ params }) => {
  return (
    <div className='flex items-center flex-col mx-2'>
      <ProfileComponents user_id={params.user_id} />
      <div className=' max-w-6xl mx-6 flex justify-center xl:px-6'>
        <CatSection />
      </div>
      <ProfileCards />
      <ProfilePosts user_id={params.user_id} />
    </div>
  )
}
export default ProfilePage