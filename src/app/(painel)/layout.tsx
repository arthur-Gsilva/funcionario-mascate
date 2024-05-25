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
            <div className="flex-1 bg-[#F4C373]">{children}</div>
        </div>

    </body>
    </html>
  );
}