"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Crown, Sparkles, Trophy } from "lucide-react";

const RANKING_DATA = [
    { rank: 1, name: "@joao_gastador", amount: "€ 450", status: "Legendary" },
    { rank: 2, name: "Anonymous", amount: "€ 320", status: "Visionary" },
    { rank: 3, name: "@maria.lost", amount: "€ 150", status: "Collector" },
    { rank: 4, name: "Sad Dev", amount: "€ 100", status: "Early Adopter" },
    { rank: 5, name: "Investor", amount: "€ 50", status: "Observer" },
    { rank: 6, name: "Crypto Bro", amount: "€ 20", status: "Believer" },
    { rank: 7, name: "Design Fan", amount: "€ 10", status: "Fan" },
    { rank: 8, name: "Supporter", amount: "€ 5", status: "Guest" },
    { rank: 9, name: "User 992", amount: "€ 1", status: "NPC" },
    { rank: 10, name: "User 104", amount: "€ 1", status: "NPC" },
];

export default function RankingPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 max-w-4xl mx-auto selection:bg-yellow-500/30">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4 mb-16 pt-8"
            >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-900/20 border border-yellow-500/20 mb-4">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm py-2">Global Wall of Fame</h1>
                <p className="text-muted-foreground text-lg">
                    Immortality for the price of a coffee.
                </p>
            </motion.div>

            <div className="space-y-4 relative">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-muted-foreground/50 uppercase tracking-widest border-b border-white/5 pb-4">
                    <div className="col-span-2 text-center">Rank</div>
                    <div className="col-span-5 md:col-span-4">User</div>
                    <div className="col-span-3 md:col-span-3 text-right">Contribution</div>
                    <div className="hidden md:block col-span-3 text-right">Status</div>
                </div>

                {RANKING_DATA.map((item, index) => (
                    <motion.div
                        key={item.rank}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                        className={cn(
                            "grid grid-cols-12 gap-4 items-center p-4 rounded-xl border border-transparent transition-all",
                            item.rank === 1 ? "bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/20" : "hover:border-white/5"
                        )}
                    >
                        <div className="col-span-2 flex justify-center">
                            {item.rank <= 3 ? (
                                <div className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm",
                                    item.rank === 1 && "bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]",
                                    item.rank === 2 && "bg-zinc-400 text-black",
                                    item.rank === 3 && "bg-amber-700 text-white"
                                )}>
                                    {item.rank}
                                </div>
                            ) : (
                                <span className="text-muted-foreground font-mono">#{item.rank}</span>
                            )}
                        </div>

                        <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                            <Avatar className="h-8 w-8 border border-white/10">
                                <AvatarFallback className="bg-white/5 text-[10px]">
                                    {item.name.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className={cn("font-medium text-sm", item.rank === 1 && "text-yellow-500")}>
                                    {item.name}
                                </span>
                                <span className="md:hidden text-[10px] text-muted-foreground">{item.status}</span>
                            </div>
                        </div>

                        <div className="col-span-3 md:col-span-3 text-right font-mono font-bold">
                            {item.amount}
                        </div>

                        <div className="hidden md:block col-span-3 text-right">
                            <span className={cn(
                                "inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium border",
                                item.rank === 1 ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" : "bg-white/5 text-muted-foreground border-white/5"
                            )}>
                                {item.rank === 1 && <Sparkles className="w-3 h-3 mr-1" />}
                                {item.status}
                            </span>
                        </div>
                    </motion.div>
                ))}

            </div>

        </main>
    );
}
