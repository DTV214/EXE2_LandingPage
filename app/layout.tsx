import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

// Import Navbar, Footer vài nút BackToTop
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/ui/BackToTopButton";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "Lành Care | Your Vietnamese AI Health Coach",
  description:
    "Ứng dụng theo dõi sức khỏe và dinh dưỡng cá nhân hóa dành riêng cho người Việt, tích hợp AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${beVietnamPro.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <Navbar />

        <main className="flex-grow pt-20">{children}</main>

        <Footer />

        {/* Nút quay lại đầu trang được đặt ở đây để luôn hiển thị trên cùng */}
        <BackToTopButton />
      </body>
    </html>
  );
}
