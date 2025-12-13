import { NextRequest } from "next/server";
import { Wrapper } from "enkanetwork.js";

// Genshin client and Star Rail client.
const { genshin } = new Wrapper();

export async function POST(request: NextRequest) {
    const { uuid } = await request.json();
    const response = await genshin.getPlayer(parseInt(uuid));
    const { player } = response;
    return new Response(JSON.stringify({ playerUsername: player.username }), { status: 200 });
}   