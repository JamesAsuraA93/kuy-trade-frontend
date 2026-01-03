import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "สมชาย วงศ์ทรัพย์",
    role: "นักเทรด Forex",
    image: "/thai-male-trader-professional.jpg",
    content:
      "ใช้ KuyTrade มา 6 เดือนแล้ว กำไรเพิ่มขึ้น 150% จากอินดิเคเตอร์ Smart Trend ที่แม่นยำมาก บอกจุดเข้า-ออกได้ชัดเจน ไม่ต้องเดาเอาเอง แถมฟรีอีกด้วย!",
    rating: 5,
  },
  {
    name: "อรทัย สุขใจ",
    role: "เทรดหุ้นไทย",
    image: "/thai-female-trader-business.jpg",
    content:
      "เทรดมา 3 ปี แต่พอเจอ KuyTrade รู้สึกเหมือนได้อาจารย์สอนฟรี! อินดิเคเตอร์ตัว Volume Flow ช่วยให้เห็นเงินไหลเข้า-ออกชัดเจน ตัดสินใจได้เร็วขึ้น วินเรทดีขึ้นมาก",
    rating: 5,
  },
  {
    name: "วีระ เจริญพร",
    role: "Crypto Trader",
    image: "/thai-male-crypto-trader.jpg",
    content:
      "เทรด Bitcoin กับ Altcoin ต้องใช้ KuyTrade เท่านั้น! กราฟเรียลไทม์จาก Binance แม่นมาก แถมมี Scalper Bot ที่เทรดได้ตลอดเวลา ทำกำไรแบบอัตโนมัติ สุดยอดจริงๆ",
    rating: 5,
  },
  {
    name: "ปิยะนุช ธนสาร",
    role: "Part-time Trader",
    image: "/thai-female-investor.jpg",
    content:
      "เริ่มต้นเทรดใหม่ๆ กลัวว่าจะยาก แต่ KuyTrade ทำให้เข้าใจง่ายมาก มี Tutorial ภาษาไทยครบ Community น่ารัก ช่วยเหลือกันดี ตอนนี้เทรดเป็นรายได้เสริมแล้ว",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            เทรดเดอร์<span className="text-accent">ไทย</span>ว่ายังไง?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            ฟังเสียงจากผู้ใช้งานจริงที่ประสบความสำเร็จด้วย KuyTrade
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="border-b bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            มีผู้ใช้งานมากกว่า <span className="font-bold text-accent">15,000+</span> คนที่เลือก KuyTrade
          </p>
        </div>
      </div>
    </section>
  )
}
