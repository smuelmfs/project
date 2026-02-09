import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Useless Project - Startup Design, Stone Utility",
  description: "A premium way to lose money. No features. No returns. Just status.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen flex flex-col bg-background relative selection:bg-yellow-500/30")}>
        <Navbar />
        {/* Subtle noise/gradient background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-30 dark:opacity-20 pointer-events-none" />

        <div className="flex-1 flex flex-col pt-16">
          {children}
        </div>
        <footer className="py-8 text-center w-full border-t border-white/5 bg-transparent">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">© 2026 The Useless Project.</p>
            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
              Startup Design. Product of Stone.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
