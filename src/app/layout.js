import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Traversy Courses',
  description: 'Generated by Truong Anh Vu',
  keywords: 'nextjs, react, tailwind css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className='container bg-gray-800 min-w-screen min-h-screen text-white py-4'>
          <div className='mx-10'>
            {children}
          </div>
        </main>
      </body>
    </html >
  )
}
