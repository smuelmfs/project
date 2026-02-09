"use client";

import { motion } from "framer-motion";

export default function ChangelogPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center selection:bg-yellow-500/30">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-12"
            >
                <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm py-2">
                    Changelog
                </h1>

                <div className="space-y-4 text-left">
                    <div className="p-6 rounded-2xl border border-white/5 bg-black/5 backdrop-blur-sm">
                        <div className="flex justify-between items-baseline mb-4">
                            <h2 className="text-xl font-bold tracking-tight">v1.0.0</h2>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Today</span>
                        </div>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 font-light">
                            <li>Initial release</li>
                            <li>Added payments integration</li>
                            <li>Achieved 100% uselessness</li>
                        </ul>
                    </div>
                </div>

            </motion.div>
        </main>
    );
}
