import { addUser, checkUser } from "@/utils/supabase/actions";
export async function POST(req, res) {
    const { id, name, email, image } = await req.json();
    const userExists = await checkUser(id)
    if (!userExists) {
        await addUser(id, name, email, image)
    }
    return new Response(JSON.stringify({ status: 200 }))
}