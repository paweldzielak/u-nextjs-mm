import Link from 'next/link';
import type { ReactNode } from 'react';

import "./globals.css"
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
        <header>  
          <Navbar />
        </header>
        <main className='py-3 grow'>
          {children}
        </main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy
          of <a href='https://rawg.io/' target='_blank' className='text-orange-800 hover:underline'>RAWG</a>
        </footer>
      </body>
    </html>
  )
}

