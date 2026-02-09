"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { CreditCard, DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PaymentModal() {
    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState("")

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto font-bold px-8 py-6 text-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] border-0">
                    Contribute Now
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center pb-2">The Audacity of the Transaction</DialogTitle>
                    <DialogDescription className="text-center text-balance">
                        You are not buying features. You are buying the exclusivity of saying you spent money on this.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">

                    <div className="space-y-4">
                        <h4 className="font-medium leading-none text-center text-sm uppercase tracking-widest text-muted-foreground">One-time Payment</h4>
                        <div className="grid gap-4">
                            <div className="relative">
                                <Label htmlFor="amount" className="sr-only">Amount</Label>
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50">
                                    <DollarSign className="w-4 h-4" />
                                </div>
                                <Input
                                    id="amount"
                                    type="number"
                                    placeholder="Enter your vanity price"
                                    className="pl-9 h-14 text-lg font-bold bg-white/5 border-white/10 focus-visible:ring-yellow-500/50"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <Button
                                    variant="outline"
                                    onClick={() => setAmount("5")}
                                    className="h-10 border-primary/20 hover:border-primary hover:bg-yellow-500/10 hover:text-yellow-500 transition-colors"
                                >
                                    €5
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setAmount("20")}
                                    className="h-10 border-primary/20 hover:border-primary hover:bg-yellow-500/10 hover:text-yellow-500 transition-colors"
                                >
                                    €20
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setAmount("100")}
                                    className="h-10 border-primary/20 hover:border-primary hover:bg-yellow-500/10 hover:text-yellow-500 transition-colors"
                                >
                                    €100
                                </Button>
                            </div>
                        </div>
                        <p className="text-xs text-center text-muted-foreground">Grants absolutely no benefits.</p>
                    </div>

                    <div className="space-y-4 pt-2">
                        <h4 className="font-medium leading-none text-center text-sm uppercase tracking-widest text-muted-foreground">Subscription</h4>
                        <Button variant="outline" className="w-full h-14 border-primary/20 hover:border-primary">
                            <span className="font-bold mr-2">€1</span> <span className="text-muted-foreground">/ month</span>
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">Keeps the uselessness alive.</p>
                    </div>

                </div>

                <DialogFooter className="sm:justify-center flex-col gap-2">
                    <p className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-2">
                        <CreditCard className="w-3 h-3" />
                        Processed securely via Stripe.
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
