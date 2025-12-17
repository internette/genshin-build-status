import { info } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { uuid } = await request.json();
    if(uuid.length !== 9) {
        return NextResponse.json({ error: "Invalid UUID" }, { status: 400 });
    } else {
        const headers = new Headers({
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : "GenshinCharacterTracker"
        });
        const data = await fetch(`https://enka.network/api/uid/${uuid}?info`, {
            method: "GET",
            headers: headers
        });
        const { playerInfo } = await data.json();
        const { nickname, showAvatarInfoList } = playerInfo;
        return NextResponse.json({ nickname: nickname, characters: showAvatarInfoList
        });
    }
}   