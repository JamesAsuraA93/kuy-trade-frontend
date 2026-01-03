import { TrendingUp, BarChart3, Users, HeadphonesIcon, Activity, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "AI Trading Signals",
      description: "สัญญาณเทรดอัจฉริยะด้วย AI วิเคราะห์แบบ Real-time",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "วิเคราะห์ตลาดแบบเรียลไทม์ด้วยเครื่องมือขั้นสูง",
    },
    {
      icon: Globe,
      title: "Multi-broker Support",
      description: "รองรับโบรกเกอร์ชั้นนำกว่า 10 แห่ง",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description: "ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง",
    },
    {
      icon: Activity,
      title: "Backtesting Tools",
      description: "ทดสอบกลยุทธ์ย้อนหลังด้วยข้อมูลจริง",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "เข้าถึงชุมชนเทรดเดอร์มืออาชีพ",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            ทำเงินการด้วยกับ<span className="text-green-600">งานคุณภาพ</span>
          </h2>
          <p className="text-lg text-gray-600">เครื่องมือครบครันสำหรับเทรดเดอร์ทุกระดับ</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-green-500 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
