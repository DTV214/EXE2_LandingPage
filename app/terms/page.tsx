"use client";

import React from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFB] py-32 px-6">
      <div className="container mx-auto max-w-4xl bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-primary/10">
        {/* Header */}
        <div className="mb-12 border-b border-primary/10 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <ShieldCheck size={18} />
            Văn bản Pháp lý
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#3C5A38] mb-4 tracking-tight">
            Điều khoản & Điều kiện Sử dụng [cite: 1]
          </h1>
          <p className="text-[#7A9173] font-medium">
            Cập nhật lần cuối: 11/03/2026 [cite: 2]
          </p>
        </div>

        {/* Nội dung */}
        <div className="space-y-10 text-[#4A6046] leading-relaxed">
          <section>
            <p className="font-medium text-lg mb-4">
              Chào mừng bạn đến với LanhCare[cite: 3]. Vui lòng đọc kỹ các Điều
              khoản này trước khi sử dụng dịch vụ tại website lanhcare.id.vn và
              các nền tảng liên quan[cite: 3]. Việc bạn truy cập và sử dụng dịch
              vụ đồng nghĩa với việc bạn chấp nhận bị ràng buộc bởi các điều
              khoản dưới đây[cite: 4].
            </p>
          </section>

          <section className="bg-orange-50/80 p-6 rounded-3xl border border-orange-100">
            <h2 className="text-2xl font-black text-orange-800 mb-4 flex items-center gap-2">
              <AlertCircle size={24} />
              1. Tuyên bố Miễn trừ Trách nhiệm Y tế [cite: 5]
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-orange-900/80 font-medium">
              <li>
                <strong>Không chẩn đoán y khoa:</strong> LanhCare là một ứng
                dụng hỗ trợ theo dõi và quản lý sức khỏe cá nhân[cite: 6].
              </li>
              <li>
                <strong>Không can thiệp chuyên môn:</strong> Hệ thống không thực
                hiện các hành vi can thiệp y tế hoặc đưa ra các chẩn đoán bệnh
                lý cho người dùng[cite: 7].
              </li>
              <li>
                <strong>Mục đích tham khảo:</strong> Các chỉ số calo và thông
                tin bệnh viện chỉ mang tính chất tham khảo[cite: 8].
              </li>
            </ul>
            <p className="mt-4 text-orange-800 font-bold italic">
              Chúng tôi khuyến nghị bạn luôn tham vấn ý kiến từ bác sĩ chuyên
              khoa trước khi thực hiện các thay đổi lớn về chế độ ăn uống hoặc
              tập luyện[cite: 9].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              2. Giới hạn Độ tuổi và Tài khoản [cite: 10]
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Độ tuổi:</strong> Bằng việc sử dụng dịch vụ, bạn tuyên
                bố rằng mình từ ít nhất 12 tuổi trở lên[cite: 11].
              </li>
              <li>
                <strong>Bảo mật:</strong> Chúng tôi sử dụng cơ chế JWT (JSON Web
                Token) để bảo vệ phiên đăng nhập của bạn[cite: 12]. Bạn có trách
                nhiệm tự bảo quản thông tin tài khoản và thiết bị để tránh việc
                truy cập trái phép[cite: 13].
              </li>
              <li>
                <strong>Tính chính xác:</strong> Bạn chịu trách nhiệm về tính
                xác thực của dữ liệu bữa ăn và bài tập mà bạn nhập vào để hệ
                thống tính toán chính xác nhất có thể[cite: 14].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              3. Quy định về Diễn đàn Sức khỏe [cite: 15]
            </h2>
            <p className="mb-2 font-bold">Phân quyền đăng bài: [cite: 16]</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li>
                <strong>Người dùng miễn phí (Free):</strong> Chỉ được phép đăng
                tối đa 01 bài viết trên diễn đàn[cite: 17, 18]. Chỉ được sử dụng
                AI tối đa 03 lần[cite: 19]. Chỉ được sử dụng theo dõi bữa ăn và
                calo tối đa 01 lần[cite: 20].
              </li>
              <li>
                <strong>Người dùng gói trả phí:</strong> Được phép đăng số lượng
                bài viết không giới hạn[cite: 21].
              </li>
            </ul>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Tương tác chung:</strong> Mọi người dùng đều có quyền
                bình luận và yêu thích (like) các bài viết[cite: 22].
              </li>
              <li>
                <strong>Nội dung cấm:</strong> Nghiêm cấm đăng tải các thông tin
                sai lệch về y tế, quảng cáo thuốc không rõ nguồn gốc, hoặc các
                nội dung vi phạm thuần phong mỹ tục và pháp luật Việt Nam[cite:
                23].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              4. Dịch vụ AI Chatbot [cite: 24]
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Phạm vi hỗ trợ:</strong> AI Chatbot chỉ có chức năng hỗ
                trợ giải đáp các thắc mắc về vận hành hệ thống hoặc xử lý sự cố
                kỹ thuật[cite: 25].
              </li>
              <li>
                <strong>Giới hạn truy cập:</strong> AI không có quyền truy cập
                vào hồ sơ sức khỏe cá nhân và tuyệt đối không đưa ra lời khuyên
                chẩn đoán bệnh[cite: 26].
              </li>
              <li>
                <strong>Giới hạn sử dụng:</strong> Người dùng miễn phí được sử
                dụng tối đa 03 lần chat với AI[cite: 27].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              5. Gói Dịch vụ và Thanh toán [cite: 28]
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Các gói cung cấp:</strong> Chúng tôi cung cấp 03 gói
                dịch vụ với thời lượng khác nhau để mở khóa các tính năng nâng
                cao (như đăng bài không giới hạn)[cite: 29].
              </li>
              <li>
                <strong>Phương thức thanh toán:</strong> Các giao dịch được thực
                hiện qua cổng thanh toán SePay[cite: 30].
              </li>
              <li>
                <strong>Chính sách hoàn tiền:</strong> (Đang cập nhật quy định
                cụ thể)[cite: 31].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              6. Tra cứu Thông tin Bệnh viện [cite: 32]
            </h2>
            <p>
              Hệ thống cung cấp thông tin về địa chỉ và chuyên khoa của các bệnh
              viện để hỗ trợ người dùng tìm kiếm[cite: 33]. Tuy nhiên, bạn nên
              liên hệ trực tiếp với bệnh viện để xác nhận thông tin mới nhất
              trước khi đến khám[cite: 34].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              7. Hủy tài khoản và Xóa dữ liệu [cite: 35]
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Quy trình:</strong> Yêu cầu hủy tài khoản phải được thực
                hiện tại trang: https://www.lanhcare.id.vn/delete-account[cite:
                36].
              </li>
              <li>
                <strong>Xác thực:</strong> Bạn phải xác thực quyền sở hữu thông
                qua email (hệ thống gửi qua Resend)[cite: 37].
              </li>
              <li>
                <strong>Thời gian xử lý:</strong> Việc hủy và xóa dữ liệu sẽ
                được thực hiện trong vòng từ 3 đến 5 ngày làm việc kể từ khi xác
                thực thành công[cite: 38].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              8. Luật điều chỉnh [cite: 39]
            </h2>
            <p>
              Các Điều khoản này được điều chỉnh và giải thích theo luật pháp
              của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam[cite: 40].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
