import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Navbar from '../components/Navbar'
import ShortenerForm from '../components/ShortenerForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-60 right-20 w-20 h-20 bg-gray-200 rounded-full animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gray-150 rounded-full animate-pulse opacity-25" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <SignedOut>
          <div className="max-w-6xl mx-auto text-center space-y-16">
            {/* Floating 3D URL Card */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl transform rotate-6 scale-110 opacity-20 animate-pulse"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl transform hover:rotate-1 transition-transform duration-500 hover:shadow-3xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <div className="text-sm text-gray-400 mb-2">Original URL</div>
                  <div className="text-gray-600 font-mono text-xs break-all">https://www.example.com/very-long-url-that-needs-shortening</div>
                  <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-400 mr-3">Short URL</div>
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-mono animate-pulse">fig.ma/abc123</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Header with animations */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tight">
                <span className="inline-block hover:scale-110 transition-transform duration-300">Short</span>{' '}
                <span className="inline-block hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.1s'}}>Links,</span>
                <br />
                <span className="inline-block text-gray-600 hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>Big</span>{' '}
                <span className="inline-block text-gray-600 hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.3s'}}>Results</span>
              </h1>
              
              <div className="relative">
                <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Transform your long URLs into powerful, trackable short links.
                  <br />
                  <span className="text-gray-900 font-semibold">Share smarter, not harder.</span>
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* 3D Floating CTA Button */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <SignInButton mode="modal">
                <button className="group relative px-12 py-5 bg-black text-white text-xl font-bold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-black/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3">
                    <span>Get Started Free</span>
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </button>
              </SignInButton>
              <p className="text-gray-500 font-medium">No credit card required • Free forever</p>
            </div>

            {/* Animated Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                  title: "Instant Shortening",
                  description: "Create short, branded links in milliseconds. Perfect for social media, emails, and campaigns."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Advanced Analytics",
                  description: "Track clicks, locations, devices, and more. Get insights that actually matter for your business."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security with 99.9% uptime. Your links are safe and always accessible."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group space-y-6 p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
                  style={{animationDelay: `${0.8 + index * 0.2}s`}}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform scale-125"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* 3D Stats Dashboard */}
            <div className="relative mt-32">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-3xl transform rotate-1 scale-105 opacity-50"></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-12 shadow-2xl transform hover:rotate-0 transition-transform duration-700">
                <h3 className="text-3xl font-bold text-gray-900 mb-12">Trusted by thousands worldwide</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "10M+", label: "Links Created", delay: "0s" },
                    { number: "50K+", label: "Happy Users", delay: "0.2s" },
                    { number: "99.9%", label: "Uptime", delay: "0.4s" },
                    { number: "24/7", label: "Support", delay: "0.6s" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div 
                        className="text-5xl md:text-6xl font-black text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{animationDelay: stat.delay}}
                      >
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                      <div className="w-12 h-1 bg-black rounded-full mx-auto mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA with floating elements */}
            <div className="space-y-8 mt-32 relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute -top-4 -right-12 w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-30 animate-bounce"></div>
              
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Ready to transform
                <br />
                <span className="text-gray-600">your links?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
                Join the revolution of smart link management
              </p>
              <SignInButton mode="modal">
                <button className="group px-12 py-5 bg-gradient-to-r from-black to-gray-800 text-white text-xl font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-black/30 hover:from-gray-800 hover:to-black">
                  <div className="flex items-center space-x-3">
                    <span>Start Your Journey</span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Welcome Animation */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
                  Welcome back! 
                  <span className="inline-block animate-wave">👋</span>
                </h1>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded-full"></div>
              </div>
              <p className="text-2xl text-gray-600 font-light">
                Ready to create your next masterpiece?
              </p>
            </div>
            
            {/* Enhanced Form Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl transform rotate-1 scale-105 opacity-30"></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-2xl">
                <ShortenerForm />
              </div>
            </div>
          </div>
        </SignedIn>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
