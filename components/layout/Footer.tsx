"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Facebook,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// --- ĐỊNH NGHĨA TYPES ---
interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const navLinks: FooterLink[] = [
  { name: "Tính năng AI", href: "#features" },
  { name: "Food Diary", href: "#food-diary" },
  { name: "Workout Tracking", href: "#workout" },
  { name: "Lành Coach", href: "#ai-coach" },
];

const supportLinks: FooterLink[] = [
  { name: "Điều khoản sử dụng", href: "#" },
  { name: "Chính sách bảo mật", href: "#" },
  { name: "Câu hỏi thường gặp", href: "/#faq" }, // Thêm dấu / để đảm bảo dù ở trang nào bấm cũng về đúng trang chủ
  { name: "Yêu cầu xóa tài khoản", href: "/delete-account" }, // THÊM DÒNG NÀY ĐỂ LIÊN KẾT ĐẾN TRANG VỪA TẠO
];

const socialLinks: SocialLink[] = [
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Github size={18} />, href: "#", label: "Github" },
];

export default function Footer() {
  return (
    // Đã cập nhật bg sang #D9E7D2 (Xanh Sage đậm hơn một chút)
    <footer className="bg-[#D9E7D2] pt-24 pb-12 px-6 md:px-12 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* CỘT 1: THƯƠNG HIỆU */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                <span className="text-white font-black text-2xl italic">L</span>
              </div>
              <span className="text-3xl font-black text-[#3C5A38] tracking-tighter">
                Lành Care
              </span>
            </div>

            <p className="text-[#3C5A38]/80 text-lg font-bold leading-relaxed max-w-md">
              Your Vietnamese AI Health Coach. Chúng tôi mang đến giải pháp chăm
              sóc sức khỏe thông minh, thấu hiểu từng bữa ăn và nhịp độ vận động
              của người Việt.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#84CC70",
                    color: "#FFFFFF",
                  }}
                  className="w-10 h-10 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm transition-all duration-300 border border-white/40"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CỘT 2: ĐIỀU HƯỚNG */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="text-xs font-black text-[#3C5A38] uppercase tracking-[0.2em] opacity-60">
              Khám phá
            </h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#3C5A38] font-black hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CỘT 3: HỖ TRỢ */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="text-xs font-black text-[#3C5A38] uppercase tracking-[0.2em] opacity-60">
              Hỗ trợ
            </h4>
            <nav className="flex flex-col gap-4">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#3C5A38] font-black hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CỘT 4: LIÊN HỆ */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-xs font-black text-[#3C5A38] uppercase tracking-[0.2em] opacity-60">
              Liên hệ
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <p className="text-[#3C5A38] font-black text-sm">
                  FPT University, Khu Công Nghệ Cao, Quận 9, TP. HCM
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <p className="text-[#3C5A38] font-black text-sm">
                  contact@lanhcare.vn
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <p className="text-[#3C5A38] font-black text-sm">
                  0123 456 789
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-[#3C5A38]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <p className="text-[#3C5A38]/60 font-black text-[10px] uppercase tracking-widest">
              © 2026 Lành Care. Designing for a healthier Vietnam.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm flex items-center gap-2"
          >
            <p className="text-[#3C5A38] font-black text-[10px] uppercase tracking-widest">
              Developed by <span className="text-primary">CUBE Team</span> with
            </p>
            <Heart
              size={14}
              fill="#EF4444"
              className="text-[#EF4444] animate-pulse"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
