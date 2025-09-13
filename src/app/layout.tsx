import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Beautiful Analytics Made Simple",
  description:
    "Transform your data into actionable insights with our intuitive dashboard. Monitor performance, track trends, and make data-driven decisions with ease.",
  keywords: [
    "dashboard",
    "analytics",
    "data visualization",
    "business intelligence",
    "charts",
  ],
  authors: [{ name: "Dashboard Team" }],
  creator: "Dashboard",
  publisher: "Dashboard",
  openGraph: {
    title: "Dashboard - Beautiful Analytics Made Simple",
    description:
      "Transform your data into actionable insights with our intuitive dashboard.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard - Beautiful Analytics Made Simple",
    description:
      "Transform your data into actionable insights with our intuitive dashboard.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
