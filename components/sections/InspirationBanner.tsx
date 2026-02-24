"use client";

import { motion } from "framer-motion";
import { HeartPulse, Leaf, Smile, Activity } from "lucide-react";
import Image from "next/image";

// Dữ liệu các lời khuyên sức khỏe
const tips = [
  {
    icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
    title: "Lắng nghe nhịp đập",
    desc: "Sức khỏe bắt đầu từ sự thấu hiểu. Mỗi ngày, hãy dành 5 phút tĩnh lặng để cảm nhận cơ thể bạn.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    title: "Dinh dưỡng chữa lành",
    desc: "Thực phẩm không chỉ để no, mà còn là liều thuốc tự nhiên quý giá nhất cho một tinh thần minh mẫn.",
  },
  {
    icon: <Smile className="w-6 h-6 text-amber-500" />,
    title: "Tâm lý tích cực",
    desc: "Một nụ cười, một suy nghĩ lạc quan có thể tăng cường hệ miễn dịch hiệu quả hơn bất kỳ viên thuốc nào.",
  },
];

export default function InspirationBanner() {
  return (
    <section
      id="inspiration"
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-background"
    >
      {/* 1. Hiệu ứng Nền (Water Blend) - Tông màu xanh mới rạng rỡ */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent z-0"></div>

        {/* Các mảng màu loang trôi lơ lửng */}
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
        {/* Cột Trái: Lời khuyên & Hoạt họa */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 shadow-sm border border-primary/20">
              <Activity size={16} />
              <span>Sứ mệnh của Lành Care</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Sức khỏe là hành trình, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#3C5A38]">
                không phải đích đến.
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group flex items-start gap-5 p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cột Phải: Hình ảnh chìm dần (Fade-out Mask) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative h-[600px] w-full hidden lg:block"
        >
          {/* Container chứa Masking */}
          <div
            className="absolute inset-0 w-full h-full rounded-[3rem] overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
            }}
          >
            {/* Hình ảnh thực tế (Sử dụng link jogging hoặc ảnh y tế) */}
            <Image
              src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
              alt="Healthy Lifestyle"
              fill
              className="object-cover"
            />
            {/* Lớp overlay nhẹ để đồng bộ màu */}
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
          </div>

          {/* Các hạt trôi nổi trang trí */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-20 -left-6 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-primary/10"
          >
            <HeartPulse className="w-7 h-7 text-rose-500" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="absolute bottom-32 -right-6 w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-primary/10"
          >
            <Leaf className="w-8 h-8 text-green-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
