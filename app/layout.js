import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { AuthProvider } from "@descope/nextjs-sdk";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Services",
  description: "Auth System",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="mx-6 md:mx-16">
            {/* sonner toaster */}
            <Toaster/>
            <Header />
            {children}
            <Footer/> {/* 👈 Bottom About */}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}

