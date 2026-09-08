import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AmbientPointer } from "@/components/motion/ambient-pointer";

export const metadata: Metadata = {
  title: {
    default: "CINEMA OS",
    template: "%s · CINEMA OS"
  },
  description: "Your personal history of cinema.",
  applicationName: "CINEMA OS"
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AmbientPointer />
        {children}
      </body>
    </html>
  );
}
