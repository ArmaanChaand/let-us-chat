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

interface CreateNewProfileProps {
    open: boolean
    setOpen: (v: boolean) => void
}

export function CreateNewProfile({ open, setOpen }: CreateNewProfileProps) {

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
                            <form className="p-6 md:p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Your aBBBolBhi Profile</h1>
                                    </div>
                                    <div className="grid gap-2">
                                        <Input
                                            id="profile"
                                            type="text"
                                            placeholder="Full Name"
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
