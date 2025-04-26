import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "./ui/input"
import { FormEvent } from "react"
import { toast } from "sonner"
import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks"
import { write_newProfileDoc } from "@/firebase/write"
import { UserProfileDoc } from "@/lib/types/auth-types"
import { store_toggleUserProfile } from "@/store/slices/authSlice"

interface CreateNewProfileProps {
    open: boolean
    setOpen: (v: boolean) => void
}

export function CreateNewProfile({ open, setOpen }: CreateNewProfileProps) {
    const authUser = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        if (!authUser) return
        const profile_data: UserProfileDoc = {
            name: data?.name ? data.name as string : "User",
            photoURL: authUser.photoURL,
            email: authUser.email
        }
        toast.promise(() => write_newProfileDoc(authUser.uid, profile_data), {
            loading: "Creating your profile...",
            success: () => {
                dispatch(store_toggleUserProfile(profile_data))
                return "profile created!"
            },
            error: (e) => {
                console.log(e)
                return "Error creating profile!"
            }

        })





    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]" hideClose>
                <DialogHeader className="hidden">
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex flex-col gap-6"}>
                    <Card className="overflow-hidden">
                        <CardContent className="grid p-0 ">
                            <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Your aBBBolBhi Profile</h1>
                                    </div>
                                    <div className="grid gap-2">
                                        <Input
                                            id="profile"
                                            type="text"
                                            placeholder="Full Name"
                                            name="name"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full">
                                        Create Profile
                                    </Button>

                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </DialogContent>
        </Dialog>
    )
}
