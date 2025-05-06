import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-[var(--accent)] to-[#6C3483] text-white rounded-3xl">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Counselling & Mentorship
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Connect with experienced mentors and get the guidance you need to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/counselling" className="btn-primary bg-white text-[var(--accent)] hover:bg-white/90">
              Book a Session
            </Link>
            <Link href="/mentors" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--accent)]">
              Meet Our Mentors
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card text-center">
          <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
          <p className="text-gray-600">
            Get personalized advice from experienced mentors in your field of interest.
          </p>
        </div>

        <div className="card text-center">
          <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
          <p className="text-gray-600">
            Book sessions at your convenience with our easy-to-use scheduling system.
          </p>
        </div>

        <div className="card text-center">
          <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
          <p className="text-gray-600">
            Your privacy and security are our top priorities. All sessions are confidential.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold">
                AS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Anand Sharma</h4>
                <p className="text-sm text-gray-600">Computer Science Student</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The mentorship program helped me clarify my career goals and provided valuable insights into the industry."
            </p>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold">
                PK
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Priya Kumar</h4>
                <p className="text-sm text-gray-600">Business Administration</p>
              </div>
            </div>
            <p className="text-gray-600">
              "I received excellent guidance on my academic path and career choices. The mentors are very supportive."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of students and mentors today. Take the first step towards achieving your goals.
        </p>
        <Link href="/counselling" className="btn-primary">
          Book Your First Session
        </Link>
      </section>
    </div>
  )
} 