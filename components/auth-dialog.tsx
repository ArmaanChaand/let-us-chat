import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "./loginform"

export function AuthDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-auto cursor-pointer">
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
}
