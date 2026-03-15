"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Utensils, BrainCircuit } from "lucide-react";
import Image from "next/image"; // Import component Image của Next.js
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dữ liệu cho 3 slide của Hero Banner
const slides = [
  {
    id: 1,
    title: "Lắng nghe cơ thể",
    highlight: "mỗi ngày",
    desc: "Trợ lý sức khỏe cá nhân hóa dành riêng cho người Việt. Quản lý dinh dưỡng và vận động thông minh bằng công nghệ AI.",
    icon: <Activity className="w-8 h-8 text-primary" />,
    // Đường dẫn hình ảnh bạn vừa cung cấp
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771923041/pngtree-a-fullbody-composite-image-of-a-woman-jogging-in-good-health-picture-image_7365033_aujnlq.png",
  },
  {
    id: 2,
    title: "Phân tích món Việt",
    highlight: "chuẩn xác",
    desc: "Không còn đau đầu tính calo. Chỉ cần nhập tên món ăn, Lành Care sẽ tự động bóc tách năng lượng và Macro (Carb, Fat, Protein).",
    icon: <Utensils className="w-8 h-8 text-primary" />,
    // Bạn có thể thay thế các link ảnh khác tại đây
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771923750/fresh-box_ujomp5.jpg",
  },
  {
    id: 3,
    title: "Huấn luyện viên AI",
    highlight: "24/7 của bạn",
    desc: "Dựa trên chỉ số TDEE thực tế, AI Coach sẽ đưa ra lộ trình tập luyện và nhắc nhở sinh hoạt như một người bạn đồng hành.",
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771923438/1_kmu3Tmzrk3US2iPAz_hDpg_rvoa2e.jpg",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen will-change-transform">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="relative w-full h-screen pl-0 overflow-hidden"
            >
              {/* Lớp Nền Hình Ảnh - Tối ưu bằng Next.js Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority // Ưu tiên tải hình ảnh ở banner đầu tiên
                  className="object-cover" // Đảm bảo ảnh phủ kín khung hình mà không bị méo
                />
                {/* Lớp phủ Overlay Gradient để đảm bảo text luôn dễ đọc */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
              </div>

              {/* Nội dung Slide */}
              <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-start pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="max-w-2xl flex flex-col gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                    {slide.icon}
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    {slide.title} <br />
                    <span className="text-primary">{slide.highlight}</span>
                  </h1>

                  <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    <a
                      href="/downloads/LanhCare.apk"
                      download="LanhCare.apk"
                      className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg text-center"
                    >
                      Tải App Lành Care
                    </a>
                    <button className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                      Thấu hiểu <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút điều hướng Carousel */}
        <div className="absolute bottom-12 right-12 flex gap-4 z-30">
          <CarouselPrevious className="relative static translate-y-0 translate-x-0 w-14 h-14 bg-white/10 hover:bg-white/30 border-white/20 text-white backdrop-blur-sm transition-colors" />
          <CarouselNext className="relative static translate-y-0 translate-x-0 w-14 h-14 bg-white/10 hover:bg-white/30 border-white/20 text-white backdrop-blur-sm transition-colors" />
        </div>
      </Carousel>

      {/* Line trang trí */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20"></div>
    </section>
  );
}
