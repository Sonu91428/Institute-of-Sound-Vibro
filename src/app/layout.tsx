import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brand, nav, seo } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: "%s | ISV",
  },
  description: seo.description,
  metadataBase: new URL(seo.baseUrl),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-[var(--border)] sticky top-0 z-50 backdrop-blur bg-[color:rgb(234_242_255_/_0.7)]">
          <div className="max-w-6xl mx-auto container-padded h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--gold)] flex items-center justify-center text-black font-extrabold">{brand.nameShort}</div>
              <span className="font-semibold tracking-wide">{brand.nameFull}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.slice(0, 4).map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-[var(--gold)]">{n.label}</Link>
              ))}
              <Link href="/contact" className="btn btn-outline text-sm">Request a Quote</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] mt-12">
          <div className="max-w-6xl mx-auto container-padded py-10 text-sm text-[var(--muted)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} ISV • All rights reserved</div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[var(--gold)]">Privacy</Link>
              <Link href="/contact" className="hover:text-[var(--gold)]">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
