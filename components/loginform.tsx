
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"
import { Credentials } from "@/lib/types/auth-types"

interface LoginFormProps {
    isLogin: boolean
    setIsLogin: (v: boolean) => void
    handleAuth: (v: Credentials) => void
}

export function LoginForm({
    className,
    isLogin,
    handleAuth,
    setIsLogin,
    ...props
}: React.ComponentProps<"div"> & LoginFormProps) {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const credentials: unknown = Object.fromEntries(formData.entries())
        handleAuth(credentials as Credentials)

    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 ">
                    <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome back</h1>
                                <p className="text-balance text-muted-foreground">
                                    {
                                        isLogin ?
                                            "Login to your aBBBolBhi account"
                                            :
                                            "Create a new aBBBolBhi account"
                                    }
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" name="password" required />
                            </div>
                            {
                                <Button type="submit" className="w-full">
                                    {isLogin ? "Login" : "Sign Up"}
                                </Button>
                            }

                        </div>
                        <p className="text-sm text-center mt-3">
                            {isLogin ?
                                "Not have an account? "
                                :
                                "Already have an account? "
                            }
                            <button
                                type="button" onClick={() => setIsLogin(!isLogin)}
                                className="cursor-pointer underline"
                            >
                                {
                                    isLogin ? "Create New" : "Login"
                                }
                            </button>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
