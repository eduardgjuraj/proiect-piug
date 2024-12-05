"use client";
import "./globals.css"; // Import your global styles
import { ThemeProviderWrapper } from "./components/ThemeProviderWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title> EG STORE </title>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
