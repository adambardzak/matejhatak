import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matěj Haták | Fotograf",
  description:
    "Profesionální fotograf specializující se na portréty, reportáže, firemní a rodinné fotografie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} bg-white text-black flex flex-col min-h-screen font-sans`}
        suppressHydrationWarning
      >
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
