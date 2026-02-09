"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Ranking", href: "/ranking" },
    { name: "About", href: "/about" },
    { name: "Changelog", href: "/changelog" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
        >
            <div className="flex items-center gap-1 p-1 rounded-full bg-background/60 backdrop-blur-md border border-border/40 shadow-sm pointer-events-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                isActive
                                    ? "text-foreground bg-foreground/5"
                                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                            )}
                        >
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}

                <div className="pl-2 pr-4 border-l border-border/40 ml-2 flex items-center gap-2 text-xs font-medium text-yellow-500">
                    <Users className="w-3 h-3" />
                    <span>1,284 Users</span>
                </div>
            </div>
        </motion.nav>
    );
}
