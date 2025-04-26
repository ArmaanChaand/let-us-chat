"use client";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { BotMessageSquare, Loader2 } from "lucide-react";
import { AuthDialog } from "./auth-dialog";
import { CreateNewProfile } from "./newprofile-dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { NewNoteForm } from "./newnote-dialog";
import { firebase_auth } from "@/firebase/config";
import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks";
import { store_toggleAuthUser, store_toggleUserProfile } from "@/store/slices/authSlice";
import useSWR from "swr"
import { readProfile } from "@/firebase/read";
import { UserProfileDoc } from "@/lib/types/auth-types";


export default function Header() {
    const [auth_state, set_auth_state] = useState<"N" | "A" | "L">("L")
    const authUser = useAppSelector(state => state.auth.user)
    const authProfile = useAppSelector(state => state.auth.profile)
    const dispatch = useAppDispatch()

    async function fetchProfile(swr_id: string) {
        console.log(swr_id)
        if (!authUser) {
            throw new Error("Not signed in")
        }
        const docSnap = await readProfile(authUser?.uid)
        if (!docSnap.exists()) {
            throw new Error("No profile found!")
        }
        const profile_data = docSnap.data() as UserProfileDoc

        dispatch(store_toggleUserProfile(profile_data))
        return profile_data


    }
    const { isLoading, error, data } = useSWR(authUser ? authUser.uid + "/profile" : null, fetchProfile, {
        revalidateOnFocus: false,
        shouldRetryOnError: false
    })

    console.log("Read-Profile-error: ", error)
    console.log("Read-Profile: ", data)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase_auth, (user) => {
            if (user) {
                dispatch(store_toggleAuthUser({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    emailVerified: user.emailVerified,
                    isAnonymous: user.isAnonymous,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId
                }))

                set_auth_state("A")
            } else {
                dispatch(store_toggleAuthUser(null))
                set_auth_state("N")
            }
        })
        return () => unsubscribe()
    }, [dispatch])


    const newProfile: boolean = !isLoading && authUser !== null && authUser !== undefined && authProfile == null

    const is_auth = auth_state === "A" || (authUser !== null && authUser !== undefined)
    return (
        <header className="w-full sticky top-0 p-8 flex flex-col sm:flex-row items-start justify-start sm:items-center bg-background">
            <div className="flex justify-start items-center">
                <BotMessageSquare className="p-3 bg-primary " size={60} />
                <div className="p-3 flex flex-col">
                    {
                        is_auth ?
                            <>
                                <span>{authUser?.displayName}</span>
                                <span className="text-sm">{authUser?.email}</span>
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