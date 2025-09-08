import { UserButton, SignInButton, useUser } from '@clerk/nextjs'

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <nav className="flex justify-between p-4 bg-gray-100 shadow-md">
      <h1 className="text-xl font-bold text-pink-600">Figma Link Shortener</h1>
      <div>{isSignedIn ? <UserButton /> : <SignInButton />}</div>
    </nav>
  )
}