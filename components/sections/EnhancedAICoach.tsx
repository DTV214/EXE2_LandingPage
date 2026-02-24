"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Coffee, Activity, Smile, Send } from "lucide-react";

// Import các Component Shadcn UI
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Dữ liệu các kịch bản Chat
const chatScenarios = {
  nutrition: {
    user: "Trưa nay mình ăn 1 dĩa cơm tấm sườn bì chả, nhưng không ăn mỡ hành. Khoảng bao nhiêu calo Lành nhỉ? 🤔",
    ai: "Chào Xoài! Một dĩa cơm tấm sườn bì chả (không mỡ hành) có khoảng 650 - 700 calo. \n\nLành đã ghi nhận vào Food Diary nhé! Lượng protein khá ổn (khoảng 35g), nhưng Carb hơi cao. Chiều nay bạn nhớ ưu tiên rau xanh và uống nhiều nước nha! 🥗💧",
    badges: ["Phân tích Calo", "Ghi nhận Food Diary"],
    emotion: "Chăm sóc",
    color: "bg-blue-100 text-blue-700",
  },
  workout: {
    user: "Hôm nay mình vừa chạy bộ 5km hết 40 phút. Cảm thấy hơi đuối. 🏃‍♂️💨",
    ai: "Tuyệt vời quá Xoài ơi! 👏 Chạy 5km trong 40 phút giúp bạn đốt cháy khoảng 350 - 400 calo đấy.\n\nCảm giác đuối là bình thường do cơ thể mất nước và glycogen. Bạn hãy nghỉ ngơi 15 phút, uống 1 ly nước lọc pha chút muối hoặc nước dừa tươi để bù điện giải nhé. Tối nay ngủ sớm nha! 🥥💤",
    badges: ["Tính toán Tiêu hao", "Phục hồi cơ bắp"],
    emotion: "Động viên",
    color: "bg-green-100 text-green-700",
  },
  mindset: {
    user: "Dạo này công việc áp lực quá, mình hay bị mất ngủ và thèm ăn vặt buổi đêm. 😔",
    ai: "Lành hiểu cảm giác của bạn. Khi căng thẳng, cơ thể tiết ra cortisol làm tăng cảm giác thèm ngọt.\n\nĐừng quá khắt khe với bản thân lúc này. Nếu thèm ăn đêm, hãy thử 1 hũ sữa chua không đường hoặc vài hạt hạnh nhân thay vì snack nhé. Tối nay thử nghe 1 bản nhạc không lời nhẹ nhàng mà bạn thích xem sao. Lành luôn ở đây! 🎧✨",
    badges: ["Kiểm soát Căng thẳng", "Giải pháp thay thế"],
    emotion: "Đồng cảm",
    color: "bg-amber-100 text-amber-700",
  },
};

