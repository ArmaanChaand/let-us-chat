"use client";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import { store } from "@/store/config";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { firebaseApp } from "@/firebase/config";

export default function LayoutWithProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        initializeAppCheck(firebaseApp, {
            provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITEKEY || "recaptcha"),
            isTokenAutoRefreshEnabled: true,

        })
    }, [])
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}