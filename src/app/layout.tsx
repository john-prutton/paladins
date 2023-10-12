import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NextAuthProvider from "@/lib/auth/Provider"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/layout/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Paladins",
	description: "Workout Tracker & Exercise Leaderboard",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<NextAuthProvider>
					<Navbar />
					{children}
					<Toaster />
				</NextAuthProvider>
			</body>
		</html>
	)
}
