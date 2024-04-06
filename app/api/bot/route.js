export const POST = async (req, res) => {
    const {messages} = await req.json();
    try {
        
        return new Response(JSON.stringify())
    } catch(error) {
        console.error(error);
        res.json({ error: 'Internal Server Error' });
    }
}