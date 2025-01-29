import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import {Fredoka} from 'next/font/google'

const MainFontFamily = Fredoka({
  weight: ['400'],
  subsets: ['latin']
}); 

export const metadata = {
  title: 'Clean 4 U - Professional Cleaning Services',
  description: 'Professional cleaning services in Boca Raton. Residential and commercial cleaning, deep cleaning, and more.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={MainFontFamily.className}> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
