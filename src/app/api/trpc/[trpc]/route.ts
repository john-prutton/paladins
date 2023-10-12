import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { trpcRouter } from "@/server"

function handler(req: Request) {
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: trpcRouter,
		createContext: () => ({}),
	})
}

export { handler as GET, handler as POST }
