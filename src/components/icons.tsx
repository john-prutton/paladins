import { cn } from "@/lib/utils"
import { Loader2Icon, type LucideProps } from "lucide-react"

export {} from "lucide-react"

export function LoadingIcon({ className, ...props }: LucideProps) {
	return <Loader2Icon {...props} className={cn("animate-spin", className)} />
}
