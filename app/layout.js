import './globals.css'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import ThemeProvider from '@/components/ThemeProvider/page'

export const metadata = {
  title: 'Shadrack Kipkemei | Software Developer',
  description: 'Portfolio of Shadrack Kipkemei, a full-stack software developer specializing in Python, JavaScript, and React.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}