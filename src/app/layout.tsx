"use client";
import "./globals.css"; // Import your global styles
import { ThemeProviderWrapper } from "./components/ThemeProviderWrapper";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title> EG STORE </title>
      <body>
        <Analytics />
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
