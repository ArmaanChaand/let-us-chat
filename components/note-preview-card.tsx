"use client";
import { Card, CardContent } from "@/components/ui/card"
import { DocNoteType } from "@/lib/types/DocNoteType";


export default function NotePreviewCard({ note }: { note: DocNoteType }) {
    return (
        <Card className="overflow-hidden w-fit max-w-full ">
            <CardContent className="">
                <span className="text-lg text-muted-foreground font-bold">{note.title}</span>
                <p className="text-sm mt-2 overflow-hidden">
                    {note.content.slice(0, 100)}...
                </p>
            </CardContent>
        </Card>
    )
}