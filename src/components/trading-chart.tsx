"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface Candle {
  time: number
  open: number
  high: number
  low: number
  close: number
}

export function TradingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [candles, setCandles] = useState<Candle[]>([])
  const [currentPrice, setCurrentPrice] = useState<number>(2650.5)
  const [priceChange, setPriceChange] = useState<number>(0)

  useEffect(() => {
    const simulateGoldData = () => {
      const basePrice = 2650 + Math.random() * 50
      const newCandle: Candle = {
        time: Date.now(),
        open: basePrice + (Math.random() - 0.5) * 5,
        high: basePrice + Math.random() * 8,
        low: basePrice - Math.random() * 8,
        close: basePrice + (Math.random() - 0.5) * 5,
      }

      setCandles((prev) => {
        const updated = [...prev.slice(-50), newCandle]
        // Calculate price change using previous state
        if (prev.length > 0) {
          const change = ((newCandle.close - prev[prev.length - 1].close) / prev[prev.length - 1].close) * 100
          setPriceChange(change)
        }
        setCurrentPrice(newCandle.close)
        return updated
      })
    }

    // Generate initial data
    const initialData: Candle[] = []
    for (let i = 0; i < 50; i++) {
      const basePrice = 2650 + Math.random() * 50
      initialData.push({
        time: Date.now() - (50 - i) * 60000,
        open: basePrice + (Math.random() - 0.5) * 5,
        high: basePrice + Math.random() * 8,
        low: basePrice - Math.random() * 8,
        close: basePrice + (Math.random() - 0.5) * 5,
      })
    }
    setCandles(initialData)

    const interval = setInterval(simulateGoldData, 3000)
    return () => clearInterval(interval)
  }, []) // Empty dependency array - only run once on mount

  useEffect(() => {
    if (!canvasRef.current || candles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Calculate price range
    const prices = candles.flatMap((c) => [c.high, c.low])
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)
    const priceRange = maxPrice - minPrice

    // Draw grid
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    for (let i = 0; i < 5; i++) {
      const y = padding + (height - 2 * padding) * (i / 4)
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()

      // Price labels
      const price = maxPrice - (priceRange * i) / 4
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px monospace"
      ctx.fillText(price.toFixed(2), 5, y + 4)
    }

    // Draw candlesticks
    const candleWidth = (width - 2 * padding) / candles.length
    candles.forEach((candle, i) => {
      const x = padding + i * candleWidth
      const yHigh = padding + (height - 2 * padding) * (1 - (candle.high - minPrice) / priceRange)
      const yLow = padding + (height - 2 * padding) * (1 - (candle.low - minPrice) / priceRange)
      const yOpen = padding + (height - 2 * padding) * (1 - (candle.open - minPrice) / priceRange)
      const yClose = padding + (height - 2 * padding) * (1 - (candle.close - minPrice) / priceRange)

      const isGreen = candle.close >= candle.open
      ctx.strokeStyle = isGreen ? "#00e676" : "#f43f5e"
      ctx.fillStyle = isGreen ? "#00e676" : "#f43f5e"

      // Draw wick
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x + candleWidth / 2, yHigh)
      ctx.lineTo(x + candleWidth / 2, yLow)
      ctx.stroke()

      // Draw body
      const bodyHeight = Math.abs(yClose - yOpen)
      ctx.fillRect(x + 1, Math.min(yOpen, yClose), candleWidth - 2, Math.max(bodyHeight, 1))
    })
  }, [candles])

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            กราฟ <span className="text-accent">เรียลไทม์</span> ราคาทองคำ
          </h2>
          <p className="text-muted-foreground">ข้อมูล XAU/USD (Gold) แบบ Real-time</p>
        </div>

        <Card className="overflow-hidden border-2">
          <div className="border-b bg-secondary/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-muted-foreground">XAU/USD</div>
                <div className="text-2xl font-bold">
                  ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className={`text-right ${priceChange >= 0 ? "text-accent" : "text-destructive"}`}>
                <div className="text-sm font-medium">24h Change</div>
                <div className="text-xl font-bold">
                  {priceChange >= 0 ? "+" : ""}
                  {priceChange.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <canvas ref={canvasRef} width={800} height={400} className="w-full" />
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ติดตาม <span className="font-semibold text-primary">ราคาทองคำโลก</span> แบบเรียลไทม์
          </p>
        </div>
      </div>
    </section>
  )
}
