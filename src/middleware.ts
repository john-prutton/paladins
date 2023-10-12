import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const unprotectedRoutes = ["/"]

export default withAuth(
	async function middleware(req) {
		if (unprotectedRoutes.includes(req.nextUrl.pathname)) return

		const sessionToken =
			req.cookies.get("next-auth.session-token")?.value ||
			req.cookies.get("__Secure-next-auth.session-token")?.value

		const isAuth = !!sessionToken

		if (!isAuth)
			return NextResponse.redirect(
				new URL(
					`/api/auth/signin?callback=${req.nextUrl.pathname}`,
					req.url
				)
			)
	},
	{
		callbacks: {
			async authorized({ req, token }) {
				return true
			},
		},
	}
)
