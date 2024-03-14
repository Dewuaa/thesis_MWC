import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Well Connect",
  description: "CODE-ADA Thesis Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider   
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang='en' suppressHydrationWarning>
        <body className={cn (inter.className, 
          "bg-white dark:bg-[#313338]")}>
        <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem={false}
                  storageKey="thesis-theme"
                >
          <Topbar />
          
           <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
              {children}
             
              </div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>
          

          

          <Bottombar />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}