import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to our website! We are dedicated to providing you with the best experience possible. Our website is designed to be user-friendly and easy to navigate. We hope you enjoy your time here!" />
        <meta name="keywords" content="website, design, development, SEO, marketing, branding, digital, agency, creative, services, solutions, technology, innovation, web, app, mobile, responsive, custom, responsive, design, development, marketing, branding, digital, agency, creative, services, solutions, technology, innovation, web, app, mobile, responsive, custom" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="sitemap" content="https://www.yourwebsite.com/sitemap.xml" /> 
        <meta name="google-site-verification" content="your-verification-code" /> 
   
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${roboto.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
} 