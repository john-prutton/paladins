import Image from "next/image"
import DefaultImage from "@/../public/default-pic.png"

export function Navbar() {
	return (
		<nav className="flex flex-row items-center py-2 shadow">
			<p className="text-primary text-2xl font-semibold">PALADINS</p>

			<Image
				src={DefaultImage}
				alt="User profile picture"
				width={48}
				height={48}
				className="ml-auto rounded-full"
			/>
		</nav>
	)
}
