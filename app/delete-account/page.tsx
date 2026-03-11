"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Loader2,
} from "lucide-react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Hàm xử lý gọi API gửi yêu cầu xóa tài khoản
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // Thay đổi biến môi trường NEXT_PUBLIC_API_URL thành URL thật của Backend (VD: https://api.lanhcare.vn)
      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

      const response = await fetch(`${baseUrl}/api/deletion-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          reason: reason,
        }),
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.");
      }

      // Thành công (Status 200 OK theo như Swagger UI của bạn)
      setIsSuccess(true);
      setEmail("");
      setReason("");
    } catch (error: any) {
      setErrorMsg(error.message || "Không thể kết nối đến máy chủ.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-[#FCFDFB] flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-primary/10"
      >
        {isSuccess ? (
          // MÀN HÌNH THÀNH CÔNG
          <div className="flex flex-col items-center text-center gap-6 py-8">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#3C5A38] mb-4">
                Gửi yêu cầu thành công
              </h2>
              <p className="text-[#7A9173] leading-relaxed">
                Chúng tôi đã ghi nhận yêu cầu xóa tài khoản cho email{" "}
                <strong>{email}</strong>. Đội ngũ Lành Care sẽ xử lý và gửi
                email xác nhận cho bạn trong vòng 3-5 ngày làm việc.
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-4 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all"
            >
              Trở về trang chủ
            </button>
          </div>
        ) : (
          // MÀN HÌNH FORM ĐIỀN THÔNG TIN
          <>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <AlertTriangle size={24} className="text-red-500" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-[#3C5A38]">
                  Yêu cầu xóa tài khoản
                </h1>
                <p className="text-[#7A9173] text-sm font-medium">
                  Quy trình này không thể hoàn tác sau khi đã xử lý.
                </p>
              </div>
            </div>

            <div className="bg-orange-50/80 border border-orange-200 p-4 rounded-2xl mb-8 flex gap-3">
              <ShieldAlert
                size={20}
                className="text-orange-600 shrink-0 mt-0.5"
              />
              <p className="text-sm text-orange-800 leading-relaxed font-medium">
                Khi tài khoản bị xóa, toàn bộ dữ liệu cá nhân, nhật ký ăn uống
                (Food Diary), và lịch sử rèn luyện của bạn sẽ bị xóa vĩnh viễn
                khỏi hệ thống của Lành Care.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Field Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-[#3C5A38]"
                >
                  Địa chỉ Email đăng ký tài khoản{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ví dụ: xoai@gmail.com"
                  className="w-full px-5 py-3 rounded-xl border border-[#DDE8D8] bg-[#FCFDFB] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Field Lý do */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="reason"
                  className="text-sm font-bold text-[#3C5A38]"
                >
                  Lý do bạn muốn xóa (Tùy chọn)
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Hãy chia sẻ để Lành Care có thể cải thiện tốt hơn nhé..."
                  className="w-full px-5 py-3 rounded-xl border border-[#DDE8D8] bg-[#FCFDFB] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Hiển thị lỗi nếu có */}
              {errorMsg && (
                <p className="text-sm text-red-500 font-bold bg-red-50 p-3 rounded-lg">
                  {errorMsg}
                </p>
              )}

              {/* Nút Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-red-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Đang gửi yêu cầu...
                  </>
                ) : (
                  "Xác nhận gửi yêu cầu xóa"
                )}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
