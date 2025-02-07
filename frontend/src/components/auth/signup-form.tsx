'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Github, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const validatePassword = (password: string) => ({
    length: password.length >= 8,
    number: /\d/.test(password),
    uppercase: /[A-Z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  })

  const requirements = validatePassword(formData.password)
  const isPasswordValid = Object.values(requirements).every(Boolean)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    if (!isPasswordValid) {
      setError('Please meet all password requirements')
      setIsLoading(false)
      return
    }

    try {
      router.push('/dashboard')
    } catch {
      setError('Failed to create account')
    } finally {
      setIsLoading(false)
    }
  }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleSocialLogin(arg0: string): void {
        throw new Error('Function not implemented.')
    }

  return (
    <Card className="w-[360px] mx-auto">
      <CardHeader className="pt-4 pb-2 text-center">
        <CardTitle className="text-2xl font-bold text-primary">Get Started</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 pb-3">
        <form onSubmit={handleSubmit} className="space-y-2">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              disabled={isLoading}
            />
            <div className="text-xs flex flex-wrap gap-2 mt-1 text-muted-foreground">
              {Object.entries({
                '8+ chars': requirements.length,
                '1 number': requirements.number,
                '1 uppercase': requirements.uppercase,
                '1 special': requirements.special,
              }).map(([text, isValid]) => (
                <span key={text} className={`flex items-center gap-1 ${isValid ? 'text-green-600' : 'text-gray-600'}`}>
                  <CheckCircle className={`h-3 w-3 ${isValid ? 'opacity-100' : 'opacity-40'}`} />
                  {text}
                </span>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full h-10" disabled={isLoading || !isPasswordValid}>
            {isLoading ? 'Loading...' : 'Create Account'}
          </Button>
        </form>

        <div className="relative text-center text-sm mt-3">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>

        <div className="flex justify-center gap-3">
        <Button variant="outline" onClick={() => handleSocialLogin('google')} disabled={isLoading}>
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin('github')} disabled={isLoading}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-3 flex justify-center text-sm">
        <p className="text-muted-foreground">
          Already have an account?{' '}
          <Button variant="link" className="p-0 h-auto font-normal" onClick={() => router.push('/login')}>
            Login
          </Button>
        </p>
      </CardFooter>
    </Card>
  )
}
