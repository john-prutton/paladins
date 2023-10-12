import { getUserAuth } from "@/lib/auth/utils"

export default async function ProfilePage() {
	const { session } = await getUserAuth()

	return (
		<main>
			<h1 className="mb-6">My profile</h1>

			<h4>Name:</h4>
			<p>{session?.user.name}</p>

			<h4>Email: </h4>
			<p>{session?.user.email}</p>
		</main>
	)
}
