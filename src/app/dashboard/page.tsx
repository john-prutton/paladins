import { trpcServerClient } from "../_trpc/server-client"

export default async function DashboardPage() {
	const data = trpcServerClient.testing()
	return <main>{data}</main>
}
