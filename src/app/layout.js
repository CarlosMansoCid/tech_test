import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tecnical test | Home',
  description: 'This is the solution made by Carlos Alberto Manso Cid to the tecnical test. I hope do you enjoy this 😄',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
