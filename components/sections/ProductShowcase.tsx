"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Utensils,
  Activity,
  NotebookPen,
  Info,
  ArrowRight,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const modules = [
  {
    id: 1,
    title: "Food Diary",
    shortDesc: "Ghi chép và tự động bóc tách năng lượng bữa ăn.",
    longDesc:
      "AI của Lành Care nhận diện hơn 1000+ món ăn Việt Nam. Từ phở bò, bún chả đến cơm tấm, hệ thống sẽ tự động tính toán Calo, Protein, Carb và Fat chuẩn xác lên đến 95%.",
    icon: <Utensils className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
    stats: "Tự động tính Macro",
  },
  {
    id: 2,
    title: "Workout Tracking",
    shortDesc: "Theo dõi sát sao từng nhịp độ rèn luyện của bạn.",
    longDesc:
      "Ghi nhận từ các bài tập Cardio, Yoga đến nâng tạ. Lành Care đồng bộ lượng calo đốt cháy với Food Diary để đưa ra bức tranh toàn cảnh về cán cân năng lượng trong ngày.",
    icon: <Activity className="w-6 h-6 text-primary" />,
    color: "bg-secondary",
    stats: "Đồng bộ Calo in/out",
  },
  {
    id: 3,
    title: "Daily Log & TDEE",
    shortDesc: "Cập nhật liên tục để AI hiểu rõ cơ thể bạn nhất.",
    longDesc:
      "Thay đổi cân nặng? AI sẽ tự động tính toán lại chỉ số TDEE (Tổng năng lượng tiêu hao) và đề xuất thực đơn mới để bạn luôn bám sát mục tiêu tăng/giảm cân an toàn.",
    icon: <NotebookPen className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
    stats: "Cập nhật TDEE Real-time",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Mọi thứ bạn cần, <br className="hidden lg:block" />
            <span className="text-primary">gói gọn trong một ứng dụng.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* CỘT TRÁI: KHU VỰC HÌNH ẢNH ĐÃ TỐI ƯU */}
          <motion.div
            style={{ y: yLeft }}
            className="lg:col-span-5 relative w-full h-[550px] md:h-[650px] rounded-[3rem] overflow-hidden hidden lg:flex shadow-2xl border-4 border-white ring-1 ring-primary/20"
          >
            {/* Tag trạng thái nổi bật hơn */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 text-primary text-[10px] uppercase font-black flex items-center gap-2 shadow-xl border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Lành Care Preview
            </div>

            {/* Hình ảnh bao phủ toàn bộ ô vuông */}
            <div className="relative w-full h-full">
              <Image
                src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771923275/bai-viet-dung-de-tuoi-tac-gioi-han-chinh-ban-desktop-1366x560_qleug8.jpg"
                alt="Lành Care Healthy Life"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              {/* Lớp Overlay Gradient để tạo sự gắn kết với thiết kế */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-10 opacity-60"></div>
              <div className="absolute inset-0 bg-black/10 z-10"></div>
            </div>

            {/* Chi tiết trang trí góc dưới */}
            <div className="absolute bottom-8 left-8 z-20">
              <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
                <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                  AI Health Coach
                </p>
                <p className="text-xs text-foreground font-medium">
                  Theo dõi thông minh cho người Việt
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cột Phải: Danh sách các Module */}
          <motion.div
            style={{ y: yRight }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {modules.map((module, index) => (
              <HoverCard key={module.id} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-10 rounded-[2.5rem] bg-white border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out -z-10"></div>

                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${module.color} transition-transform group-hover:rotate-12 duration-500`}
                    >
                      {module.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                          {module.title}
                        </h3>
                        <Info
                          size={16}
                          className="text-primary opacity-30 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {module.shortDesc}
                      </p>
                    </div>

                    <div className="hidden sm:flex w-14 h-14 rounded-full bg-background border border-border items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <ArrowRight size={24} />
                    </div>
                  </motion.div>
                </HoverCardTrigger>

                <HoverCardContent
                  side="left"
                  align="center"
                  className="w-80 p-6 rounded-[2rem] border-primary/20 bg-white/95 backdrop-blur-md shadow-2xl z-50"
                >
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">
                      <Sparkles size={14} /> Power by AI
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {module.longDesc}
                    </p>
                    <div className="pt-2">
                      <span className="text-[10px] font-black bg-primary text-white px-4 py-1.5 rounded-full uppercase tracking-widest">
                        {module.stats}
                      </span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sparkles({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
