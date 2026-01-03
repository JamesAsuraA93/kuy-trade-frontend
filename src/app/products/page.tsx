"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check, Star, TrendingUp, Zap, Shield } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

const products = [
  {
    id: 1,
    name: "AI Signal Bot - Basic",
    price: 2990,
    originalPrice: 4990,
    description: "บอทสัญญาณเทรดพื้นฐาน เหมาะสำหรับผู้เริ่มต้น",
    features: [
      "สัญญาณเทรด Forex และ Crypto",
      "อัพเดทสัญญาณทุก 15 นาที",
      "รองรับ 10+ คู่เงิน",
      "Win Rate 68-72%",
      "การแจ้งเตือนทาง LINE",
      "Support พื้นฐาน",
    ],
    badge: "ยอดนิยม",
    icon: TrendingUp,
  },
  {
    id: 2,
    name: "AI Signal Bot - Pro",
    price: 5990,
    originalPrice: 9990,
    description: "บอทสัญญาณขั้นสูง สำหรับเทรดเดอร์มืออาชีพ",
    features: [
      "ทุกฟีเจอร์ของ Basic",
      "สัญญาณเทรดหุ้น และ CFD",
      "อัพเดทสัญญาณทุก 5 นาที",
      "รองรับ 50+ คู่เงิน",
      "Win Rate 75-82%",
      "AI วิเคราะห์ความเสี่ยง",
      "การแจ้งเตือนแบบ Real-time",
      "Priority Support 24/7",
    ],
    badge: "แนะนำ",
    icon: Zap,
    featured: true,
  },
  {
    id: 3,
    name: "AI Auto Trading Bot",
    price: 12990,
    originalPrice: 19990,
    description: "บอทเทรดอัตโนมัติเต็มรูปแบบ ไม่ต้องนั่งดูหน้าจอ",
    features: [
      "ทุกฟีเจอร์ของ Pro",
      "เทรดอัตโนมัติ 24/7",
      "AI Risk Management",
      "การจัดการพอร์ตอัตโนมัติ",
      "Win Rate 80-88%",
      "Backtesting ย้อนหลัง 5 ปี",
      "เชื่อมต่อ MT4/MT5",
      "VIP Support & Training",
    ],
    badge: "Premium",
    icon: Shield,
  },
  {
    id: 4,
    name: "Scalping Bot - Lightning",
    price: 7990,
    originalPrice: 12990,
    description: "บอทเทรดระยะสั้น สำหรับนักเทรด Scalping",
    features: [
      "เทรดระยะสั้น 1-5 นาที",
      "อัพเดททุก 30 วินาที",
      "รองรับ Crypto และ Forex",
      "Win Rate 70-78%",
      "ระบบ Stop Loss อัตโนมัติ",
      "การแจ้งเตือน Real-time",
      "Support 24/7",
    ],
    badge: "Fast",
    icon: Zap,
  },
  {
    id: 5,
    name: "Swing Trading Bot",
    price: 4990,
    originalPrice: 7990,
    description: "บอทเทรดระยะกลาง-ยาว สำหรับการถือหลายวัน",
    features: [
      "เทรดระยะ 1-7 วัน",
      "วิเคราะห์เทรนด์ระยะยาว",
      "รองรับหุ้นและ Crypto",
      "Win Rate 73-80%",
      "ระบบบริหารความเสี่ยง",
      "การแจ้งเตือนทาง LINE",
      "Support ทางอีเมล",
    ],
    badge: "Long Term",
    icon: TrendingUp,
  },
  {
    id: 6,
    name: "Portfolio Manager Pro",
    price: 9990,
    originalPrice: 14990,
    description: "ระบบบริหารพอร์ตการลงทุนแบบอัตโนมัติ",
    features: [
      "จัดการหลายบอทพร้อมกัน",
      "AI Portfolio Optimization",
      "Rebalancing อัตโนมัติ",
      "รองรับทุกประเภทสินทรัพย์",
      "Dashboard แบบ Real-time",
      "รายงานผลการเทรดละเอียด",
      "การแจ้งเตือนแบบกำหนดเอง",
      "VIP Support",
    ],
    badge: "Enterprise",
    icon: Shield,
  },
]

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [filter, setFilter] = useState<"all" | "beginner" | "professional" | "enterprise">("all")

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      quantity: 1,
      image: "/trading-bot-icon.jpg",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-green-600 text-white">6 บอทเทรดพร้อมใช้งาน</Badge>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">เลือกบอทเทรด AI ที่ใช่สำหรับคุณ</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            บอทเทรดอัจฉริยะด้วย AI ทุกระดับความเป็นมืออาชีพ พร้อมการันตีผลลัพธ์
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            ทั้งหมด
          </Button>
          <Button
            variant={filter === "beginner" ? "default" : "outline"}
            onClick={() => setFilter("beginner")}
            className={filter === "beginner" ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            สำหรับมือใหม่
          </Button>
          <Button
            variant={filter === "professional" ? "default" : "outline"}
            onClick={() => setFilter("professional")}
            className={filter === "professional" ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            มืออาชีพ
          </Button>
          <Button
            variant={filter === "enterprise" ? "default" : "outline"}
            onClick={() => setFilter("enterprise")}
            className={filter === "enterprise" ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            Enterprise
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Card
                key={product.id}
                className={`relative flex flex-col ${product.featured ? "border-2 border-blue-500 shadow-xl" : "border shadow-md"}`}
              >
                {product.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-600 text-white shadow-md">{product.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-blue-100 p-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-center">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-blue-600">฿{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-green-600 font-semibold">
                      ประหยัด ฿{(product.originalPrice - product.price).toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.9/5)</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-blue-600 font-semibold hover:bg-blue-700"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    เพิ่มลงตะกร้า
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    ดูรายละเอียด
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-xl">
          <h2 className="mb-4 text-3xl font-bold">ไม่แน่ใจว่าจะเลือกบอทไหน?</h2>
          <p className="mb-6 text-lg">ปรึกษาทีมผู้เชี่ยวชาญของเราฟรี เราจะช่วยแนะนำบอทที่เหมาะกับคุณ</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            ติดต่อที่ปรึกษา
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
