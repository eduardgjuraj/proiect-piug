"use client";
import "./globals.css"; // Import your global styles
import { ThemeProviderWrapper } from "./components/ThemeProviderWrapper";
import GoogleAnalytics from './components/GoogleAnalytics';
import { CartProvider } from "./components/CartContext";
import FloatingCart from "./components/CartButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title> EG STORE </title>
      <body>
        <GoogleAnalytics />
        <CartProvider>
        <ThemeProviderWrapper> {children}</ThemeProviderWrapper>
        <FloatingCart />
        </CartProvider>
      </body>
    </html>
  );
}
