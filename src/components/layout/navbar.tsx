import Image from "next/image"
import LogoImage from "@/../public/logo.png"

import { ProfileButton } from "@/components/auth/profile-button"

export function Navbar() {
	return (
		<nav className="flex flex-row items-center justify-between py-2 shadow">
			<div className="flex flex-row items-center gap-2">
				<Image
					src={LogoImage}
					quality={100}
					alt="User profile picture"
					width={48}
					height={48}
					className="ml-auto rounded-full"
					sizes="100vmax"
				/>
				<p className="text-2xl font-semibold text-primary">PALADINS</p>
			</div>

			<ProfileButton />
		</nav>
	)
}
