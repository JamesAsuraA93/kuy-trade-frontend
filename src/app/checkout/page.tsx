"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { CreditCard, Building2, Smartphone, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, getTotal } = useCart()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Checkout submitted:", { formData, paymentMethod, items })
    // TODO: Connect to payment gateway and NestJS backend
    router.push("/order-success")
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">ชำระเงิน</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>ข้อมูลผู้สั่งซื้อ</CardTitle>
                  <CardDescription>กรอกข้อมูลของคุณเพื่อรับบอทเทรด</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">ชื่อ *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">นามสกุล *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">อีเมล *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">ที่อยู่</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city">เมือง/จังหวัด</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">รหัสไปรษณีย์</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>วิธีการชำระเงิน</CardTitle>
                  <CardDescription>เลือกวิธีการชำระเงินที่คุณต้องการ</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex flex-1 cursor-pointer items-center gap-3">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">บัตรเครดิต / เดบิต</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                      <Label htmlFor="bank-transfer" className="flex flex-1 cursor-pointer items-center gap-3">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">โอนเงินผ่านธนาคาร</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="promptpay" id="promptpay" />
                      <Label htmlFor="promptpay" className="flex flex-1 cursor-pointer items-center gap-3">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">พร้อมเพย์ (PromptPay)</span>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4 rounded-lg border bg-gray-50 p-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">หมายเลขบัตร *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          required={paymentMethod === "credit-card"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">ชื่อบนบัตร *</Label>
                        <Input
                          id="cardName"
                          placeholder="SOMCHAI JAIDEE"
                          value={formData.cardName}
                          onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                          required={paymentMethod === "credit-card"}
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">วันหมดอายุ *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                            required={paymentMethod === "credit-card"}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            type="password"
                            maxLength={3}
                            value={formData.cvv}
                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                            required={paymentMethod === "credit-card"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>สรุปคำสั่งซื้อ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">จำนวน: {item.quantity}</p>
                          <p className="text-sm font-bold text-blue-600">฿{item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
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

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-base font-semibold hover:bg-blue-700"
                    size="lg"
                  >
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    ยืนยันการสั่งซื้อ
                  </Button>

                  <p className="text-center text-xs text-gray-500">การชำระเงินของคุณจะได้รับการปกป้องด้วย SSL encryption</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
