"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplet,
  PieChart,
  Apple,
  Footprints,
  Timer,
  HeartPulse,
  LineChart,
  Target,
  Trophy,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- INTERFACES ---
interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  className: string;
  iconBg: string; // Màu nền biểu tượng rõ rệt hơn
}

interface FeatureCollection {
  nutrition: FeatureItem[];
  workout: FeatureItem[];
  personal: FeatureItem[];
}

// --- DATA: CẬP NHẬT MÀU SẮC RÕ NÉT ---
const features: FeatureCollection = {
  nutrition: [
    {
      title: "Nhắc nhở Uống nước",
      desc: "Tính toán lượng nước dựa trên cân nặng và nhắc bạn uống đều đặn.",
      icon: <Droplet size={32} strokeWidth={2.5} className="text-blue-600" />,
      className: "md:col-span-2 bg-white border-blue-100",
      iconBg: "bg-blue-50",
    },
    {
      title: "Biểu đồ Macro",
      desc: "Trực quan hóa Carb/Fat/Protein.",
      icon: (
        <PieChart size={32} strokeWidth={2.5} className="text-orange-600" />
      ),
      className: "bg-white border-orange-100",
      iconBg: "bg-orange-50",
    },
    {
      title: "Gợi ý Món Việt",
      desc: "Hàng trăm công thức thuần Việt được tinh chỉnh Calo chuẩn xác bởi AI.",
      icon: <Apple size={32} strokeWidth={2.5} className="text-emerald-600" />,
      className:
        "md:col-span-3 bg-white border-emerald-100 flex-row items-center gap-8",
      iconBg: "bg-emerald-50",
    },
  ],
  workout: [
    {
      title: "Đếm bước chân",
      desc: "Theo dõi số bước tự động qua cảm biến điện thoại.",
      icon: (
        <Footprints size={32} strokeWidth={2.5} className="text-green-600" />
      ),
      className: "bg-white border-green-100",
      iconBg: "bg-green-50",
    },
    {
      title: "Vùng nhịp tim",
      desc: "Tối ưu hóa cường độ tập luyện để đốt mỡ hiệu quả nhất.",
      icon: (
        <HeartPulse size={32} strokeWidth={2.5} className="text-rose-600" />
      ),
      className: "md:col-span-2 bg-white border-rose-100",
      iconBg: "bg-rose-50",
    },
    {
      title: "Lịch sử Rèn luyện",
      desc: "Lưu giữ toàn bộ hành trình nỗ lực của bạn theo thời gian.",
      icon: <Timer size={32} strokeWidth={2.5} className="text-purple-600" />,
      className:
        "md:col-span-3 bg-white border-purple-100 flex-row items-center gap-8",
      iconBg: "bg-purple-50",
    },
  ],
  personal: [
    {
      title: "Biểu đồ Cân nặng",
      desc: "Theo dõi biến động để điều chỉnh mục tiêu dinh dưỡng kịp thời.",
      icon: (
        <LineChart size={32} strokeWidth={2.5} className="text-indigo-600" />
      ),
      className: "md:col-span-2 bg-white border-indigo-100",
      iconBg: "bg-indigo-50",
    },
    {
      title: "Thiết lập Mục tiêu",
      desc: "Tăng cơ hay giảm mỡ? Lành luôn bám sát lộ trình của bạn.",
      icon: <Target size={32} strokeWidth={2.5} className="text-red-600" />,
      className: "bg-white border-red-100",
      iconBg: "bg-red-50",
    },
    {
      title: "Huy hiệu Thành tựu",
      desc: "Phần thưởng tinh thần xứng đáng cho sự kỷ luật của bạn.",
      icon: <Trophy size={32} strokeWidth={2.5} className="text-yellow-600" />,
      className:
        "md:col-span-3 bg-white border-yellow-100 flex-row items-center gap-8",
      iconBg: "bg-yellow-50",
    },
  ],
};

const BentoGrid = ({ data }: { data: FeatureItem[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
  >
    {data.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
        className={`group relative p-8 rounded-[2rem] border-2 shadow-sm transition-all duration-300 flex flex-col justify-center overflow-hidden cursor-pointer ${item.className}`}
      >
        {/* Khối Icon rõ nét */}
        <div
          className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner ${item.className.includes("flex-row") ? "mb-0 shrink-0" : ""}`}
        >
          {item.icon}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-2xl font-black text-[#3C5A38] tracking-tight">
              {item.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-primary" />
          </div>
          <p className="text-[#7A9173] text-sm font-semibold leading-relaxed">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default function FeatureGrid() {
  return (
    <section className="py-32 bg-[#FCFDFB] relative border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6 border border-primary/20"
          >
            <Sparkles size={14} className="fill-primary" />
            <span>Hệ sinh thái thông minh</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-[#3C5A38] mb-6 tracking-tighter">
            Sức khỏe toàn diện <br />
            <span className="text-primary italic">trong tầm tay</span>
          </h2>
        </div>

        <Tabs defaultValue="nutrition" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-secondary/20 p-2 rounded-full h-auto flex gap-3 border border-primary/10 backdrop-blur-sm">
              <TabsTrigger
                value="nutrition"
                className="rounded-full px-10 py-4 text-sm font-black data-[state=active]:bg-primary data-[state=active]:text-white shadow-none transition-all"
              >
                🍎 DINH DƯỠNG
              </TabsTrigger>
              <TabsTrigger
                value="workout"
                className="rounded-full px-10 py-4 text-sm font-black data-[state=active]:bg-primary data-[state=active]:text-white shadow-none transition-all"
              >
                🏃 VẬN ĐỘNG
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="rounded-full px-10 py-4 text-sm font-black data-[state=active]:bg-primary data-[state=active]:text-white shadow-none transition-all"
              >
                👤 CÁ NHÂN
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="nutrition">
              <BentoGrid data={features.nutrition} />
            </TabsContent>
            <TabsContent value="workout">
              <BentoGrid data={features.workout} />
            </TabsContent>
            <TabsContent value="personal">
              <BentoGrid data={features.personal} />
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
