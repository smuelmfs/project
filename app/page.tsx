"use client";

import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";
import { PaymentModal } from "@/components/payment-modal";
import { Leaderboard } from "@/components/leaderboard";
import { HeroCard } from "@/components/hero-card";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-20 px-4 text-center overflow-x-hidden selection:bg-yellow-500/30">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl w-full space-y-12"
      >

        {/* Release Badge */}
        <motion.div variants={item} className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:bg-white/10 transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600"></span>
            </span>
            <span className="font-mono tracking-tight">v1.0: Global Launch</span>
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div variants={item} className="space-y-6">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent pb-4 py-2 drop-shadow-sm">
            Startup Design.<br />
            Product of Stone.
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
            This is not a charity. It is a vanity project. The value lies in the audacity of the transaction.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PaymentModal />
          </motion.div>

          <Button asChild variant="outline" className="gap-2 group border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/20 transition-all duration-300">
            <Link href="/ranking">
              View Global Ranking
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Hero Card / Top Donor Spotlight */}
        <motion.div variants={item} className="pt-12 pb-4 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/10 to-amber-900/10 blur-[100px] rounded-full -z-10" />
          <HeroCard />
          <div className="flex justify-center items-center gap-2 mt-6 text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em] font-medium">
            <Trophy className="w-3 h-3" />
            <span>Current Top Contributor</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="pt-8 border-t border-white/5">
          <Counter />
        </motion.div>

        {/* Mini Leaderboard Preview */}
        <motion.div variants={item} className="pt-16 max-w-md mx-auto">
          <Leaderboard />
          <div className="mt-8">
            <Link href="/ranking" className="text-xs text-muted-foreground hover:text-yellow-500 transition-colors underline decoration-yellow-500/30 underline-offset-4">
              View all contributors &rarr;
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
