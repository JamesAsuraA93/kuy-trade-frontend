import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const posts = [
    {
      title: "5 กลยุทธ์การเทรดที่ทุกคนควรรู้",
      excerpt: "เรียนรู้กลยุทธ์การเทรดพื้นฐานที่จะช่วยเพิ่มโอกาสในการทำกำไร และลดความเสี่ยงในการขาดทุน",
      date: "15 ธ.ค. 2024",
      image: "/trading-strategy-charts-graphs.jpg",
      category: "Strategy",
    },
    {
      title: "วิธีใช้ AI ในการวิเคราะห์ตลาด",
      excerpt: "ค้นพบวิธีการใช้ปัญญาประดิษฐ์เพื่อวิเคราะห์ตลาดอย่างมีประสิทธิภาพ พร้อมเครื่องมือที่ใช้ได้จริง",
      date: "12 ธ.ค. 2024",
      image: "/ai-technology-trading-analysis.jpg",
      category: "Technology",
    },
    {
      title: "เทคนิคการจัดการความเสี่ยงสำหรับมือใหม่",
      excerpt: "ศิลปะของการจัดการเงินทุนและความเสี่ยง เพื่อความยั่งยืนในวงการเทรด",
      date: "10 ธ.ค. 2024",
      image: "/risk-management-financial-planning.jpg",
      category: "Education",
    },
  ]

  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            บทความและ<span className="text-green-600">เคล็ดลับ</span>การเทรด
          </h2>
          <p className="text-lg text-gray-600">เรียนรู้และพัฒนาทักษะการเทรดของคุณ</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>

                <p className="mb-4 text-gray-600">{post.excerpt}</p>

                <Button
                  variant="ghost"
                  className="group/btn gap-2 p-0 text-blue-600 hover:bg-transparent hover:text-blue-700"
                >
                  อ่านต่อ
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            ดูบทความทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  )
}
