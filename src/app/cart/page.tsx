"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-gray-300" />
            <h1 className="mb-4 text-3xl font-bold text-gray-900">ตะกร้าสินค้าว่างเปล่า</h1>
            <p className="mb-8 text-gray-600">คุณยังไม่มีสินค้าในตะกร้า เริ่มช้อปปิ้งเลยตอนนี้!</p>
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                เลือกซื้อบอทเทรด
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">ตะกร้าสินค้า</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>สินค้าในตะกร้า ({items.length} รายการ)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-lg font-bold text-blue-600">฿{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>สรุปการสั่งซื้อ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="coupon">รหัสส่วนลด</Label>
                  <div className="flex gap-2">
                    <Input id="coupon" placeholder="กรอกรหัสคูปอง" />
                    <Button variant="outline">
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ราคาสินค้า</span>
                    <span className="font-semibold">฿{getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ส่วนลด</span>
                    <span className="font-semibold text-green-600">-฿0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">VAT (7%)</span>
                    <span className="font-semibold">฿{(getTotal() * 0.07).toLocaleString()}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>ยอดรวมทั้งหมด</span>
                  <span className="text-blue-600">฿{(getTotal() * 1.07).toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Link href="/checkout" className="w-full">
                  <Button className="w-full bg-blue-600 text-base font-semibold hover:bg-blue-700" size="lg">
                    <CreditCard className="mr-2 h-5 w-5" />
                    ดำเนินการชำระเงิน
                  </Button>
                </Link>
                <Link href="/products" className="w-full">
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    เลือกซื้อเพิ่ม
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
