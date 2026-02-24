"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, CheckCircle2 } from "lucide-react";

export default function AICoach() {
  return (
    <section
      className="py-24 bg-primary text-primary-foreground overflow-hidden relative"
    >
      {/* Vòng tròn trang trí mờ ở góc dưới bên trái */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Cột trái: Giới thiệu tính năng AI */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 w-fit border border-secondary/30">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Trí tuệ nhân tạo
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Trợ lý sức khỏe <br />
            <span className="text-secondary">thấu hiểu người Việt</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
            Không chỉ là những con số khô khan. Lành Care AI phân tích dữ liệu
            từ Food Diary và Workout Tracking của bạn để đưa ra những lời khuyên
            cá nhân hóa, như một huấn luyện viên thực thụ.
          </p>

          {/* Danh sách các điểm mạnh */}
          <ul className="flex flex-col gap-4 mt-4">
            {[
              "Nhận diện chính xác lượng Calo của các món ăn Việt Nam.",
              "Đề xuất thực đơn và lộ trình tập luyện theo TDEE mục tiêu.",
              "Nhắc nhở uống nước và động viên bạn mỗi ngày.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={24}
                  className="text-secondary shrink-0 mt-0.5"
                />
                <span className="text-primary-foreground/90 font-medium">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Cột phải: Giao diện mô phỏng Chat với AI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          {/* Khung Chat Box */}
          <div className="bg-card rounded-[2rem] p-6 shadow-2xl border border-border/50 max-w-md mx-auto relative overflow-hidden">
            {/* Header của Chat Box */}
            <div className="flex items-center gap-4 border-b border-border/50 pb-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot size={28} className="text-primary" />
              </div>
              <div>
                <h4 className="text-card-foreground font-bold text-lg">
                  Lành Coach
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-sm text-muted-foreground">
                    Luôn sẵn sàng hỗ trợ
                  </span>
                </div>
              </div>
            </div>

            {/* Các bong bóng chat (Chat Bubbles) */}
            <div className="flex flex-col gap-5">
              {/* Tin nhắn của người dùng */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="self-end bg-muted p-4 rounded-2xl rounded-tr-sm max-w-[85%]"
              >
                <p className="text-card-foreground text-sm">
                  Sáng nay mình ăn 1 bát phở bò chín, khoảng bao nhiêu calo nhỉ?
                  🤔
                </p>
              </motion.div>

              {/* Tin nhắn của AI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring" }}
                className="self-start bg-secondary p-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm relative"
              >
                {/* Icon đuôi bong bóng chat */}
                <div className="absolute -left-2 top-0 text-secondary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 0H0L16 16V0Z" />
                  </svg>
                </div>
                <p className="text-secondary-foreground text-sm font-medium leading-relaxed">
                  Chào Xoài! Một bát phở bò chín trung bình có khoảng{" "}
                  <strong>400 - 450 calo</strong> tùy vào lượng bánh phở và nước
                  béo. <br />
                  <br />
                  Lành đã tự động ghi nhận món này vào Food Diary của bạn rồi
                  nhé. Hôm nay bạn nhớ ăn thêm chút rau xanh và trái cây nha!
                  🥗🍓
                </p>
              </motion.div>
            </div>
          </div>

          {/* Card nổi nhỏ trang trí (Floating Badge) */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-card text-card-foreground py-3 px-6 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3 hidden md:flex"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">
              🔥
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">
                Calo hôm nay
              </p>
              <p className="font-bold text-lg text-primary">1,250 / 2,000</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
