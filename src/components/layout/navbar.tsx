import { ProfileButton } from "@/components/auth/profile-button"
import { Logo } from "@/components/layout/logo"

export function Navbar() {
	return (
		<nav className="flex flex-row items-center justify-between py-2 shadow">
			<Logo />

			<ProfileButton />
		</nav>
	)
}
