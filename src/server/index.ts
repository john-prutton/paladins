import { publicProcedure, protectedProcedure, router } from "@/server/trpc"

export const trpcRouter = router({
	testing: publicProcedure.query(async ({ ctx: {} }) => {
		return "heello world!!"
	}),

	testingAuth: protectedProcedure.query(async ({ ctx: { user } }) => {
		return `hey ${user.name}`
	}),
})
export type TrpcRouter = typeof trpcRouter
