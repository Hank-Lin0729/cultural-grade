'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [codeSent, setCodeSent] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendVerificationCode = async () => {
    if (!formData.email) {
      setError('請先輸入電子郵件')
      return
    }
    
    setIsLoading(true)
    // 模擬發送驗證碼
    setTimeout(() => {
      setCodeSent(true)
      setSuccess('驗證碼已發送至您的電子郵件')
      setIsLoading(false)
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // 表單驗證
    if (formData.password !== formData.confirmPassword) {
      setError('密碼與確認密碼不符')
      return
    }

    if (formData.password.length < 8) {
      setError('密碼至少需要8個字元')
      return
    }

    if (!codeSent) {
      setError('請先發送驗證碼')
      return
    }

    if (!formData.verificationCode) {
      setError('請輸入驗證碼')
      return
    }

    setIsVerifying(true)

    // 模擬註冊流程
    setTimeout(() => {
      if (formData.verificationCode === '123456') {
        setSuccess('註冊成功！即將跳轉至登入頁面...')
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      } else {
        setError('驗證碼錯誤，請重新輸入')
      }
      setIsVerifying(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-amber-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/placeholder-8p90f.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="border-2 border-amber-300 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <Link href="/" className="inline-flex items-center text-red-800 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </Link>
            <div className="text-4xl">🏛️</div>
            <CardTitle className="text-2xl text-red-900">會員註冊</CardTitle>
            <CardDescription className="text-gray-600">
              加入文化導覽師學院，開始您的學習之旅
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
              
              {success && (
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription className="text-green-800">
                    {success}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-red-800">姓名</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="請輸入您的中文姓名"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-amber-300 focus:border-red-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-red-800">電子郵件</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="請輸入您的電子郵件"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-amber-300 focus:border-red-500"
                  />
                  <Button
                    type="button"
                    onClick={sendVerificationCode}
                    disabled={isLoading || codeSent}
                    className="bg-amber-600 hover:bg-amber-700 text-red-900 whitespace-nowrap"
                  >
                    {isLoading ? '發送中...' : codeSent ? '已發送' : '發送驗證碼'}
                  </Button>
                </div>
              </div>

              {codeSent && (
                <div className="space-y-2">
                  <Label htmlFor="verificationCode" className="text-red-800">驗證碼</Label>
                  <Input
                    id="verificationCode"
                    name="verificationCode"
                    type="text"
                    placeholder="請輸入6位數驗證碼"
                    value={formData.verificationCode}
                    onChange={handleInputChange}
                    required
                    maxLength={6}
                    className="border-amber-300 focus:border-red-500"
                  />
                  <p className="text-xs text-gray-500">
                    Demo驗證碼：123456
                  </p>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-red-800">密碼</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="至少8碼英數混合"
                    value={formData.password}
                    onChange={handleInputChange}
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
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-red-800">確認密碼</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="請再次輸入密碼"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="border-amber-300 focus:border-red-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-red-800 hover:bg-red-900 text-amber-100"
                disabled={isVerifying}
              >
                {isVerifying ? '註冊中...' : '註冊'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                已經有帳號了？
                <Link href="/login" className="text-red-600 hover:text-red-800 font-semibold ml-1">
                  立即登入
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
