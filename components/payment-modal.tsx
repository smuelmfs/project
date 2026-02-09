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
import { CreditCard } from "lucide-react"

export function PaymentModal() {
    const [open, setOpen] = useState(false)

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
                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="h-16 flex flex-col gap-1 border-primary/20 hover:border-primary">
                                <span className="text-lg font-bold">€1</span>
                            </Button>
                            <Button variant="outline" className="h-16 flex flex-col gap-1 border-primary/20 hover:border-primary">
                                <span className="text-lg font-bold">€3</span>
                            </Button>
                            <Button variant="outline" className="h-16 flex flex-col gap-1 border-primary/20 hover:border-primary">
                                <span className="text-lg font-bold">€5</span>
                            </Button>
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
