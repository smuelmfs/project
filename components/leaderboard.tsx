import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, formatCurrency } from "@/lib/utils";
import { Crown, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

// Mock data
const LEADERS = [
    { name: "@joao_gastador", amount: "€ 450", rank: 1, status: "Legendary" },
    { name: "Anonymous", amount: "€ 320", rank: 2, status: "Visionary" },
    { name: "@maria.lost", amount: "€ 150", rank: 3, status: "Collector" },
    { name: "Sad Dev", amount: "€ 100", rank: 4, status: "Early Adopter" },
    { name: "Investor", amount: "€ 50", rank: 5, status: "Observer" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
};

export function Leaderboard() {
    return (
        <div className="w-full max-w-md mx-auto mt-12 space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                    Elite of Nothing
                </h2>
                <p className="text-sm text-muted-foreground">The definitive ranking of who has too much.</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-3"
            >
                {LEADERS.map((user) => (
                    <motion.div
                        key={user.rank}
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                            "relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm",
                            user.rank === 1
                                ? "bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border-yellow-500/30 shadow-[0_0_30px_-10px_rgba(234,179,8,0.2)]"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative font-mono font-bold text-muted-foreground w-6 text-center">
                                {user.rank === 1 ? (
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                                    >
                                        <Crown className="w-5 h-5 text-yellow-500 mx-auto" />
                                    </motion.div>
                                ) : `#${user.rank}`}
                            </div>

                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border border-white/10">
                                    <AvatarFallback className="bg-gradient-to-br from-muted to-muted/50 text-xs font-bold">
                                        {user.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col text-left">
                                    <div className="flex items-center gap-1">
                                        <span className={cn("font-medium text-sm", user.rank === 1 && "text-yellow-600 dark:text-yellow-500")}>
                                            {user.name}
                                        </span>
                                        {user.rank <= 3 && <BadgeCheck className="w-3 h-3 text-blue-500" />}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                                        {user.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="font-mono font-bold text-foreground bg-black/5 px-2 py-1 rounded-md text-sm border border-black/5">
                            {user.amount}
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
