import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
// Force rebuild for CSS fix

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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
