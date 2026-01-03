"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Download, Mail, Package } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"

export default function OrderSuccessPage() {
  const { clearCart } = useCart()
  const { width, height } = useWindowSize()

  useEffect(() => {
    // Clear cart after successful order
    const timer = setTimeout(() => {
      clearCart()
    }, 2000)

    return () => clearTimeout(timer)
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white">
      <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">สั่งซื้อสำเร็จ!</h1>
            <p className="text-lg text-gray-600">
              ขอบคุณที่ไว้วางใจ KuyTrade เราจะส่งข้อมูลการเข้าถึงบอทเทรดไปที่อีเมลของคุณภายใน 5-10 นาที
            </p>
          </div>

          <Card className="mb-6 border-2 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <CardTitle>รายละเอียดคำสั่งซื้อ</CardTitle>
              <CardDescription>หมายเลขคำสั่งซื้อ: #KT{Date.now().toString().slice(-8)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-start gap-4 rounded-lg bg-blue-50 p-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">ตรวจสอบอีเมลของคุณ</h3>
                  <p className="text-sm text-gray-600">
                    เราได้ส่งข้อมูลการเข้าถึงบอทเทรด คู่มือการใช้งาน และรหัสลิขสิทธิ์ไปที่อีเมลของคุณแล้ว
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-green-50 p-4">
                <Package className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">ดาวน์โหลดและติดตั้ง</h3>
                  <p className="text-sm text-gray-600">คุณสามารถดาวน์โหลดบอทเทรดได้ทันทีจากหน้าบัญชีของคุณ หรือตามลิงก์ในอีเมล</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-purple-50 p-4">
                <Download className="mt-1 h-6 w-6 flex-shrink-0 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">เริ่มใช้งาน</h3>
                  <p className="text-sm text-gray-600">ติดตั้งบอทและเชื่อมต่อกับ TradingView ตามคู่มือที่เราจัดเตรียมไว้ให้คุณ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>ขั้นตอนถัดไป</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  1
                </div>
                <p className="text-gray-700">ตรวจสอบอีเมลและดาวน์โหลดบอทเทรด</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  2
                </div>
                <p className="text-gray-700">ติดตั้งและเชื่อมต่อกับ TradingView ตามคู่มือ</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  3
                </div>
                <p className="text-gray-700">เข้าร่วม LINE Community เพื่อรับคำแนะนำจากทีม</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  4
                </div>
                <p className="text-gray-700">เริ่มเทรดและติดตามผลลัพธ์จาก Dashboard</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="flex-1">
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                เลือกซื้อเพิ่ม
              </Button>
            </Link>
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                ไปที่หน้าบัญชี
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                กลับหน้าแรก
              </Button>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center text-white">
            <h3 className="mb-2 text-xl font-bold">ต้องการความช่วยเหลือ?</h3>
            <p className="mb-4">ทีมงานของเราพร้อมช่วยเหลือคุณตลอด 24/7</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                ติดต่อ Support
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                ดูคู่มือการใช้งาน
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
