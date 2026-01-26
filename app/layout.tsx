import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Digital Solutions",
  description: "Professional IT Services & Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
