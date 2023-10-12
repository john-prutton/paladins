"use client"

import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

import { LoadingIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

import DefaultImage from "@/../public/default-pic.png"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

export function ProfileButton() {
	const { data: session, status } = useSession()

	switch (status) {
		case "loading":
			return <LoadingIcon />

		case "unauthenticated":
			return <Button onClick={() => signIn()}>Sign in</Button>

		default:
			if (!session) return "AUTH-ERR"

			return (
				<Popover>
					<PopoverTrigger asChild>
						<Button className="h-fit rounded-full p-0">
							<Image
								src={session.user.image ?? DefaultImage.src}
								alt="User profile picture"
								width={48}
								height={48}
								className="ml-auto rounded-full border"
							/>
						</Button>
					</PopoverTrigger>

					<PopoverContent className="flex w-48 flex-col gap-2">
						<Button variant={"secondary"}>View Profile</Button>
						<Button
							variant={"destructive"}
							onClick={() => signOut()}
						>
							Sign out
						</Button>
					</PopoverContent>
				</Popover>
			)
	}
}
