"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Star, TrendingUp } from "lucide-react"
import Image from "next/image"

const customerResults = [
  {
    name: "นายสมชาย ใจดี",
    image: "/customer-1.jpg",
    profit: "+245%",
    period: "6 เดือน",
    strategy: "Swing Trading Bot",
    review: "ใช้บอทมา 6 เดือน กำไรเพิ่มขึ้นมากกว่าที่คิด ระบบทำงานอัตโนมัติ ไม่ต้องมานั่งเฝ้าหน้าจอ สบายมากครับ",
    rating: 5,
  },
  {
    name: "นางสาววิภา เจริญสุข",
    image: "/customer-2.jpg",
    profit: "+180%",
    period: "4 เดือน",
    strategy: "Scalping Bot Pro",
    review: "บอทเทรดตอบโจทย์มาก ทำกำไรได้ทุกวัน เหมาะกับคนที่ต้องการผลตอบแทนระยะสั้น แนะนำเลยค่ะ",
    rating: 5,
  },
  {
    name: "นายกิตติ วิทยากร",
    image: "/customer-3.jpg",
    profit: "+320%",
    period: "8 เดือน",
    strategy: "Auto Trading AI",
    review: "AI วิเคราะห์ได้แม่นยำมาก ช่วยลดความเสี่ยง และเพิ่มโอกาสทำกำไร พอร์ตโตขึ้นเรื่อยๆ",
    rating: 5,
  },
  {
    name: "นางสาวนิภา สุขสันต์",
    image: "/customer-4.jpg",
    profit: "+195%",
    period: "5 เดือน",
    strategy: "Portfolio Manager",
    review: "จัดการพอร์ตได้ง่าย มีรายงานผลชัดเจน ทำให้วางแผนการเงินได้ดีขึ้นมาก ประทับใจมากค่ะ",
    rating: 5,
  },
]

const portfolioImages = [
  {
    title: "ผลกำไรรายเดือน",
    image: "/portfolio-1.jpg",
    description: "กราฟแสดงผลกำไรที่เพิ่มขึ้นอย่างต่อเนื่อง",
  },
  {
    title: "Dashboard ระบบเทรด",
    image: "/portfolio-2.jpg",
    description: "หน้าจอควบคุมที่ใช้งานง่าย",
  },
  {
    title: "สถิติการเทรด",
    image: "/portfolio-3.jpg",
    description: "วิเคราะห์ผลลัพธ์แบบ Real-time",
  },
  {
    title: "ระบบ AI Analysis",
    image: "/portfolio-4.jpg",
    description: "AI วิเคราะห์แนวโน้มตลาดอัตโนมัติ",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold text-gray-900 md:text-5xl">
                ผลงาน<span className="text-green-600">ที่ประสบความสำเร็จ</span>จากลูกค้าจริง
              </h1>
              <p className="text-lg text-gray-600">ดูตัวอย่างผลลัพธ์จากการใช้งานบอทเทรดของเราจากลูกค้ากว่า 15,000+ คน</p>
            </div>
          </div>
        </section>

        {/* Customer Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">รีวิวและผลลัพธ์จากลูกค้า</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {customerResults.map((customer, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex flex-col gap-6 p-6 md:flex-row">
                    <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={customer.image || "/placeholder.svg"}
                        alt={customer.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold">{customer.name}</h3>
                          <p className="text-sm text-gray-600">{customer.strategy}</p>
                        </div>
                        <div className="flex items-center gap-1 rounded-lg bg-green-100 px-3 py-1">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="font-bold text-green-600">{customer.profit}</span>
                        </div>
                      </div>

                      <div className="mb-3 flex gap-1">
                        {Array.from({ length: customer.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="mb-3 text-sm text-gray-700">{customer.review}</p>

                      <div className="text-sm text-gray-500">ระยะเวลา: {customer.period}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Examples */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">ตัวอย่างหน้าจอและผลลัพธ์</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {portfolioImages.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-green-100">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <Card className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">15,000+</div>
                <div className="text-gray-600">ผู้ใช้งานทั้งหมด</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-green-600">95%</div>
                <div className="text-gray-600">อัตราความพึงพอใจ</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">+220%</div>
                <div className="text-gray-600">ผลตอบแทนเฉลี่ย</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600">ทำงานอัตโนมัติ</div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