export default function EnhancedAICoach() {
  const [activeTab, setActiveTab] = useState<
    "nutrition" | "workout" | "mindset"
  >("nutrition");
  const [isTyping, setIsTyping] = useState(false);
  const [showAiResponse, setShowAiResponse] = useState(true);

  // SỬA LỖI TẠI ĐÂY: useEffect chỉ chạy đếm ngược khi trạng thái isTyping đang là true
  useEffect(() => {
    if (!isTyping) return; // Nếu không phải đang gõ thì không làm gì cả

    const timer = setTimeout(() => {
      setIsTyping(false);
      setShowAiResponse(true);
    }, 1200); // AI "suy nghĩ" trong 1.2s

    return () => clearTimeout(timer);
  }, [isTyping]);

  const currentScenario = chatScenarios[activeTab];

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Vòng tròn trang trí */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Cột Trái: Giới thiệu AI & Shadcn Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 w-fit border border-secondary/30">
            <Sparkles size={16} className="text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              GPT-4 Powered Coach
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Không chỉ là dữ liệu, <br />
            <span className="text-secondary">đó là sự thấu hiểu.</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg mb-4">
            Lành Care AI không trả lời rập khuôn. Hệ thống phân tích đa chiều từ
            lượng calo nạp vào, mức độ vận động đến trạng thái tâm lý để đưa ra
            lời khuyên chuẩn Việt nhất.
          </p>

          {/* SỬA LỖI TẠI ĐÂY: Cập nhật state trực tiếp ngay trong sự kiện onValueChange */}
          <Tabs
            defaultValue="nutrition"
            className="w-full max-w-md"
            onValueChange={(value) => {
              setActiveTab(value as "nutrition" | "workout" | "mindset");
              setIsTyping(true); // Kích hoạt trạng thái gõ chữ ngay lập tức
              setShowAiResponse(false); // Ẩn câu trả lời hiện tại đi
            }}
          >
            <TabsList className="grid w-full grid-cols-3 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-xl p-1">
              <TabsTrigger
                value="nutrition"
                className="rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-primary flex items-center gap-2"
              >
                <Coffee size={16} className="hidden sm:block" /> Dinh dưỡng
              </TabsTrigger>
              <TabsTrigger
                value="workout"
                className="rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-primary flex items-center gap-2"
              >
                <Activity size={16} className="hidden sm:block" /> Vận động
              </TabsTrigger>
              <TabsTrigger
                value="mindset"
                className="rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-primary flex items-center gap-2"
              >
                <Smile size={16} className="hidden sm:block" /> Tâm lý
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Cột Phải: Giao diện Chatbox */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-card rounded-[2rem] p-6 shadow-2xl border border-border/50 max-w-md mx-auto relative overflow-hidden flex flex-col h-[500px]">
            {/* Header của Chat Box */}
            <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <Bot size={28} className="text-primary" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-card"></span>
                </div>
                <div>
                  <h4 className="text-card-foreground font-bold text-lg">
                    Lành Coach
                  </h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    Trạng thái:
                    <Badge
                      variant="outline"
                      className={`${currentScenario.color} border-none font-semibold text-[10px] px-2 py-0.5`}
                    >
                      {currentScenario.emotion}
                    </Badge>
                  </p>
                </div>
              </div>
            </div>

            {/* Khu vực chứa tin nhắn (Có thể cuộn) */}
            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-6 custom-scrollbar">
              {/* Tin nhắn của người dùng */}
              <motion.div
                key={`user-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="self-end bg-muted p-4 rounded-2xl rounded-tr-sm max-w-[85%]"
              >
                <p className="text-card-foreground text-sm leading-relaxed">
                  {currentScenario.user}
                </p>
              </motion.div>

              {/* Trạng thái Typing Spinner (Giả lập AI đang nghĩ) */}
              {isTyping && (
                <div className="self-start flex items-center gap-2 bg-secondary/30 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                  <Bot size={16} className="text-primary opacity-50" />
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                      className="w-1.5 h-1.5 bg-primary/60 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.2,
                      }}
                      className="w-1.5 h-1.5 bg-primary/60 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.4,
                      }}
                      className="w-1.5 h-1.5 bg-primary/60 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              )}

              {/* Tin nhắn của AI (Hiển thị sau khi gõ xong) */}
              {showAiResponse && (
                <motion.div
                  key={`ai-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="self-start bg-secondary/20 border border-secondary p-4 rounded-2xl rounded-tl-sm max-w-[95%] shadow-sm relative flex flex-col gap-3"
                >
                  {/* Badge kỹ năng của AI sử dụng trong câu trả lời */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {currentScenario.badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-background text-primary text-[10px] px-2 py-0"
                      >
                        ⚡ {badge}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-secondary-foreground text-sm font-medium leading-relaxed whitespace-pre-line">
                    {currentScenario.ai}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Input mô phỏng (Không bấm được) */}
            <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
              <div className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm text-muted-foreground cursor-not-allowed">
                Hỏi Lành Care bất cứ điều gì...
              </div>
              <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 cursor-not-allowed opacity-80">
                <Send size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
