import './globals.css';
import type { Metadata } from 'next';
import { Archivo_Black, Saira_Stencil_One, Montserrat } from 'next/font/google';

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
});

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-saira-stencil',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Crazy Legs',
  description: 'Coming Soon to Charlotte',
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        sizes: "any",
      },
      {
        url: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      }
    ],
    apple: {
      url: "/images/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "android-chrome",
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${sairaStencil.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}