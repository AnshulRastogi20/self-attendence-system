

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import QueryProvider from './QueryProvider';
import { Toaster } from 'react-hot-toast';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'College Attendance Management',
  description: 'Track and manage college attendance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <main className="container mx-auto p-4">
        <QueryProvider>
        {/* <HydrationOverlay> */}
        <Toaster position="top-center" />{children}
        {/* </HydrationOverlay> */}
        </QueryProvider>


        </main>
      </body>
    </html>
  )
}

