import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mochi Excercise Checkout System",
  description:
    "A Mochi Software Engineering Intern Application Assesssment Test built by Stefano San Esteban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={poppins.variable}>
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
