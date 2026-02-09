"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Map } from "lucide-react";

export default function RoadmapPage() {
    const items = [
        { quarter: "Q1 2026", goal: "Launch v1.0", status: "Done" },
        { quarter: "Q2 2026", goal: "Do absolutely nothing", status: "Planned" },
        { quarter: "Q3 2026", goal: "Maintain uselessness", status: "Planned" },
        { quarter: "Q4 2026", goal: "Celebrate doing nothing", status: "Planned" },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center selection:bg-yellow-500/30">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8"
            >
                <div className="flex flex-col items-center gap-4">
                    <Map className="w-12 h-12 text-primary/50" />
                    <h1 className="text-3xl font-bold tracking-tight">Roadmap</h1>
                </div>

                <div className="grid gap-3 text-left">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.quarter}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-4 rounded-xl border border-white/5 bg-black/5 backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">{item.quarter}</span>
                                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">{item.status}</span>
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">{item.goal}</span>
                        </motion.div>
                    ))}
                </div>

                <Button asChild variant="ghost">
                    <Link href="/">Back</Link>
                </Button>
            </motion.div>
        </main>
    );
}
