import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPBank Technology Hackathon 2025",
  description: "Tham gia cuộc thi lập trình lớn nhất năm 2025 cùng VPBank. Khám phá tương lai công nghệ tài chính.",
  keywords: "VPBank, Hackathon, Technology, Programming, FinTech, Vietnam",
  authors: [{ name: "VPBank" }],
  openGraph: {
    title: "VPBank Technology Hackathon 2025",
    description: "Tham gia cuộc thi lập trình lớn nhất năm 2025 cùng VPBank",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
