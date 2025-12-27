import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { text, to } = await req.json();

        const apiKey = "5865890906:1RqudxbsESQU3ev@Api_ManagerRoBot";
        const url = `https://api.fast-creat.ir/translate?apikey=${apiKey}&text=${encodeURIComponent(text)}&to=${to}`;

        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: "Translation failed", details: err }, { status: 500 });
    }
}
