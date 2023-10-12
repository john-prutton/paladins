import Image from "next/image"
import { Pirata_One } from "next/font/google"
import LogoImage from "@/../public/logo.png"
import { cn } from "@/lib/utils"

const font = Pirata_One({ weight: "400", subsets: ["latin"] })

export function Logo() {
	return (
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
			<p
				style={{ marginTop: 0 }}
				className={cn(font.className, "text-3xl text-primary")}
			>
				Paladins
			</p>
		</div>
	)
}
