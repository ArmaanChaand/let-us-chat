"use client";

import { DocNoteType } from "@/lib/types/DocNoteType";
import { NoteFullView } from "@/components/note-full-view";
import NotePreviewCard from "@/components/note-preview-card";
import { cn } from "@/lib/utils";
import { getAuth } from "firebase/auth";
const auth = getAuth().currentUser
const notes: DocNoteType[] = [
    {
        title: "This is the Note title",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note"
    },
    {
        title: "Dune part two",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note"
    },
    {
        title: "Mission Impossible 2",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note"
    },
    {
        title: "Mission Impossible 1",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note"
    },
    {
        title: "Mission Impossible 3",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note"
    },
    {
        title: "Mission Impossible 8",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note"
    },
    {
        title: "Mission Impossible 9",
        content: "  This is the description. An this is large compared to the title. But small as compared to the actual note sfklsjdflksjdfnio lskdflksf nlsjfdklsdf  sdfljksld"
    },
]

export default function FetchNotes() {


    const totalButtons: number = notes.length

    const getRandomizedRowSpans = () => {
        const spanSet = ['sm:col-span-2', 'sm:col-span-3', 'sm:col-span-2'];
        // Shuffle using Fisher-Yates
        for (let i = spanSet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [spanSet[i], spanSet[j]] = [spanSet[j], spanSet[i]];
        }
        return spanSet;
    };

    const cardSpans: string[] = []

    for (let i = 0; i < totalButtons; i += 3) {
        const rowSpans = getRandomizedRowSpans();
        cardSpans.push(...rowSpans.slice(0, Math.min(3, totalButtons - i)))
    }



    if (!auth) return (<p className="mt-20 text-center text-3xl p-5 bg-primary mx-auto font-black text-primary-foreground w-full sm:w-10/12 flex flex-col">
        <span className="text-sm">
            Login to
        </span>

        Create & Browse

        <span className="text-sm">
            Notes
        </span>
    </p>)

    return (
        <div className="grid grid-cols-7 gap-4">
            {notes.map(n => (
                <NoteFullView
                    key={n.title}
                    note={n}
                    trigger={
                        <button className={cn("text-start min-h-fit flex cursor-pointer transition-all col-span-7 hover:scale-110 hover:shadow-2xl", cardSpans[notes.indexOf(n)])}>
                            <NotePreviewCard
                                note={n}
                            />
                        </button>
                    }
                />
            ))}

        </div>
    )
}