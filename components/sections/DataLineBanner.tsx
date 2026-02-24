"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Flame, Scale, BrainCircuit } from "lucide-react";

// Dữ liệu các trạm (Nodes) trên luồng dữ liệu
const nodes = [
  {
    id: 1,
    title: "Bạn nạp thực phẩm",
    desc: "Ghi chép bữa ăn (VD: Phở Bò) vào Food Diary.",
    icon: <Coffee className="w-8 h-8 text-primary" />,
    color: "bg-[#EAE5BA]",
  },
  {
    id: 2,
    title: "Lành tính toán",
    desc: "Tự động bóc tách: 450 Calo, 60g Carb, 20g Protein.",
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-100",
  },
  {
    id: 3,
    title: "Cập nhật TDEE",
    desc: "Đối chiếu năng lượng nạp vào với tổng tiêu hao trong ngày.",
    icon: <Scale className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    id: 4,
    title: "AI Coach tư vấn",
    desc: "Đề xuất bài tập nhẹ nhàng vào buổi chiều để cân bằng.",
    icon: <BrainCircuit className="w-8 h-8 text-green-600" />,
    color: "bg-green-100",
  },
];

export default function DataLineBanner() {
  const containerRef = useRef(null);

  // Lấy tỷ lệ cuộn chuột qua Section này (từ 0 đến 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Chuyển đổi tỷ lệ cuộn thành chiều cao của thanh SVG line (Vẽ dần ra)
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Vòng tròn mờ trang trí */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Mạch máu dữ liệu của bạn
          </motion.h2>
          <p className="text-primary-foreground/70 text-lg">
            Mọi thao tác bạn làm đều được kết nối chặt chẽ để tạo ra một bức
            tranh sức khỏe hoàn chỉnh nhất.
          </p>
        </div>

        {/* Khung chứa Luồng dữ liệu */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          {/* Đường Line (Nét đứt) SVG Animation ở giữa */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 h-full z-0 hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 4 1000"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Nền đứt đoạn mờ */}
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="1000"
                stroke="#EAE5BA"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              {/* Nét vẽ chạy theo cuộn chuột */}
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="1000"
                stroke="#EAE5BA"
                strokeWidth="4"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Các Trạm (Nodes) xếp đan xen */}
          <div className="flex flex-col gap-12 md:gap-24 w-full relative z-10">
            {nodes.map((node, index) => {
              // Node chẵn nằm bên phải, Node lẻ nằm bên trái (chỉ áp dụng trên Desktop)
              const isEven = index % 2 !== 0;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Khối Nội dung */}
                  <div
                    className={`flex-1 text-center ${isEven ? "md:text-left" : "md:text-right"}`}
                  >
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {node.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed max-w-sm mx-auto md:mx-0">
                      {node.desc}
                    </p>
                  </div>

                  {/* Vòng tròn Icon (Trạm/Node) */}
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping blur-sm"></div>
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-primary ${node.color}`}
                    >
                      {node.icon}
                    </div>
                  </div>

                  {/* Không gian trống để căn lề */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nút Kết luận ở đáy đường Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center relative z-10"
        >
          <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-[0_0_30px_rgba(234,229,186,0.4)] hover:scale-105 transition-transform">
            Trải nghiệm Sự Kết Nối
          </button>
        </motion.div>
      </div>
    </section>
  );
}
