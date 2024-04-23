import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://meikopoulos.com"),
  title: "Kudrat Kenzhaev",
  icons: "favicon.png",
  description:
    "Welcome to the portfolio of a passionate junior frontend developer, dedicated to crafting beautiful, user-friendly websites.",
  openGraph: {
    locale: "en_US",
    siteName: "Kudrat Kenzhaev",
    type: "website",
    title: "Kudrat Kenzhaev",
    description:
      "Welcome to the portfolio of a passionate junior frontend developer, dedicated to crafting beautiful, user-friendly websites.",
    url: "https://meikopoulos.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
