import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin'],
  variable: "--font-robot",
})

export const metadata = {
  title: 'Jason Cala',
  description: 'My personal website :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className={`{inter.className}`}>
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
