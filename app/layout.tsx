
import Navbar from './(components)/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-Nour',
  description: 'Learn to flourish',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar
        />
        {children}
        </body>
    </html>
  )
}
