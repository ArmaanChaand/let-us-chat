import { buttonVariants } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "./loginform"
import { useState } from "react"
import { Credentials } from "@/lib/types/auth-types"
import { signIn, signUp } from "@/firebase/auth"
import { cn } from "@/lib/utils"


export function AuthDialog() {
    const [isLogin, set_isLogin] = useState(true)
    const [isLoading, set_isLoading] = useState(false)

    async function handleAuth(credentials: Credentials) {
        set_isLoading(true)
        if (isLogin) {
            await signIn(credentials)
        } else {
            await signUp(credentials)
        }
        set_isLoading(false)
    }

    return (
        <Dialog>
            <DialogTrigger className="flex w-full">

                <span onClick={() => set_isLogin(true)} className={buttonVariants({ variant: "default", className: "flex-1 shrink-0" })}>
                    Login
                </span>
                <span onClick={() => set_isLogin(false)} className={buttonVariants({ variant: "secondary", className: "flex-1 shrink-0" })}>
                    Register
                </span>

            </DialogTrigger>
            <DialogContent
                hideClose
                className={cn(
                    "sm:max-w-[425px]",
                    isLoading ? "pointer-events-none opacity-0" : ""
                )}
            >
                <DialogHeader className="hidden">
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <LoginForm
                    isLogin={isLogin}
                    setIsLogin={set_isLogin}
                    handleAuth={handleAuth}
                />

            </DialogContent>
        </Dialog>
    )
}
