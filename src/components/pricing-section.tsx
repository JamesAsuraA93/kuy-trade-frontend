import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Free Trial",
      price: "ฟรี",
      period: "7 วัน",
      description: "เหมาะสำหรับผู้เริ่มต้น",
      features: ["จำนวนเครื่องมือจำกัด", "7 วันทดลองใช้งาน", "Basic support", "วิดีโอสอน"],
      cta: "เริ่มทดลองฟรี",
      featured: false,
    },
    {
      name: "Professional",
      price: "฿3,990",
      period: "ต่อเดือน",
      description: "แนะนำสำหรับเทรดเดอร์",
      features: [
        "เข้าถึง Indicator ทั้งหมด",
        "Priority support",
        "Advanced analytics",
        "Scalper Bot included",
        "Perfect Report",
        "Trade & Back Testing",
        "ชุมชนส่วนตัว",
      ],
      cta: "เริ่มต้นใช้งาน",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "ราคาพิเศษ",
      period: "ติดต่อเรา",
      description: "สำหรับองค์กร",
      features: [
        "Custom solutions",
        "Dedicated account manager",
        "API access",
        "White-label options",
        "Custom training",
        "Priority development",
      ],
      cta: "ติดต่อฝ่ายขาย",
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            เลือก<span className="text-blue-600">แพ็กเกจ</span>ที่เหมาะกับคุณ
          </h2>
          <p className="text-lg text-gray-600">เริ่มต้นง่าย อัปเกรดได้ทุกเมื่อ</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-2 p-8 transition-all duration-300 ${
                plan.featured
                  ? "scale-105 border-blue-600 bg-gradient-to-b from-blue-50 to-white shadow-2xl"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-green-500 px-4 py-1 text-sm font-semibold text-white">
                  แนะนำ
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.period}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.featured ? "text-green-500" : "text-blue-600"}`}
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured
                    ? "bg-gradient-to-r from-blue-600 to-green-500 text-white hover:from-blue-700 hover:to-green-600"
                    : "border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
