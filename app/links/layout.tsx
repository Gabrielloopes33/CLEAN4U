import '../globals.css'
import { Fredoka } from 'next/font/google'

const MainFontFamily = Fredoka({
  weight: ['400'],
  subsets: ['latin']
}); 

export const metadata = {
  title: 'Clean 4 U - Links',
  description: 'Quick access to all Clean 4 U services and social media',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  }
}

export default function LinksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
} 