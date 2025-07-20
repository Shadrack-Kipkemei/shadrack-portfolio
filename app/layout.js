import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeProvider from './components/ThemeProvider'



export const metadata = {
  title: 'Shadrack Kipkemei | Software Developer',
  description: 'Portfolio of Shadrack Kipkemei, a full-stack software developer specializing in Python, JavaScript, and React.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`{inter.className} bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  
  )
} 