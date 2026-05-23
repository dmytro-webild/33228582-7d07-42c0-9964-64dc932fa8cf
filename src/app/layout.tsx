import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Hotel Surya Sadan - Luxury Stay in Guptkashi',
  description: 'Experience peace and comfort at Hotel Surya Sadan, Guptkashi. Modern amenities, beautiful mountain views, and the best hospitality in Rudraprayag.',
  openGraph: {
    "title": "Hotel Surya Sadan",
    "description": "Affordable luxury hotel in Guptkashi.",
    "siteName": "Hotel Surya Sadan",
    "type": "website"
  },
};

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
