

import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import MyClerkProvider from '@/lib/clerk'
import { Toaster } from 'react-hot-toast';
import Loading from './loading';
import { Suspense } from 'react';
 export const metadata = {
   title: "Video2Quiz",
  description: 
"Video2Quiz",
 };

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <MyClerkProvider>
        <Toaster />
        <Suspense fallback={<Loading />} >
           {children}
        </Suspense>
        
        </MyClerkProvider>
      </body>
    </html>
  )
}