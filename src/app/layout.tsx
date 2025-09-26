
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from '@/components/chatbot';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { StormReport } from '@/components/storm-report';

export const metadata: Metadata = {
  title: 'Good Guys',
  description: 'A rebuild of the Good Guys Roofing website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Stardos+Stencil:wght@400;500&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "font-['Inter']")}>
        <Header />
        <main>{children}</main>
        <StormReport />
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
