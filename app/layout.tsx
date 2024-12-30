import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../styles/globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue", // Biến CSS để dễ sử dụng,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency Portfolio",
  description: "Agency Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} antialiased `}>{children}</body>
    </html>
  );
}
