"use client";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { BotMessageSquare, Loader2 } from "lucide-react";
import { AuthDialog } from "./auth-dialog";
import { CreateNewProfile } from "./newprofile-dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { NewNoteForm } from "./newnote-dialog";
import { firebase_auth } from "@/firebase/config";


export default function Header() {
    const [auth_state, set_auth_state] = useState<"N" | "A" | "P" | "L">("L")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase_auth, (user) => {
            if (user) {
                set_auth_state("A")
            } else {
                set_auth_state("N")
            }
        })
        return () => unsubscribe()
    }, [])

    const newProfile: boolean = auth_state === "P"
    const user = getAuth().currentUser
    const is_auth = auth_state === "A"
    return (
        <header className="w-full sticky top-0 p-8 flex flex-col sm:flex-row items-start justify-start sm:items-center bg-background">
            <div className="flex justify-start items-center">
                <BotMessageSquare className="p-3 bg-primary " size={60} />
                <div className="p-3 flex flex-col">
                    {
                        is_auth ?
                            <>
                                <span>Armaan Chaand</span>
                                <span className="text-sm">{user?.email}</span>
                            </>
                            :
                            <>
                                <span className="font-black">aBBBolBhi</span>
                                {auth_state === "L" ?
                                    <span className="text-sm">Loading ...</span>
                                    :
                                    <span className="text-sm">Login to create notes</span>
                                }
                            </>
                    }
                </div>
            </div>
            <div className="flex w-full sm:w-fit sm:ml-auto mt-2 sm:mt-0">
                {is_auth ?
                    <>
                        <NewNoteForm />
                        <Button
                            variant="destructive"
                            onClick={() => signOut(firebase_auth)}
                        >Logout</Button>
                    </>
                    :
                    (auth_state === "L" ?
                        <Button variant="default" className="flex-1"><Loader2 className="animate-spin" /> Loading...</Button>
                        :
                        <AuthDialog />
                    )

                }
            </div>


            <CreateNewProfile open={newProfile} setOpen={(v: boolean) => (console.log(v))} />
        </header>
    )
}