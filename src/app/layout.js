import { Roboto } from 'next/font/google'



const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Tech test | Home',
  description: 'This is the solution made by Carlos Alberto Manso Cid to the technical test. I hope do you enjoy this 😄',
  openGraph: {
    title: 'Tech test',
    description: 'This is the solution made by Carlos Alberto Manso Cid to the technical test. I hope do you enjoy this 😄',
    url: 'https://tech-test-two.vercel.app',
    siteName: 'Tech test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech test',
    description: 'This is the solution made by Carlos Alberto Manso Cid to the technical test. I hope do you enjoy this 😄',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }, 
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
}

export default async function RootLayout({ children}) {
  return (
    <html lang='es'>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
