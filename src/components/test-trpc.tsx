"use client"

import { trpc } from "@/lib/trpc/client"

export function TestTrpc() {
	const { data, isError, error, isLoading } = trpc.testingAuth.useQuery()
	return (
		<div>{isLoading ? "loading..." : isError ? error.message : data}</div>
	)
}
