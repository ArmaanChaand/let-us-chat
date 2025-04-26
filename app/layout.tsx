import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "sonner";
import LayoutWithProvider from "./layout_client";

export const metadata: Metadata = {
  title: "aBBBolBhi",
  description: "Last place to resolve Bak-Bak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased dark w-screen overflow-x-hidden overflow-y-auto`}
      >
        <LayoutWithProvider>
          <Header />
          {children}
          <Toaster richColors />
        </LayoutWithProvider>
      </body>
    </html>
  );
}
