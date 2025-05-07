import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JKKN Mentor Mentee',
  description: 'Professional counselling and mentorship platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navigation Bar */}
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-[var(--accent)]">Mentor Mentee</span>
                    <span className="ml-2 text-gray-600"></span>
                  </Link>
                </div>
                
                <div className="hidden sm:flex sm:items-center sm:space-x-8">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                  <Link href="/counselling" className="nav-link">
                    Counselling
                  </Link>
                  <Link href="/mentors" className="nav-link">
                    Mentors
                  </Link>
                  <Link href="/requests" className="nav-link">
                    Requests
                  </Link>
                  <button className="btn-primary">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
                  <p className="text-gray-600">
                    Providing professional counselling and mentorship services to help students achieve their goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/counselling" className="text-gray-600 hover:text-[var(--accent)]">Counselling</Link></li>
                    <li><Link href="/mentors" className="text-gray-600 hover:text-[var(--accent)]">Mentors</Link></li>
                    <li><Link href="/requests" className="text-gray-600 hover:text-[var(--accent)]">Requests</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                  <p className="text-gray-600">
                    Email: ragul@jkkn.ac.in<br />
                    Phone: +91 9994156390
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} JKKN Mentor Mentee . All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 
