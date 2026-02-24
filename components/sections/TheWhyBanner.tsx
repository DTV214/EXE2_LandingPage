"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Info, ChevronDown, Activity, ShieldAlert } from "lucide-react";

// Import các Component Shadcn UI
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Dữ liệu mẫu cho Bảng (Table)
const data = {
  nutrition: [
    {
      year: "2019 (Trước Covid)",
      metric: "Quan tâm Calo",
      value: "15%",
      trend: "Thấp",
    },
    {
      year: "2022 (Đỉnh dịch)",
      metric: "Tìm kiếm thực đơn sạch",
      value: "68%",
      trend: "Tăng vọt",
    },
    {
      year: "Hiện tại",
      metric: "Dùng App theo dõi ăn uống",
      value: "45%",
      trend: "Ổn định",
    },
  ],
  fitness: [
    {
      year: "2019 (Trước Covid)",
      metric: "Tập luyện tại nhà",
      value: "12%",
      trend: "Rất thấp",
    },
    {
      year: "2022 (Đỉnh dịch)",
      metric: "Mua thiết bị tập home-gym",
      value: "75%",
      trend: "Kỷ lục",
    },
    {
      year: "Hiện tại",
      metric: "Duy trì tập luyện 3 buổi/tuần",
      value: "52%",
      trend: "Tích cực",
    },
  ],
};

export default function TheWhyBanner() {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"nutrition" | "fitness">("nutrition");

  // Giả lập thời gian tải dữ liệu để hiển thị Skeleton (Skeleton Animation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Đợi 1.5s mới hiện bảng thật
    return () => clearTimeout(timer);
  }, [filter]); // Load lại khi đổi bộ lọc

  const currentData = data[filter];

  return (
    <section
      id="the-why"
      className="py-24 bg-background relative border-y border-border"
    >
      {/* Khối nền trang trí nửa trang */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -z-10 rounded-l-[4rem]"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Cột Trái: Storytelling (Câu chuyện bối cảnh) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 w-fit text-sm font-bold tracking-wide">
            <ShieldAlert size={16} />
            HỆ QUẢ TỪ ĐẠI DỊCH
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Vì sao chúng tôi <br />
            tạo ra <span className="text-primary">Lành Care?</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Đại dịch Covid-19 đi qua đã để lại bài học đắt giá: Sức đề kháng tự
            nhiên là tấm khiên vững chắc nhất. Không phải lúc ốm mới tìm thuốc,
            mà việc chủ động kiểm soát
            {/* Tích hợp Shadcn Popover (Giải thích thuật ngữ ngay trong đoạn văn) */}
            <Popover>
              <PopoverTrigger asChild>
                <span className="inline-flex items-center text-primary font-bold cursor-help mx-1 border-b border-primary border-dashed">
                  dinh dưỡng <Info size={14} className="ml-1" />
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 text-sm bg-card border-border shadow-lg">
                <p className="font-semibold mb-1 text-primary">
                  Dinh dưỡng chủ động
                </p>
                <p className="text-muted-foreground">
                  Việc hiểu rõ lượng Calo và Macro nạp vào cơ thể mỗi ngày để
                  xây dựng hệ miễn dịch khỏe mạnh từ bên trong.
                </p>
              </PopoverContent>
            </Popover>
            và vận động mới là chìa khóa dài lâu.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Tuy nhiên, thị trường lại thiếu vắng những công cụ thấu hiểu thói
            quen của người Việt. Đó là lúc Lành Care ra đời - mang theo sứ mệnh
            cá nhân hóa quá trình chăm sóc sức khỏe.
          </p>
        </motion.div>

        {/* Cột Phải: Dữ liệu thực tế (Table, Dropdown, Skeleton) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-3xl p-6 md:p-8 shadow-2xl border border-border"
        >
          {/* Header của Khối Dữ liệu kèm Dropdown Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-card-foreground">
                Sự chuyển dịch thói quen
              </h3>
              <p className="text-sm text-muted-foreground">
                Số liệu tham khảo thị trường VN (2019 - Nay)
              </p>
            </div>

            {/* Tích hợp Shadcn Dropdown Menu (Bộ lọc bảng) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5"
                >
                  <Activity size={16} />
                  {filter === "nutrition"
                    ? "Góc độ Dinh dưỡng"
                    : "Góc độ Tập luyện"}
                  <ChevronDown size={16} className="opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Chọn góc độ phân tích</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setFilter("nutrition");
                    setIsLoading(true);
                  }}
                  className={
                    filter === "nutrition" ? "bg-secondary/50 font-bold" : ""
                  }
                >
                  Dinh dưỡng & Calo
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setFilter("fitness");
                    setIsLoading(true);
                  }}
                  className={
                    filter === "fitness" ? "bg-secondary/50 font-bold" : ""
                  }
                >
                  Vận động & Tập luyện
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Khối hiển thị Table hoặc Skeleton (Giả lập Loading) */}
          <div className="rounded-xl border border-border overflow-hidden">
            {isLoading ? (
              // Trạng thái Loading: Hiển thị Skeleton của Shadcn
              <div className="p-4 space-y-4">
                <Skeleton className="h-10 w-full bg-muted" />
                <Skeleton className="h-12 w-full bg-muted/50" />
                <Skeleton className="h-12 w-full bg-muted/50" />
                <Skeleton className="h-12 w-full bg-muted/50" />
              </div>
            ) : (
              // Trạng thái Loaded: Hiển thị Bảng Shadcn Table
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[150px] font-bold">
                      Giai đoạn
                    </TableHead>
                    <TableHead className="font-bold">Chỉ số quan tâm</TableHead>
                    <TableHead className="text-right font-bold">
                      Tỷ lệ
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-secondary/10 transition-colors"
                    >
                      <TableCell className="font-medium">{row.year}</TableCell>
                      <TableCell>{row.metric}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={`px-2 py-1 rounded-md text-xs font-bold ${
                            row.trend.includes("Tăng") ||
                            row.trend.includes("Kỷ lục")
                              ? "bg-rose-100 text-rose-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {row.value}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
