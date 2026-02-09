"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center selection:bg-yellow-500/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-md w-full space-y-12"
            >

                <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm py-2">
                    About Nothing
                </h1>

                <div className="space-y-6 text-lg text-muted-foreground/80 leading-relaxed font-light">
                    <p>
                        This is not a charity. It is a vanity project.
                    </p>
                    <p>
                        When you contribute, you are not buying features.
                        You are buying the <strong>exclusivity</strong> of saying you spent money on this.
                    </p>
                    <p>
                        The value lies in the audacity of the transaction.
                    </p>
                </div>

            </motion.div>
        </main>
    );
}
