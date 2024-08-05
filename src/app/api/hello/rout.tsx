import { NextRequest, NextResponse } from "next/server";

// backend rout
// use same names as is being used for the requests, like POST, DELET, GET, ...
// we use them rarely since we mostly user server components can do that by themselves
// if we wanna expose API to ouytside so that other progams can talk to our application
export function GET(req: NextRequest, res: NextResponse) {
	return Response.json({ message: "Hello" });
}
export function POST(req: NextRequest, res: NextResponse) {
	return Response.json({ message: "POST request" });
}
