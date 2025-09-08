import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Navbar from '../components/Navbar'
import ShortenerForm from '../components/ShortenerForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <SignedOut>
          {/* Landing Page Content */}
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Hero Header */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Short Links,
                <span className="text-gray-600">Big Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Transform your long URLs into powerful, trackable short links. 
                Share smarter, not harder with Figma Short URL.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
                  Get Started Free
                </button>
              </SignInButton>
              <p className="text-sm text-gray-500">No credit card required</p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Instant Shortening</h3>
                <p className="text-gray-600">Create short, branded links in seconds. Perfect for social media, emails, and campaigns.</p>
              </div>

              <div className="space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Advanced Analytics</h3>
                <p className="text-gray-600">Track clicks, locations, devices, and more. Get insights that matter for your business.</p>
              </div>

              <div className="space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime. Your links are safe and always accessible.</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 rounded-3xl p-8 mt-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">10M+</div>
                  <div className="text-gray-600 mt-2">Links Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">50K+</div>
                  <div className="text-gray-600 mt-2">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-600 mt-2">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600 mt-2">Support</div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="space-y-6 mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to shorten your links?
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of users who trust Figma Short URL for their link management needs.
              </p>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
                  Start Shortening Now
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          {/* Signed In Content */}
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Welcome back! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Ready to create your next short link?
              </p>
            </div>
            <ShortenerForm />
          </div>
        </SignedIn>
      </main>
    </div>
  )
}
