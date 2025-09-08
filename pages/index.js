import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Navbar from '../components/Navbar'
import ShortenerForm from '../components/ShortenerForm'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <SignedOut>
          <p className="text-lg mb-4">Please sign in to use the shortener</p>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <ShortenerForm />
        </SignedIn>
      </main>
    </div>
  )
}
