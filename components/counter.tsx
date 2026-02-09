"use client";

import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";

export function Counter() {
  const [supporters, setSupporters] = useState(1284);
  const [totalRaised, setTotalRaised] = useState(2931);

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">

      {/* Market Cap Widget */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center p-6 rounded-2xl bg-black/5 border border-white/5 backdrop-blur-sm min-w-[200px]"
      >
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <TrendingUp className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-medium">Market Cap of Nothing</span>
        </div>
        <span className="text-3xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          €{totalRaised.toLocaleString()}
        </span>
      </motion.div>

      {/* Investors Widget */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center p-6 rounded-2xl bg-black/5 border border-white/5 backdrop-blur-sm min-w-[200px]"
      >
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Users className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-medium">Visionary Investors</span>
        </div>
        <span className="text-3xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          {supporters.toLocaleString()}
        </span>
      </motion.div>

    </div>
  );
}
