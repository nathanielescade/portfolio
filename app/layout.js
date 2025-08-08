// app/layout.js
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import LoadingSpinner from '@/components/LoadingSpinner'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nathaniel Cobbinah | Full Stack Developer',
  description: 'Professional portfolio of Nathaniel Cobbinah (Kane Escade), a full stack developer specializing in modern web applications.',
  openGraph: {
    title: 'Nathaniel Cobbinah | Full Stack Developer',
    description: 'Professional portfolio showcasing full stack development projects and skills.',
    type: 'website',
    url: 'https://your-portfolio-url.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathaniel Cobbinah | Full Stack Developer',
    description: 'Professional portfolio showcasing full stack development projects and skills.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LoadingSpinner /> */}
        {children}
        <BackToTop />
        <Script id="smooth-scroll">
          {`
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}