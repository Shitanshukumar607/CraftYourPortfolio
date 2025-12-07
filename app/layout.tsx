import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeCraft",
  description: "Transform Your Resume into a Stunning Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} antialiased`}>{children}</body>
    </html>
  );
}
