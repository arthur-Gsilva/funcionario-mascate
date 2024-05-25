import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "../../app/globals.css";

import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Reservas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >

        
        <div className="flex">
            <Navbar />
            <div className="flex-1 min-h-screen ml-20 md:ml-40 bg-[#F4C373] flex justify-center items-center min-[2000px]:ml-36 pb-10">{children}</div>
        </div>

    </body>
    </html>
  );
}