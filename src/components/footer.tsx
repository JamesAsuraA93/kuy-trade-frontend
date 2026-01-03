import { Facebook, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/kuy-trade-logo.jpg" alt="KuyTrade" width={32} height={32} />
              <span className="text-lg font-bold text-blue-600">คุยเทรด</span>
            </div>
            <p className="text-sm text-gray-600">ชีวิตดีๆ สร้างได้ด้วยการลงทุนที่ถูกวิธี</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-green-500"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:support@kuytrade.com" className="text-gray-600 transition-colors hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900">เมนูหลัก</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-600 transition-colors hover:text-blue-600">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 transition-colors hover:text-blue-600">
                  ราคา
                </a>
              </li>
              <li>
                <a href="#broker" className="text-gray-600 transition-colors hover:text-blue-600">
                  Broker
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 transition-colors hover:text-blue-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900">ช่วยเหลือ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="text-gray-600 transition-colors hover:text-blue-600">
                  คำถามที่พบบ่อย
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 transition-colors hover:text-blue-600">
                  ติดต่อเรา
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 transition-colors hover:text-blue-600">
                  นโยบายความเป็นส่วนตัว
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 transition-colors hover:text-blue-600">
                  เงื่อนไขการใช้งาน
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900">ติดต่อ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">อีเมล</div>
                  <a href="mailto:support@kuytrade.com" className="text-gray-600 hover:text-blue-600">
                    support@kuytrade.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <div>
                  <div className="font-medium text-gray-900">LINE Official</div>
                  <a href="https://line.me/ti/p/@kuytrade" className="text-gray-600 hover:text-green-600">
                    @kuytrade
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Facebook className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Community</div>
                  <a href="https://facebook.com/groups/kuytrade" className="text-gray-600 hover:text-blue-600">
                    Facebook Group
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© 2025 KuyTrade. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">การเทรดมีความเสี่ยง โปรดศึกษาข้อมูลและทำความเข้าใจก่อนตัดสินใจลงทุน</p>
        </div>
      </div>
    </footer>
  )
}
