import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"

// Lightweight auth instance for Edge proxy — no DB imports
const { auth } = NextAuth(authConfig)

export default auth

export const config = {
  matcher: [
    // Protect everything except API routes, login, static assets, and .well-known
    "/((?!api/|login|_next/static|_next/image|favicon.ico|[.]well-known/).*)",
  ],
}
