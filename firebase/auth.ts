import { Credentials } from "@/lib/types/auth-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "./config";
import { toast } from "sonner";

export async function signIn(credentials: Credentials) {
    toast.promise(
        signInWithEmailAndPassword(firebase_auth, credentials.email, credentials.password),
        {
            loading: "Signing you in...",
            success: "Signed in successfully!",
            error: (e) => {
                return e?.message || "Error signing in"
            }
        }
    )

}
export async function signUp(credentials: Credentials) {
    toast.promise(
        createUserWithEmailAndPassword(firebase_auth, credentials.email, credentials.password),
        {
            loading: "Creating a new account",
            success: "Account created!",
            error: (e) => {
                return e?.message || "Error creating account."
            }
        }
    )

}