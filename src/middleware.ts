import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const auth = request.headers.get("authorization");

    if (auth) {
        const [scheme, encoded] = auth.split(" ");
        if (scheme === "Basic") {
        const decoded = atob(encoded);
        const [user, pass] = decoded.split(":");

        if (user === process.env.BASIC_USER && pass === process.env.BASIC_PASS) {
            return NextResponse.next(); // OKならそのまま表示
        }
        }
    }

    return new Response("パスワードが必要です", {
        status: 401,
        headers: {
        "WWW-Authenticate": 'Basic realm="Protected"',
        },
    });
    }

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // すべてのページに適用
};
