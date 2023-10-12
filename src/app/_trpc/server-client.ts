import { trpcRouter } from "@/server"
import { httpBatchLink } from "@trpc/react-query"

export const trpcServerClient = trpcRouter.createCaller({
	links: [httpBatchLink({ url: "/api/trpc/" })],
})
