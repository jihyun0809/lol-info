'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeSwitchButton from '@/components/ThemeSwitchButton';
import './globals.css';

// QueryClient 생성
const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <QueryClientProvider client={queryClient}>
          <header className="header-style">
            <nav className="nav-style">
              <Link href="/" className="w-full text-center hover:underline underline-offset-8">홈</Link>
              <Link href="/champions" className="w-full text-center hover:underline underline-offset-8">챔피언 목록</Link>
              <Link href="/items" className="w-full text-center hover:underline underline-offset-8">아이템 목록</Link>
              <Link href="/rotation" className="w-full text-center hover:underline underline-offset-8">챔피언 로테이션</Link>
              <ThemeSwitchButton />
            </nav>
          </header>
          <main className="main-style">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
