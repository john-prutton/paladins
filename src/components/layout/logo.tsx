import Image from "next/image"
import Link from "next/link"
import { Pirata_One } from "next/font/google"

import LogoImage from "@/../public/logo.png"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Pirata_One({ weight: "400", subsets: ["latin"] })

export function Logo() {
	return (
		<Button asChild variant={"ghost"} className="h-fit p-2">
			<Link href={"/"}>
				<div className="h- flex flex-row items-center gap-2">
					<Image
						src={LogoImage}
						quality={100}
						alt="User profile picture"
						width={40}
						height={40}
						className="ml-auto rounded-full"
						sizes="100vmax"
					/>
					<p className={cn(font.className, "text-3xl text-primary")}>
						Paladins
					</p>
				</div>
			</Link>
		</Button>
	)
}
