import '../globals.css';
import { Fredoka } from 'next/font/google';
import Script from 'next/script';

const MainFontFamily = Fredoka({
  weight: ['400'],
  subsets: ['latin']
});

const META_PIXEL_ID = '982813903750721'; // Substitua pelo seu ID real

export const metadata = {
  title: 'Clean 4 U - Links',
  description: 'Quick access to all Clean 4 U services and social media',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  }
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Meta Pixel Script */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <div className={MainFontFamily.className}>
        {children}
      </div>
    </>
  );
}
