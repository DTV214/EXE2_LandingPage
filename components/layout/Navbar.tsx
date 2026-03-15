"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Smartphone, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"; // Thêm SheetClose

// --- ĐỊNH NGHĨA TYPES ---
interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Tính năng", href: "#features" },
  { name: "AI Coach", href: "#ai-coach" }, // Bổ sung lại link AI Coach
  { name: "Cảm hứng", href: "#inspiration" },
  { name: "Câu chuyện", href: "#the-why" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Tính toán % cuộn trang
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);

      // 2. Kiểm tra trạng thái cuộn để đổi style Navbar
      if (totalScroll > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "h-16 bg-white/90 backdrop-blur-xl shadow-md border-b border-primary/10"
          : "h-24 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* LOGO LÀNH CARE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Bấm logo về đầu trang
        >
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-xl italic">L</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xl font-black tracking-tighter transition-colors ${
                isScrolled ? "text-[#3C5A38]" : "text-[#3C5A38]"
              }`}
            >
              Lành Care
            </span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
              AI Health Coach
            </span>
          </div>
        </motion.div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ y: -2 }}
              className="relative text-sm font-black text-[#7A9173] hover:text-primary transition-colors uppercase tracking-widest group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}

          {/* SỬA CHỮA: Chuyển Button thành thẻ A để hỗ trợ Tải APK */}
          <motion.a
            href="/downloads/LanhCare.apk"
            download="LanhCare.apk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-full shadow-xl shadow-primary/20 hover:bg-[#7ABF68] transition-all cursor-pointer"
          >
            <Smartphone size={16} />
            Tải App
          </motion.a>
        </nav>

        {/* MOBILE NAVIGATION */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors">
                <Menu size={28} strokeWidth={2.5} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#FCFDFB] border-l-primary/10"
            >
              <div className="flex flex-col gap-8 mt-16">
                <div className="flex flex-col gap-1">
                  <h2 className="text-3xl font-black text-[#3C5A38] tracking-tighter">
                    Lành Care
                  </h2>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase">
                    Sống khỏe mỗi ngày
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    // SỬA CHỮA: Bọc link trong SheetClose để tự động đóng Menu khi người dùng bấm
                    <SheetClose asChild key={index}>
                      <a
                        href={link.href}
                        className="text-2xl font-black text-[#7A9173] hover:text-primary transition-colors py-2 border-b border-border/50"
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                {/* SỬA CHỮA: Chuyển Button thành thẻ A để hỗ trợ Tải APK trên Mobile */}
                <a
                  href="/downloads/LanhCare.apk"
                  download="LanhCare.apk"
                  className="mt-8 flex items-center justify-center gap-3 px-6 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-2xl shadow-primary/30"
                >
                  <Sparkles size={18} />
                  Tải Lành Care
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* THANH SCROLL PROGRESS */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-transparent">
        <Progress
          value={scrollProgress}
          className="h-full rounded-none bg-transparent [&>div]:bg-primary transition-all duration-200"
        />
      </div>
    </header>
  );
}
