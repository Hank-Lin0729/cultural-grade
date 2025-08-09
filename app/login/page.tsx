'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // 模擬登入驗證
    if (email === 'demo@example.com' && password === 'password123') {
      // 設置登入狀態（實際應用中應使用更安全的方式）
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', email)
      router.push('/dashboard')
    } else {
      setError('帳號或密碼錯誤，請重新輸入')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-amber-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/traditional-chinese-pattern.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="border-2 border-amber-300 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <Link href="/" className="inline-flex items-center text-red-800 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </Link>
            <div className="text-4xl">🏛️</div>
            <CardTitle className="text-2xl text-red-900">會員登入</CardTitle>
            <CardDescription className="text-gray-600">
              歡迎回到文化導覽師學院
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-red-800">電子郵件</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="請輸入您的電子郵件"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-amber-300 focus:border-red-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-red-800">密碼</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="請輸入您的密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-amber-300 focus:border-red-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <Link href="/forgot-password" className="text-red-600 hover:text-red-800 transition-colors">
                  忘記密碼？
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-red-800 hover:bg-red-900 text-amber-100"
                disabled={isLoading}
              >
                {isLoading ? '登入中...' : '登入'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                還沒有帳號？
                <Link href="/register" className="text-red-600 hover:text-red-800 font-semibold ml-1">
                  立即註冊
                </Link>
              </p>
            </div>

            {/* Demo 帳號提示 */}
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 text-center">
                <strong>Demo 帳號：</strong><br />
                Email: demo@example.com<br />
                密碼: password123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
