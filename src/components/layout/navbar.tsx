import { ProfileButton } from "@/components/auth/profile-button"
import { Logo } from "@/components/layout/logo"

export function Navbar() {
	return (
		<nav className="mb-8 flex flex-row items-center justify-between rounded-b-lg bg-slate-100/5 py-2 shadow-xl shadow-slate-900">
			<Logo />

			<ProfileButton />
		</nav>
	)
}
