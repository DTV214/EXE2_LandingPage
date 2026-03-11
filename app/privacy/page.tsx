"use client";

import React from "react";
import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFB] py-32 px-6">
      <div className="container mx-auto max-w-4xl bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-primary/10">
        <div className="mb-12 border-b border-primary/10 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <Lock size={18} />
            Bảo mật thông tin
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#3C5A38] mb-4 tracking-tight">
            Chính sách Bảo mật [cite: 41]
          </h1>
          <p className="text-[#7A9173] font-medium">
            Cập nhật lần cuối: 11/03/2026 [cite: 42]
          </p>
        </div>

        <div className="space-y-10 text-[#4A6046] leading-relaxed">
          <section>
            <p className="font-medium text-lg mb-4">
              Chào mừng bạn đến với LanhCare[cite: 43]. Chúng tôi hiểu rằng dữ
              liệu sức khỏe là thông tin nhạy cảm, vì vậy chúng tôi cam kết bảo
              mật tuyệt đối thông tin cá nhân của bạn thông qua hệ thống lưu trữ
              và giao thức xác thực hiện đại tại lanhcare.id.vn[cite: 43].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              1. Thông tin chúng tôi Thu thập [cite: 44]
            </h2>
            <p className="mb-4">
              Để vận hành các tính năng hỗ trợ sức khỏe, chúng tôi thu thập các
              loại dữ liệu sau: [cite: 45]
            </p>

            <h3 className="text-xl font-bold text-[#3C5A38] mb-3">
              1.1 Thông tin do bạn cung cấp trực tiếp [cite: 46]
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Thông tin tài khoản:</strong> Địa chỉ email và Tên người
                dùng để thiết lập hồ sơ cá nhân[cite: 47].
              </li>
              <li>
                <strong>Dữ liệu Sức khỏe:</strong> Thông tin về các bữa ăn hàng
                ngày, danh sách bài tập thể dục và các chỉ số calo (in/out) do
                bạn tự nhập[cite: 48].
              </li>
              <li>
                <strong>Nội dung Diễn đàn:</strong> Các bài viết chia sẻ kinh
                nghiệm, bình luận và lượt yêu thích trong cộng đồng[cite: 49].
              </li>
              <li>
                <strong>Thông tin Giao dịch:</strong> Lịch sử thanh toán khi bạn
                thực hiện nâng cấp các gói dịch vụ qua cổng SePay[cite: 50].
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#3C5A38] mb-3">
              1.2 Thông tin Thu thập tự động và Kỹ thuật [cite: 51]
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Xác thực đăng nhập:</strong> Chúng tôi sử dụng JWT (JSON
                Web Token) để duy trì trạng thái đăng nhập của bạn một cách bảo
                mật mà không cần lưu trữ mật khẩu ở dạng văn bản thuần túy trên
                trình duyệt[cite: 52].
              </li>
              <li>
                <strong>Nhật ký máy chủ:</strong> Địa chỉ IP và thông tin thiết
                bị cơ bản được ghi nhận tạm thời trên hệ thống VPS để đảm bảo an
                ninh mạng[cite: 53].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              2. Cách chúng tôi Sử dụng Thông tin [cite: 54]
            </h2>
            <p className="mb-4">
              Dữ liệu của bạn được xử lý cho các mục đích: [cite: 55]
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Tính toán chỉ số:</strong> Hệ thống dựa vào dữ liệu bữa
                ăn và tập luyện để tính tổng lượng calo giúp bạn quản lý sức
                khỏe[cite: 56].
              </li>
              <li>
                <strong>Quản lý cộng đồng:</strong> Điều phối các bài đăng trên
                diễn đàn dựa theo quyền hạn gói dịch vụ (Free hoặc
                Premium)[cite: 57].
              </li>
              <li>
                <strong>Hỗ trợ kỹ thuật:</strong> AI Chatbot sử dụng thông tin
                lỗi hệ thống để hỗ trợ người dùng (AI không có quyền truy cập hồ
                sơ sức khỏe cá nhân)[cite: 58].
              </li>
              <li>
                <strong>Giao tiếp:</strong> Sử dụng email để gửi xác nhận giao
                dịch hoặc mã xác thực hủy tài khoản[cite: 59].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              3. Chia sẻ Thông tin và Đối tác Hạ tầng [cite: 60]
            </h2>
            <p className="font-bold text-primary mb-4">
              Chúng tôi cam kết không bán dữ liệu cá nhân[cite: 61].
            </p>
            <p className="mb-4">
              Thông tin chỉ được chuyển giao cho các dịch vụ hạ tầng thiết yếu:
              [cite: 62]
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Lưu trữ:</strong> Dữ liệu được lưu trữ trên hệ thống máy
                chủ ảo (VPS) riêng biệt, có tường lửa bảo vệ[cite: 63].
              </li>
              <li>
                <strong>Dịch vụ Email (Resend):</strong> Chúng tôi sử dụng
                Resend để gửi các thông báo quan trọng và xác thực tài
                khoản[cite: 64].
              </li>
              <li>
                <strong>Cổng thanh toán (SePay):</strong> Xử lý các giao dịch
                tài chính an toàn[cite: 65].
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              4. Quyền của Người dùng và Hủy tài khoản [cite: 66]
            </h2>
            <p className="mb-4">
              Bạn có quyền kiểm soát hoàn toàn dữ liệu của mình: [cite: 67]
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Yêu cầu xóa dữ liệu:</strong> Bạn có thể yêu cầu hủy tài
                khoản trực tuyến tại:
                https://www.lanhcare.id.vn/delete-account[cite: 68].
              </li>
              <li>
                <strong>Quy trình xác minh:</strong> Sau khi yêu cầu, một email
                xác nhận sẽ được gửi qua Resend[cite: 69]. Việc xóa dữ liệu sẽ
                được hoàn tất trong vòng 3 đến 5 ngày kể từ khi bạn xác thực
                thành công[cite: 70].
              </li>
            </ul>
          </section>

          <section className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              5. Bảo vệ Trẻ em [cite: 71]
            </h2>
            <p className="mb-2">
              Dịch vụ của chúng tôi được thiết kế dành cho người dùng từ 12 tuổi
              trở lên[cite: 72].
            </p>
            <p>
              Chúng tôi khuyến nghị người dùng dưới độ tuổi này nên có sự giám
              sát của cha mẹ hoặc người giám hộ khi sử dụng các tính năng cộng
              đồng[cite: 73].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              6. Lưu ý Quan trọng về Y tế [cite: 74]
            </h2>
            <p className="mb-2">
              LanhCare là công cụ hỗ trợ và theo dõi sức khỏe cá nhân[cite: 75].
            </p>
            <p className="mb-2 font-bold text-red-500">
              Chúng tôi không can thiệp, không cung cấp phác đồ điều trị và
              không đưa ra chẩn đoán bệnh lý cho người dùng[cite: 76].
            </p>
            <p>
              Các thông tin từ AI Chatbot chỉ nhằm mục đích hướng dẫn sử dụng hệ
              thống[cite: 77].
            </p>
          </section>

          <section className="bg-[#FCFDFB] p-6 rounded-3xl border border-primary/20 mt-8">
            <h2 className="text-2xl font-black text-[#3C5A38] mb-4">
              7. Thông tin Liên hệ [cite: 78]
            </h2>
            <p className="mb-4">
              Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ: [cite: 79]
            </p>
            <ul className="space-y-2 font-medium">
              <li>
                <strong className="text-[#3C5A38]">Đơn vị quản lý:</strong>{" "}
                LanhCare Team [cite: 80]
              </li>
              <li>
                <strong className="text-[#3C5A38]">Website:</strong>{" "}
                lanhcare.id.vn [cite: 81]
              </li>
              <li>
                <strong className="text-[#3C5A38]">Email hỗ trợ:</strong>{" "}
                hoaloicuofficial@gmail.com [cite: 82]
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
