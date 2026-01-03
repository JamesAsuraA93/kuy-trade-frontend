"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [userCount, setUserCount] = useState(10234)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { items } = useCart()

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="w-full">
        <div className="flex items-center justify-center gap-2 border-b border-green-500/20 bg-gradient-to-r from-green-50 via-green-100 to-green-50 py-2 text-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="font-medium text-gray-700">
            มากกว่า <span className="font-bold text-green-600">{userCount.toLocaleString()}+</span> ผู้ใช้งาน
          </span>
        </div>

        <nav className="flex h-16 items-center justify-between gap-8 px-6 w-full">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/kuy-trade-logo.jpg"
              alt="KuyTrade Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-blue-600">คุยเทรด</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
              หน้าแรก
            </Link>
            {/* <Link href="/trade-now" className="text-sm font-medium transition-colors hover:text-blue-600">
              เทรดเลย
            </Link>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-blue-600">
              ตัวอย่างผลงาน
            </Link> */}
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-blue-600">
              ผลิตภัณฑ์
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
              ราคา
            </Link>
            <Link href="/#broker" className="text-sm font-medium transition-colors hover:text-blue-600">
              Broker
            </Link>
            <Link href="/#blog" className="text-sm font-medium transition-colors hover:text-blue-600">
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-green-600 p-0 text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href="/login" className="hidden md:block">
              <Button variant="outline" className="font-semibold bg-transparent">
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link href="/register" className="hidden md:block">
              <Button className="bg-blue-600 font-semibold text-white hover:bg-blue-700">สมัครสมาชิก</Button>
            </Link>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium">
                หน้าแรก
              </Link>
              <Link href="/trade-now" className="text-sm font-medium">
                เทรดเลย
              </Link>
              <Link href="/portfolio" className="text-sm font-medium">
                ตัวอย่างผลงาน
              </Link>
              <Link href="/products" className="text-sm font-medium">
                ผลิตภัณฑ์
              </Link>
              <Link href="/#pricing" className="text-sm font-medium text-blue-600">
                ราคา
              </Link>
              <Link href="/#broker" className="text-sm font-medium">
                Broker
              </Link>
              <Link href="/#blog" className="text-sm font-medium">
                Blog
              </Link>
              <Link href="/cart" className="text-sm font-medium">
                ตะกร้าสินค้า ({totalItems})
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-full font-semibold bg-transparent">
                  เข้าสู่ระบบ
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full bg-blue-600 font-semibold text-white">สมัครสมาชิก</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
