import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./config";

export function readProfile(uid: string) {
    const doc_ref = doc(firestore, "profiles", uid)
    return getDoc(doc_ref)
}