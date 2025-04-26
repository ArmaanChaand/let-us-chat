import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./config";
import { UserProfileDoc } from "@/lib/types/auth-types";
import { getAuth, updateProfile } from "firebase/auth";

export function write_newProfileDoc(uid: string, data: UserProfileDoc) {
    const user = getAuth().currentUser
    if (!user) {
        throw new Error("Some error ocurred")
    }
    const doc_ref = doc(firestore, "profiles", uid)
    updateProfile(user, { displayName: data.name })
    return setDoc(doc_ref, data, { merge: true })
}