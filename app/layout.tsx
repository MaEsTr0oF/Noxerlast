import type { Metadata } from "next";

import Metrics from "@/features/Metrics";

import "./globals.css";

export const metadata: Metadata = {
  title: "Noxer AI",
  description: "",
};

declare global {
  interface Window {
    Telegram?: any;
    tg?: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
      </head>
      <body className="antialiased">
        {children}
        <Metrics />
      </body>
    </html>
  );
}
