"use client"

import { X, Gift, Zap } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface WelcomePopupProps {
  open: boolean
  onClose: () => void
}

export function WelcomePopup({ open, onClose }: WelcomePopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md overflow-hidden p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-lg transition-colors hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-48 bg-gradient-to-br from-primary via-primary to-accent">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/images/kuy-trade-logo.jpg" alt="KuyTrade" width={100} height={100} className="animate-float" />
          </div>
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              ยินดีต้อนรับสู่ <span className="text-primary">KuyTrade</span>! 🎉
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
              <Gift className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <div className="font-semibold">รับฟรี! 20+ อินดิเคเตอร์</div>
                <div className="text-sm text-muted-foreground">เครื่องมือเทรดระดับ Pro ใช้งานได้ทันที ไม่มีค่าใช้จ่าย</div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-primary/10 p-4">
              <Zap className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <div className="font-semibold">เชื่อมต่อ TradingView</div>
                <div className="text-sm text-muted-foreground">ใช้งานบน TradingView ฟรี เชื่อมต่อได้ภายใน 1 นาที</div>
              </div>
            </div>

            <Button
              className="w-full bg-accent text-lg font-semibold text-white hover:bg-accent/90"
              size="lg"
              onClick={onClose}
            >
              เริ่มใช้งานเลย!
            </Button>

            <p className="text-center text-xs text-muted-foreground">มีผู้ใช้งานมากกว่า 15,000+ คนไว้วางใจ KuyTrade</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
