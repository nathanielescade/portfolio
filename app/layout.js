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
    images: [
      {
        url: '/images/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Nathaniel Cobbinah - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathaniel Cobbinah | Full Stack Developer',
    description: 'Professional portfolio showcasing full stack development projects and skills.',
    images: ['/images/profile-photo.jpg'],
  },
  other: {
    'twitter:image:alt': 'Nathaniel Cobbinah - Full Stack Developer Portfolio',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LoadingSpinner /> */}
        {children}
        <BackToTop />
        <Script id="smooth-scroll" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Smooth scrolling for all anchor links
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href');
                  const targetElement = document.querySelector(targetId);
                  
                  if (targetElement) {
                    // Calculate offset for fixed header
                    const headerOffset = 80; // Height of your fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}