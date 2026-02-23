import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ravado Tech",
  description: "Ravado Tech – Innovative Technology Solutions",
  icons: {
    icon: "/RAVADOTECH-LOGO-OnlyR.png",
    apple: "/RAVADOTECH-LOGO-OnlyR.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lilitaOne.variable} antialiased font-lilita`}>
        {children}
      </body>
    </html>
  );
}
