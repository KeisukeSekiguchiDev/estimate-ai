import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EstimateAI - AIプロジェクト見積もりツール",
  description: "AIを活用したプロジェクト見積もり・WBS自動生成ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
