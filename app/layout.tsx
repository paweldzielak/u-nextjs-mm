import { orbitron, exo2 } from './fonts';
import type { ReactNode } from 'react';

import "./globals.css"
import Navbar from '../components/Navbar';
import { Metadata } from 'next';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer"
  },
} 

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
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

