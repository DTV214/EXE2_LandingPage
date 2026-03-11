"use client";

import React from "react";
import { Users } from "lucide-react";

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFB] py-32 px-6">
      <div className="container mx-auto max-w-4xl bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-primary/10">
        <div className="mb-12 border-b border-primary/10 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <Users size={18} />
            Cộng đồng
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#3C5A38] mb-4 tracking-tight">
            Quy tắc Cộng đồng [cite: 83]
          </h1>
          <p className="text-[#7A9173] font-medium">
            Cùng xây dựng một môi trường Lành mạnh
          </p>
        </div>

        <div className="space-y-10 text-[#4A6046] leading-relaxed">
          <section>
            <p className="font-medium text-lg mb-4">
              Chào mừng bạn đến với diễn đàn LanhCare! Để xây dựng một cộng đồng
              văn minh và hữu ích cho sức khỏe, mọi người dùng (từ 12 tuổi trở
              lên) cần tuân thủ các quy tắc sau: [cite: 84]
            </p>
          </section>

          <div className="grid gap-6">
            {/* Rule 1 */}
            <div className="bg-[#FCFDFB] p-6 rounded-3xl border border-primary/20">
              <h2 className="text-xl font-black text-[#3C5A38] mb-3">
                1. Không thay thế bác sĩ [cite: 85]
              </h2>
              <p className="mb-2">
                LanhCare là nơi chia sẻ kinh nghiệm và theo dõi sức khỏe cá
                nhân[cite: 86].
              </p>
              <p className="text-red-600 font-medium">
                Nghiêm cấm việc tự ý đưa ra các phác đồ điều trị, chẩn đoán bệnh
                cho người dùng khác hoặc khẳng định các thông tin thay thế tư
                vấn y tế chuyên sâu[cite: 87].
              </p>
            </div>

            {/* Rule 2 */}
            <div className="bg-[#FCFDFB] p-6 rounded-3xl border border-primary/20">
              <h2 className="text-xl font-black text-[#3C5A38] mb-3">
                2. Nội dung chia sẻ lành mạnh [cite: 88]
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Chỉ đăng tải các bài viết liên quan đến chủ đề sức khỏe, dinh
                  dưỡng và luyện tập[cite: 89].
                </li>
                <li>
                  Không đăng tải thông tin sai lệch, tin giả (fake news) về y tế
                  hoặc các phương pháp chữa bệnh chưa được kiểm chứng[cite: 90].
                </li>
              </ul>
            </div>

            {/* Rule 3 */}
            <div className="bg-[#FCFDFB] p-6 rounded-3xl border border-primary/20">
              <h2 className="text-xl font-black text-[#3C5A38] mb-3">
                3. Cấm quảng cáo và Spam [cite: 91]
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Tuyệt đối không quảng cáo các loại thuốc, thực phẩm chức năng
                  hoặc dịch vụ y tế không rõ nguồn gốc[cite: 92].
                </li>
                <li>
                  Tuân thủ giới hạn đăng bài của hệ thống (Người dùng Free: 01
                  bài viết; Người dùng Gói: Không giới hạn)[cite: 93].
                </li>
              </ul>
            </div>

            {/* Rule 4 */}
            <div className="bg-[#FCFDFB] p-6 rounded-3xl border border-primary/20">
              <h2 className="text-xl font-black text-[#3C5A38] mb-3">
                4. Tôn trọng và Lịch sự [cite: 94]
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Không sử dụng ngôn từ kích động, xúc phạm, hoặc quấy rối người
                  dùng khác trong phần bình luận và bài viết[cite: 95].
                </li>
                <li>
                  Tôn trọng quyền riêng tư và dữ liệu cá nhân của người khác
                  [cite: 96]; không chia sẻ thông tin cá nhân của người khác khi
                  chưa được phép[cite: 97].
                </li>
              </ul>
            </div>

            {/* Rule 5 */}
            <div className="bg-[#FCFDFB] p-6 rounded-3xl border border-primary/20">
              <h2 className="text-xl font-black text-[#3C5A38] mb-3">
                5. Tuân thủ Pháp luật [cite: 98]
              </h2>
              <p>
                Không đăng tải các nội dung vi phạm pháp luật Việt Nam, các nội
                dung chính trị, tôn giáo nhạy cảm hoặc vi phạm thuần phong mỹ
                tục[cite: 99].
              </p>
            </div>

            {/* Rule 6 */}
            <div className="bg-red-50 p-6 rounded-3xl border border-red-100 mt-4">
              <h2 className="text-xl font-black text-red-700 mb-3">
                6. Hình thức xử lý [cite: 100]
              </h2>
              <p className="text-red-900/80 font-medium">
                Chúng tôi có quyền gỡ bỏ nội dung hoặc khóa tài khoản tạm
                thời/vĩnh viễn đối với các trường hợp vi phạm quy tắc cộng đồng
                mà không cần báo trước để bảo vệ sự an toàn của hệ thống[cite:
                101].
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
