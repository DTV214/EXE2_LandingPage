"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, Smartphone, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dữ liệu cho phần Câu hỏi thường gặp (FAQ)
const faqs = [
  {
    question: "Lành Care hiện tại có miễn phí không?",
    answer:
      "Trong giai đoạn Beta, Lành Care hoàn toàn miễn phí cho tất cả người dùng. Bạn có thể sử dụng đầy đủ các tính năng từ Food Diary, Workout Tracking đến việc trò chuyện không giới hạn với AI Coach.",
  },
  {
    question: "Dữ liệu sức khỏe của tôi có được bảo mật không?",
    answer:
      "Tuyệt đối bảo mật. Lành Care áp dụng các tiêu chuẩn mã hóa dữ liệu hiện đại nhất. Các thông tin về cân nặng, chiều cao và nhật ký ăn uống của bạn chỉ được lưu trữ trên thiết bị và server an toàn, không bao giờ được chia sẻ cho bên thứ ba.",
  },
  {
    question: "Ứng dụng AI phân tích món ăn Việt Nam có chính xác không?",
    answer:
      "AI của chúng tôi được huấn luyện trên hàng chục ngàn dữ liệu hình ảnh và thành phần của ẩm thực Việt Nam (từ phở, bún, cơm tấm đến các món xào, kho). Độ chính xác trong việc tính toán Calo và Macro hiện tại đạt trên 90%.",
  },
  {
    question: "Khi nào Lành Care mới có phiên bản dành cho iOS?",
    answer:
      "Đội ngũ Lành Care đang nỗ lực hoàn thiện phiên bản iOS. Dự kiến bản thử nghiệm trên TestFlight dành cho người dùng iPhone sẽ được ra mắt vào quý tới. Bạn có thể để lại email để nhận thông báo sớm nhất!",
  },
];

export default function CTA() {
  return (
    <section className="pt-24 pb-12 bg-background relative overflow-hidden flex flex-col items-center">
      {/* KHỐI 1: CÂU HỎI THƯỜNG GẶP (Shadcn Accordion) */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl mb-32 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-primary font-bold mb-4">
            <ShieldCheck size={18} /> Giải đáp thắc mắc
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            Bạn còn phân vân điều gì?
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border px-6 py-2 rounded-2xl shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/50 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-4 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* KHỐI 2: BANNER CTA RỰC RỠ */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="container mx-auto max-w-5xl px-6 md:px-12 relative z-10"
      >
        <div className="bg-gradient-to-br from-primary via-[#5c2114] to-primary rounded-[3rem] p-10 md:p-20 text-center relative shadow-2xl overflow-hidden border border-white/10">
          {/* Vòng tròn phát sáng nền */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-20 flex flex-col items-center gap-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="w-20 h-20 bg-secondary/20 rounded-3xl backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl"
            >
              <Sparkles className="w-10 h-10 text-secondary" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
              Sẵn sàng thay đổi <br />
              <span className="text-secondary">vóc dáng & thói quen?</span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl max-w-xl">
              Hãy để Lành Care đồng hành cùng bạn trên chặng đường kiến tạo một
              phiên bản khỏe mạnh và hạnh phúc hơn mỗi ngày.
            </p>

            {/* Cụm Nút bấm Hành động */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto justify-center mt-6">
              {/* Nút Tải APK: Glowing Animation */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-white rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <a
                  href="/downloads/LanhCare.apk"
                  download="LanhCare.apk"
                  className="relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-secondary text-secondary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform"
                >
                  <Download size={24} />
                  Tải APK Lành Care
                </a>
              </div>

              {/* Nút Waitlist */}
              <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-black/20 text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                <Smartphone size={24} />
                Bản iOS (Sắp ra mắt)
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
