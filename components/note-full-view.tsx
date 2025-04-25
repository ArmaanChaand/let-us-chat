import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DocNoteType } from "@/lib/types/DocNoteType"
import { Button } from "./ui/button"
import { PenBox, Trash2 } from "lucide-react"
import { ReactNode } from "react"


interface NoteFullViewProps {
    note: DocNoteType
    trigger: ReactNode
}
export function NoteFullView({ note, trigger }: NoteFullViewProps) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent hideClose className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{note.title}</DialogTitle>
                    <DialogDescription>
                        You • Today
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full flex">
                    <Button className="flex-1 shrink-0" size="sm">
                        <PenBox />
                        Edit
                    </Button>
                    <Button className="flex-1 shrink-0" variant="destructive" size="sm">
                        <Trash2 />
                        Delete
                    </Button>

                </div>

                <pre className="text-base w-full overflow-x-hidden whitespace-normal font-sans "
                >
                    {note.content}
                </pre>
            </DialogContent>
        </Dialog>
    )
}
