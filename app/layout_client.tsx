"use client";

import { store } from "@/store/config";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function LayoutWithProvider({ children }: { children: ReactNode }) {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}