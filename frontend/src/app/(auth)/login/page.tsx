'use client'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/auth/login-form'
import { Database } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-blue-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
        <Database className="h-6 w-6 text-blue-600" />
          DashDoom
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Transform your data into actionable insights with our powerful analytics platform.
            </p>
            <footer className="text-sm">Ajit</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <LoginForm />
          <button
            onClick={() => router.push('/')}
            className="mt-4 text-blue-600 hover:underline text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
    