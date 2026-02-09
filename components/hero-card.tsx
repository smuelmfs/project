"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { Wallet, Sparkles, Crown } from "lucide-react";

export function HeroCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02, rotateX: 5 }}
            className="relative mx-auto mt-12 max-w-sm cursor-default"
        >

            {/* Card Content - Ultra Premium Look */}
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-[0_0_40px_-5px_rgba(234,179,8,0.2)]">

                {/* Animated Shine Effect */}
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "200%", opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-0 pointer-events-none"
                />

                {/* Subtle Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

                <div className="relative p-6 space-y-8 z-10">

                    {/* Top Bar */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                <Crown className="w-4 h-4 text-black fill-current" />
                            </div>
                            <span className="text-xs font-bold tracking-widest uppercase text-yellow-500 drop-shadow-sm">
                                #1 Global
                            </span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-wider backdrop-blur-sm">
                            2026 Season
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex flex-col items-center text-center space-y-5">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-75 blur group-hover:opacity-100 transition duration-500" />
                            <Avatar className="h-28 w-28 border-[3px] border-[#0a0a0a] relative z-10 shadow-2xl">
                                <AvatarFallback className="bg-gradient-to-br from-zinc-800 to-black text-yellow-500 font-bold text-3xl tracking-tighter">
                                    JG
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="space-y-1">
                            <h3 className="font-bold text-2xl tracking-tight bg-gradient-to-b from-yellow-100 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                                @joao_gastador
                            </h3>
                            <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-[0.3em] pl-1">The Philanthropist</p>
                        </div>
                    </div>

                    {/* Stats Grid - Premium Glass */}
                    <div className="grid grid-cols-2 gap-px bg-gradient-to-b from-white/10 to-transparent rounded-xl overflow-hidden p-[1px]">
                        <div className="bg-black/80 backdrop-blur-md p-4 text-center space-y-1">
                            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Total Donated</p>
                            <p className="text-lg font-bold text-white font-mono tracking-tight">€ 450.00</p>
                        </div>
                        <div className="bg-black/80 backdrop-blur-md p-4 text-center space-y-1">
                            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Status</p>
                            <p className="text-lg font-bold text-yellow-500 tracking-tight flex items-center justify-center gap-2">
                                <Sparkles className="w-3 h-3" />
                                Legendary
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
