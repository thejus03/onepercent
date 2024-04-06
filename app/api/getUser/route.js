import { fetchUserDetails } from "@/utils/supabase/actions";

export async function POST(req, res) {
    const {user_id} = await req.json();
    const posts = await fetchUserDetails(user_id)
    if (posts) {
        return new Response(JSON.stringify(posts));
    }
}