
const ProfilePage = ({ params }) => {
    return (
        <div className='flex items-center flex-col mx-2'>
            <ProfileComponents user_id={params.user_id} />
        </div>
    )
}
export default ProfilePage