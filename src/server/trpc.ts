import { TRPCError, initTRPC } from "@trpc/server"
import { getUserAuth } from "@/lib/auth/utils"

const t = initTRPC.create()

const authMiddleware = t.middleware(async (opts) => {
	const { session } = await getUserAuth()

	if (!session) throw new TRPCError({ code: "UNAUTHORIZED" })

	return opts.next({
		ctx: {
			user: session.user,
		},
	})
})

export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(authMiddleware)
