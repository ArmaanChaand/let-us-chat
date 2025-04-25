"use client";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Card, CardContent } from "@/components/ui/card"

import { Input } from "./ui/input"
import { Plus } from "lucide-react"
import { Textarea } from "./ui/textarea";
import { useState } from "react";


export function NewNoteForm() {
    const [note_title, set_note_title] = useState('')
    const [note_content, set_note_content] = useState('')

    function handleSubmit(){
        console.log({note_title, note_content})
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex-1 shrink-0"> <Plus /> Create New Note</Button></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Create a new note</SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>

                <Card className="overflow-hidden h-full rounded-none border-l-0">
                    <CardContent className="h-full pb-12">

                        <Input
                            id="profile"
                            type="text"
                            placeholder="Note Title"
                            className="border-none focus-visible:ring-0 text-base md:text-base font-bold"
                            required
                            value={note_title}
                            onChange={(e) => set_note_title(e.target.value)}
                        />
                        <Textarea
                            placeholder="Your Note"
                            value={note_content}
                            onChange={(e) => set_note_content(e.target.value)}
                            className="w-full h-full border-none focus-visible:ring-0 text-base md:text-base mt-4 resize-none selection:bg-primary selection:text-primary-foreground"
                        />

                    </CardContent>
                </Card>
                <SheetFooter>
                    <Button type="submit" className="w-full" onClick={handleSubmit}>
                        Save Note
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>


    )
}
