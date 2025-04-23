"use client";

import { BotMessageSquare } from "lucide-react";
import { AuthDialog } from "./auth-dialog";

export default function Header() {
    return (
        <header className="w-full fixed top-0 p-10 flex justify-start items-center ">
            <BotMessageSquare className="p-3 bg-primary " size={60} />
            <div className="p-3 flex flex-col ">
                <span>Armaan Chaand</span>
                <span>armaanchaand@email.com</span>

            </div>
            <AuthDialog />


        </header>
    )
}